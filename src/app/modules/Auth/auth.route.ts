
import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidations } from './auth.validation';
 



const router=express.Router();

router.post('/signup',validateRequest(AuthValidations.userValidationSchema) ,AuthController.createUser);

router.get('/',AuthController.getAllUser);

router.post('/login',validateRequest(AuthValidations.loginValidationSchema),AuthController.loginUser)




export const AuthRoute=router;