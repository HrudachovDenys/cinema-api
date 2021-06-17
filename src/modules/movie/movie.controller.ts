import { Movie } from './movie.model';

export class MovieController {
  /**
   * Return all movies.
   */
  public static listMovies = async () =>
    await Movie.find();
}