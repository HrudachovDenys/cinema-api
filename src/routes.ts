import express, { Application } from "express";

import movieRoutes from "./modules/movie/movie.router";
import placeRoutes from "./modules/place/place.router";

export const applyRoutes = (app: Application) => {
  // Register movie routes.
  app.use('/movie', movieRoutes);
  // Register place routes.
  app.use('/place', placeRoutes);
}