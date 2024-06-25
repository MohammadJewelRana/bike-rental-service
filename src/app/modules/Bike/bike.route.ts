
import express from 'express';
import { BikeControllers } from './bike.controller';
import validateRequest from '../../middleware/validateRequest';
import { BikeValidations } from './bike.validation';
import auth from '../../middleware/auth';
 



const router=express.Router();

router.post('/',auth('admin'), validateRequest(BikeValidations.bikeValidationSchema),BikeControllers.createBike);
router.get('/', auth('admin'),BikeControllers.getAllBike);
router.delete('/:id',auth('admin'),BikeControllers.deleteSingleBike);
router.put('/:id',auth('admin'),validateRequest(BikeValidations.updateBikeValidationSchema), BikeControllers.updateBike);

 
export const BikeRoute=router;