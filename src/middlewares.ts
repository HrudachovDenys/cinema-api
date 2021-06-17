import { Application } from "express";
import bodyParser from "body-parser";

import { appConfig } from "./config/appConfig";

export const applyMiddlewares = (app: Application) => { 
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use((_: any, res: Record<string, any>, next: () => void) => {
    res.setHeader("Access-Control-Allow-Origin", appConfig.clientUrl);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
  });
};