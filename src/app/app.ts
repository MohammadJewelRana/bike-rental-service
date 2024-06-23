import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './routes';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());
app.use(express.text());

app.use('/api',router)


app.get('/', (req: Request, res: Response) => {
  // const a = 10;
  res.send("testing route");
});

export default app;
