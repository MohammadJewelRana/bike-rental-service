import { JwtPayload } from 'jsonwebtoken';
import { TRental } from './boking.interface';
import { Rental } from './booking.model';

import { Bikes } from '../Bike/bike.model';
import mongoose from 'mongoose';
import { AppError } from '../../errors/AppError';
import httpStatus from 'http-status';

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

// update single bike
// const updateSingleBikeFromDB = async (
//   bikeID: string,
//   payload: Partial<TBike>,
// ) => {
//   const isBikeExist = await Bikes.findById({ _id: bikeID });
//   if (!isBikeExist) {
//     throw new AppError(400, 'Bike does not exists');
//   }
//   const result = await Bikes.findOneAndUpdate({ _id: bikeID }, payload, {
//     new: true,
//   });

//   return result;
// };

export const RentalServices = {
  createRentalIntoDB,
};
