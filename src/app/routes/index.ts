import { Router } from 'express';
import { UserRoute } from '../modules/User/user.route';
import { BikeRoute } from '../modules/Bike/bike.route';


const router=Router();

const moduleRoutes=[
    {path:'/auth',route:UserRoute},
    {path:'/bikes',route:BikeRoute},

]

moduleRoutes.forEach((route)=>router.use(route.path,route.route));



export default router;