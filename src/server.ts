import express from 'express';
import errorHandler from './middlewares/errorHandler.ts';
import appUser from './middlewares/appUser.ts';
import requestLogger from './middlewares/requestLogger.ts';
import CustomerRouter from './routes/customer.router.ts';

const app = express();

app.use(express.json());

app.use('/customers', CustomerRouter);

app.use(appUser);

app.use(errorHandler);

app.listen(Number(process.env.PORT));