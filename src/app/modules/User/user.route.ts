
import express from 'express';
import { UserController } from './user.controller';



const router=express.Router();

router.post('/signup',UserController.createUser);
router.get('/',UserController.getAllUser);
router.get('/:',UserController.getAllUser);



export const UserRoute=router;