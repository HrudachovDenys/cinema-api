import express, { Response, Request } from "express";

import { PlaceController } from './place.controller';

const router = express.Router();

router.post('/list', async (req: Request, res: Response) => {
  return res.json(await PlaceController.listPlaces(req.body._id));
});
router.post('/to-book', async (req: Request, res: Response) => {
  return res.json(await PlaceController.toBook({ ...req.body }));
});
router.post('/cancel-booking', async (req: Request, res: Response) => {
  return res.json(await PlaceController.cancelBooking(req.body._id));
});

export default router;