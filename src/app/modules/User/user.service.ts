import { JwtPayload } from 'jsonwebtoken';
import { AuthUser } from '../Auth/auth.model';
import { AppError } from '../../errors/AppError';
import { TUser } from '../Auth/auth.interface';

const getSingleUserFromDB = async (payload: JwtPayload) => {
  if (!payload) {
    throw new AppError(400, 'userData not found');
  }
  const result = await AuthUser.findById({ _id: payload.userId });
  return result;
};


const updateProfileFromDB = async (payload: JwtPayload,updatedData:TUser) => {
  if (!payload) {
    throw new AppError(400, 'userData not found');
  }
  const result = await AuthUser.findByIdAndUpdate({ _id: payload.userId },updatedData,{new:true});
  return result;
};

export const UserServices = {
  getSingleUserFromDB,
  updateProfileFromDB
};
