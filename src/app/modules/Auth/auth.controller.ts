import { Request, Response } from 'express';

import httpStatus from 'http-status';
import { AuthService } from './auth.service';
import sendResponse from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

const createUser = async (req: Request, res: Response) => {
  const result = await AuthService.createUserIntoDB(req.body);

  res.json({
    statusCode: httpStatus.OK,
    success: true,
    message: ' User registered successfully',
    data: result,
  });
};

const getAllUser = async (req: Request, res: Response) => {
  const result = await AuthService.getAllUserIntoDB();

  res.json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'successfully retrieved all user',
    data: result,
  });
};

const loginUser = catchAsync(async (req, res) => {
  const result = await AuthService.loginUserFromDB(req.body);

  // const { refreshToken, accessToken, needsPasswordChange } = result;

  // res.cookie('refreshToken', refreshToken, {
  //   secure: config.NODE_ENV === 'production',
  //   httpOnly: true,
  // });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in successfully',
    //   data: { accessToken, needsPasswordChange },
    data: null,
  });
});

export const AuthController = {
  createUser,
  getAllUser,
  loginUser,
};
