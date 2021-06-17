import { Place } from './place.model';

export class PlaceController {
  /**
   * Return places by movie id.
   */
  public static listPlaces = async (movieId: string) =>
    await Place.find({ movieId });

  /**
   * To book place.
   */
  public static toBook = async (data: any) => 
    await Place.create(data);

  /**
   * Delete movie.
   */
  public static cancelBooking = async (_id: string) => 
    await Place.findByIdAndDelete(_id);
}