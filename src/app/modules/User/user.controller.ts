import { Request, Response } from 'express';
import { UserService } from './user.service';
import httpStatus from 'http-status';

const createUser = async (req: Request, res: Response) => {
  const result = await UserService.createUserIntoDB(req.body);

  res.json({
    statusCode: httpStatus.OK,
    success: true,
    message: ' User registered successfully',
    data: result,
  });
};

const getAllUser = async (req: Request, res: Response) => {
  const result = await UserService.getAllUserIntoDB();

  res.json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'successfully retrieved all user',
    data: result,
  });
};




export const UserController = {
  createUser,
  getAllUser,
};
