interface optionsProps {
  id: number;
  path: string;
  api: string;
  title: string;
  index?: boolean;
}

let baseUrl = 'https://kinopoiskapiunofficial.tech';

const options: optionsProps[] = [
  {
    id: 1,
    index: true,
    path: '/',
    api: `${baseUrl}/api/v2.2/films/collections`,
    title: 'НОВОЕ НА САЙТЕ',
  },

  {
    id: 2,
    path: 'serials',
    api: `${baseUrl}/api/v2.2/films?type=TV_SERIES`,
    title: 'СЕРИАЛЫ',
  },

  {
    id: 3,
    path: 'miniSerials',
    api: `${baseUrl}/api/v2.2/films?type=MINI_SERIES`,
    title: 'МИНИ СЕРИАЛЫ',
  },

  {
    id: 4,
    path: 'cartoons',
    api: `${baseUrl}/api/v2.2/films/collections?type=KIDS_ANIMATION_THEME`,
    title: 'МУЛЬТФИЛЬМЫ',
  },

  {
    id: 5,
    path: 'newItems',
    api: `${baseUrl}/api/v2.2/films?yearFrom=2023`,
    title: 'НОВИНКИ',
  },

  {
    id: 6,
    path: 'comedies',
    api: `${baseUrl}/api/v2.2/films?genres=13`,
    title: 'КОМЕДИИ',
  },

  {
    id: 7,
    path: 'fantastic',
    api: `${baseUrl}/api/v2.2/films?genres=6`,
    title: 'ФАНТАСТИКА',
  },

  {
    id: 8,
    path: 'historicalFilms',
    api: `${baseUrl}/api/v2.2/films?genres=15`,
    title: 'ИСТОРИЧЕСКИЕ ФИЛЬМЫ',
  },

  {
    id: 9,
    path: 'adventures',
    api: `${baseUrl}/api/v2.2/films?genres=7`,
    title: 'ПРИКЛЮЧЕНИЯ',
  },

  {
    id: 10,
    path: 'horror',
    api: `${baseUrl}/api/v2.2/films?genres=17`,
    title: 'УЖАСЫ',
  },
];

export default options;
