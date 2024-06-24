import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.service";

 

 const getSingleUser=catchAsync(async(req,res)=>{
    // console.log(req.user);
    const result=await UserServices.getSingleUserFromDB(req.user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User profile retrieved successfully',
        data: result,
        // data: null,
      });
 })

 const updateProfile=catchAsync(async(req,res)=>{

    const result=await UserServices.updateProfileFromDB(req.user,req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Profile updated successfully',
        data: result,
        // data: null,
      });

 })


 export const UserController={
    getSingleUser,
    updateProfile,

 }