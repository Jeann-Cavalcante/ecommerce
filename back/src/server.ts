import express, { NextFunction, Request, Response  } from "express";
import cors from 'cors';
import router from './routes';

const app = express();


app.use(express.json());
app.use(cors());

app.use(router)



app.listen(3333, () => {
  console.log('Server started on port http://localhost:3333/ !');
});