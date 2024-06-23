import { AppError } from '../../errors/AppError';
import { TBike } from './bike.interface';
import { Bikes } from './bike.model';

const createBikeIntoDB = async (payload: TBike) => {
  const result = await Bikes.create(payload);
  return result;
};

const getAllBikeIntoDB = async () => {
  const result = await Bikes.find();
  return result;
};

const deleteBikeFromDB = async (id: string) => {
  const isBikeExists = await Bikes.findById({ _id: id });
  // console.log(isBikeExists);

  if (!isBikeExists) {
    throw new Error( 'Bike does not exists');
  }
  // console.log(isBikeExists);

  const result = await Bikes.deleteOne({ _id: id });

  return isBikeExists;
};

// update single bike
const updateSingleBikeFromDB = async (
  bikeID: string,
  payload: Partial<TBike>,
) => {
  const isBikeExist = await Bikes.findById({ _id: bikeID });
  if (!isBikeExist) {
    throw new AppError(400, 'Bike does not exists');
  }
  const result = await Bikes.findOneAndUpdate({ _id: bikeID }, payload, {
    new: true,
  });

  return result;
};

export const BikeServices = {
  createBikeIntoDB,
  getAllBikeIntoDB,
  deleteBikeFromDB,
  updateSingleBikeFromDB,
};
