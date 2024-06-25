
import express from 'express';
import { RentalController } from './booking.controller';
import validateRequest from '../../middleware/validateRequest';
import { RentalValidations } from './booking.validation';
import auth from '../../middleware/auth';
 
 



const router=express.Router();

router.post('/' ,auth('user'), validateRequest(RentalValidations.rentalValidationSchema), RentalController.createRental);

router.put('/:id/return' ,auth('admin'), RentalController.returnBike);

router.get('/' ,auth('user'), RentalController.getAllBike);
 



export const RentalRoute=router;