import { Router } from 'express';
import { BikeRoute } from '../modules/Bike/bike.route';
import { AuthRoute } from '../modules/Auth/auth.route';
import { UserRoute } from '../modules/User/user.route';


const router=Router();

const moduleRoutes=[
    {path:'/auth',route:AuthRoute},
    {path:'/bikes',route:BikeRoute},
    {path:'/users',route:UserRoute},

]

moduleRoutes.forEach((route)=>router.use(route.path,route.route));



export default router;