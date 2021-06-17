import { Movie } from '../modules/movie/movie.model';

(async () => {
  await Movie.insertMany([
    {
      name: 'Властелин колец: Братство кольца',
      image: 'https://www.kinonews.ru/insimgs/poster/thumbs/poster2606_3.jpg',
    },
    {
      name: 'Зеленая миля',
      image: 'https://www.kinonews.ru/insimgs/poster/thumbs/poster2639_3.jpg',
    },
    {
      name: 'Крестный отец',
      image: 'https://www.kinonews.ru/insimgs/poster/thumbs/poster11887_1.jpg',
    }
  ])
})()