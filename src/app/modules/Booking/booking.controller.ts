 
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RentalServices } from "./booking.service";


const createRental = catchAsync(async (req, res) => {
    const result = await RentalServices.createRentalIntoDB(req.user,req.body);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Rental created successfully',
      data: result,
    });
  });

const returnBike = catchAsync(async (req, res) => {
    // console.log(req.params);
    const {id}=req.params;
    
    const result = await RentalServices.returnBikeFromDB(id);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Bike returned successfully',
      data: result,
    });
  });


const getAllBike = catchAsync(async (req, res) => {
  
    // console.log(req.user);
    
    
    const result = await RentalServices.getAllRentalFromDB(req.user);
    
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Rentals retrieved successfully',
      data: result,
    });
  });


  export const RentalController={
    createRental,
    returnBike,
    getAllBike

  }