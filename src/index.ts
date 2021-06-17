import express from 'express';
import mongoose from 'mongoose';

import { appConfig, mongoConfig } from './config';
import { applyMiddlewares } from './middlewares';
import { applyRoutes } from './routes';

mongoose.connect(mongoConfig.mongoUri, { 
  useNewUrlParser: true,
  useCreateIndex: true, 
  useUnifiedTopology: true
}).then(() => {
  console.log(`MongoDB connection success.`);
}).catch(err => {
  console.log(`MongoDB connection error. Please make sure MongoDB is running. ${err}`);
});

const app = express();

applyMiddlewares(app);
applyRoutes(app);

app.listen(appConfig.port, () => {
  console.log("Server is running...");
});