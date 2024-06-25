
import express from 'express';
import { RentalController } from './booking.controller';
import validateRequest from '../../middleware/validateRequest';
import { RentalValidations } from './booking.validation';
import auth from '../../middleware/auth';
 
 



const router=express.Router();

router.post('/' ,auth('user' ,'admin'), validateRequest(RentalValidations.rentalValidationSchema), RentalController.createRental);

router.put('/:id/return' ,auth('admin'), RentalController.returnBike);
 



export const RentalRoute=router;