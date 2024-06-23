
import httpStatus from 'http-status';
import { BikeServices } from './bike.service';
import sendResponse from '../../utils/sendResponse';
import { catchAsync } from '../../utils/catchAsync';

const createBike = catchAsync(async (req, res) => {
  const result = await BikeServices.createBikeIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike added successfully',
    data: result,
  });
});

const getAllBike = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBikeIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'successfully retrieved all bike',
    data: result,
  });
});

const deleteSingleBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeServices.deleteBikeFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike deleted successfully',
    data: result,
  });
});

const updateBike = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BikeServices.updateSingleBikeFromDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike Updated successfully',
    data: result,
  });
});

export const BikeControllers = {
  createBike,
  getAllBike,
  deleteSingleBike,
  updateBike,
};
