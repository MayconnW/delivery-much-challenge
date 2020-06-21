import 'reflect-metadata';
import "dotenv/config";
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import handleErrorMiddleware from './middlewares/handleError';

import 'shared/container';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(handleErrorMiddleware);

app.listen(process.env.PORT || 3333, () => console.log('Server Started'));
