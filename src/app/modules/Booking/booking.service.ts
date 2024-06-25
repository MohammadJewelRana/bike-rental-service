import { JwtPayload } from 'jsonwebtoken';
import { TRental } from './boking.interface';
import { Rental } from './booking.model';

import { Bikes } from '../Bike/bike.model';
import mongoose from 'mongoose';
import { AppError } from '../../errors/AppError';
import httpStatus from 'http-status';
import { calculateTotalCost } from './booking.utils';

//create rental
const createRentalIntoDB = async (userData: JwtPayload, payload: TRental) => {
  //  console.log(userData);

  const { userId } = userData;
  payload.userId = userId;

  const getBikeInfo = await Bikes.findById({ _id: payload?.bikeId });

  if (getBikeInfo?.isAvailable === false) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      'Bike already rented..Please choose another one!!!',
    );
  }

  //create session
  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const updateBikeAvailability = await Bikes.findOneAndUpdate(
      { _id: payload?.bikeId },
      { $set: { isAvailable: false } },
      { new: true },
    );
    if (!updateBikeAvailability) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to booking');
    }

    const result = await Rental.create(payload);
    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to booking');
    }

    await session.commitTransaction(); //write complete
    await session.endSession(); //end

    return result;
    // return {
    //   result,
    //   updateBikeAvailability,
    // };
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(' failed to create rental');
  }
};

//return bike
const returnBikeFromDB = async (rentId: string) => {
  const isRentalExist = await Rental.findById({ _id: rentId });
  if (!isRentalExist) {
    throw new AppError(400, 'Rental does not exists');
  }
  const { bikeId, startTime } = isRentalExist;

  const bikeInfo = await Bikes.findById({ _id: bikeId });
  if (!bikeInfo) {
    throw new AppError(400, 'Bike does not exists');
  }

  const instantTime = new Date().toISOString();
  const { totalCost } = calculateTotalCost(
    startTime,
    bikeInfo.pricePerHour,
    instantTime,
  );

  const session = await mongoose.startSession();
  try {
    session.startTransaction();

    //transaction 1
    const updateBikeAvailability = await Bikes.findOneAndUpdate(
      { _id: bikeId },
      { $set: { isAvailable: true } },
      { new: true },
    );
    if (!updateBikeAvailability) {
      throw new AppError(httpStatus.BAD_REQUEST, 'failed to return bike');
    }

    //transaction 2
    const result = await Rental.findOneAndUpdate(
      { _id: rentId },
      {
        $set: {
          totalCost: totalCost,
          returnTime: instantTime,
          isReturned: true,
        },
      },
      { new: true },
    );
    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, 'failed to return bike');
    }

    await session.commitTransaction();
    await session.endSession();

    return result;

    // return {
    //   updateBikeAvailability,
    //   result,
    // };
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error(' failed to    return bike');
  }
};

//get all rental
const getAllRentalFromDB = async (userData: JwtPayload) => {
  // console.log(userData);

  const result = await Rental.find({ userId: userData?.userId });

  return result;
};

export const RentalServices = {
  createRentalIntoDB,
  returnBikeFromDB,
  getAllRentalFromDB,
};
