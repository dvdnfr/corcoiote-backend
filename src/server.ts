import express from 'express';
import { pinoHttp } from 'pino-http';
import logger from './lib/logger.ts'
import errorHandler from './middlewares/errorHandler.ts';
import appUser from './middlewares/appUser.ts';
import CustomerRouter from './routes/customer.router.ts';

const app = express();

app.use(pinoHttp({ logger }));

app.use(express.json());

app.use('/customers', CustomerRouter);

app.use(appUser);

app.use(errorHandler);

app.listen(Number(process.env.PORT));