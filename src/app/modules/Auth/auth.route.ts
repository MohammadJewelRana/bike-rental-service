
import express from 'express';
import { AuthController } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidations } from './auth.validation';
import auth from '../../middleware/auth';
 

const router=express.Router();

router.post('/signup',   validateRequest(AuthValidations.userValidationSchema) ,AuthController.createUser);

router.get('/', auth('admin'),AuthController.getAllUser);

router.post('/login',validateRequest(AuthValidations.loginValidationSchema),AuthController.loginUser)


router.post('/refresh-token',validateRequest(AuthValidations.refreshTokenValidationSchema),AuthController.refreshToken)



export const AuthRoute=router;