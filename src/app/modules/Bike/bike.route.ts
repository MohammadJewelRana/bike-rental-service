
import express from 'express';
import { BikeControllers } from './bike.controller';
import validateRequest from '../../middleware/validateRequest';
import { BikeValidations } from './bike.validation';
 



const router=express.Router();

router.post('/',validateRequest(BikeValidations.bikeValidationSchema),BikeControllers.createBike);
router.get('/',BikeControllers.getAllBike);
router.delete('/:id',BikeControllers.deleteSingleBike);
router.put('/:id',validateRequest(BikeValidations.updateBikeValidationSchema), BikeControllers.updateBike);

 



export const BikeRoute=router;