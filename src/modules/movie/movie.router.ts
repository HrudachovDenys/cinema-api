import express, { Response, Request } from "express";

import { MovieController } from './movie.controller';

const router = express.Router();

router.get('/list', async (_: Request, res: Response) => {
  return res.json(await MovieController.listMovies());
});

export default router;