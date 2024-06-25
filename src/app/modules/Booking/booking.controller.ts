 
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


  export const RentalController={
    createRental,

  }