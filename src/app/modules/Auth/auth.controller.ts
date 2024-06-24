import { Request, Response } from 'express';

import httpStatus from 'http-status';
import { AuthService } from './auth.service';
import sendResponse from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';
import config from '../../config';

const createUser = async (req: Request, res: Response) => {
  // const {password,userData}=req.body;

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

  const { refreshToken, accessToken } = result;

  res.cookie('refreshToken', refreshToken, {
    secure: config.NODE_ENV === 'production',
    httpOnly: true,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in successfully',
    data: { accessToken, refreshToken },
    // data: null,
  });
});

const refreshToken = catchAsync(async (req, res) => {
  const { refreshToken } = req.cookies;
  console.log(refreshToken);

  const result = await AuthService.refreshToken(refreshToken);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'access token retrieved successfully',
    data: result,
  });
});

export const AuthController = {
  createUser,
  getAllUser,
  loginUser,
  refreshToken,
};
