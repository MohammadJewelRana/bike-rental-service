 
import express from 'express';
import { UserController } from './user.controller';
import auth from '../../middleware/auth';
import validateRequest from '../../middleware/validateRequest';
import { AuthValidations } from '../Auth/auth.validation';
 
 



const router=express.Router();

router.get('/me',auth('admin'), UserController.getSingleUser);

router.put('/me',auth('admin'), validateRequest(AuthValidations.updateUserValidationSchema), UserController.updateProfile);

 
 


 


export const UserRoute=router;