import httpStatus from "http-status";
import { AppError } from "../../errors/AppError";
import { TUser } from "./auth.interface";
import { AuthUser } from "./auth.model";

 


const createUserIntoDB=async(payload:TUser)=>{
    const result=await AuthUser.create(payload);
    return result;
}

const getAllUserIntoDB=async()=>{
    const result=await AuthUser.find();
    return result;
}



const loginUserFromDB = async (payload: Partial<TUser>) => {
      console.log(payload);
  
    const user = await AuthUser.findOne({ email: payload?.email });
      console.log(user);
  
    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'User does not exists');
    }
  
    if (user?.isDeleted === true) {
      throw new AppError(httpStatus.NOT_FOUND, 'User does not exists');
    }
  
 
    // //check password is correct
    // const isPasswordMatched = await bcrypt.compare(
    //   payload?.password,
    //   isUserExists?.password,
    // );
    // // console.log(isPasswordMatched);
    // if (!isPasswordMatched) {
    //   throw new AppError(httpStatus.FORBIDDEN, '    password does not match  ');
    // }
  
 
  
 
  
    // //create token and sent to client
    // const jwtPayload = {
    //   userId: user.id,
    //   role: user.role,
    // };
  
    // const accessToken = createToken(
    //   jwtPayload,
    //   config.jwt_access_secret as string,
    //   config.jwt_access_expires_in as string,
    // );
  
    // // const refreshToken = createToken(
    // //   jwtPayload,
    // //   config.jwt_refresh_secret as string,
    // //   config.jwt_refresh_expires_in as string,
    // // );
  
    // return {
    //   accessToken,
    //   refreshToken,
    //   needsPasswordChange: user?.needsPasswordChange,
    // };


  };


export const AuthService={
    createUserIntoDB,
    getAllUserIntoDB,
    loginUserFromDB
    
}