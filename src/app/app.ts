import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';
import cookieParser from 'cookie-parser';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());
app.use(express.text());
app.use(cookieParser());


app.use('/api',router)


app.get('/', (req: Request, res: Response) => {
  // const a = 10;
  res.send("testing route");
});


//global error handling
app.use(globalErrorHandler); //error handling
app.use(notFound); //not found route
 

export default app;
