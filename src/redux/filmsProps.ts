interface countrys {
  country: string;
}

interface genres {
  genre: string;
}
 export interface filmsProps {
   kinopoiskId: number;
   kinopoiskHDId: string;
   imdbId: string;
   nameRu: string;
   nameEn: string | null;
   nameOriginal: string;
   posterUrl: string;
   posterUrlPreview: string;
   coverUrl: string;
   logoUrl: string | null;
   reviewsCount: number;
   ratingGoodReview: number;
   ratingGoodReviewVoteCount: number;
   ratingKinopoisk: number;
   ratingKinopoiskVoteCount: number;
   ratingImdb: number;
   ratingImdbVoteCount: number;
   ratingFilmCritics: number;
   ratingFilmCriticsVoteCount: number;
   ratingAwait: number | null;
   ratingAwaitCount: number;
   ratingRfCritics: number;
   ratingRfCriticsVoteCount: number;
   webUrl: string;
   year: number;
   filmLength: number;
   slogan: string;
   description: string;
   shortDescription: string;
   editorAnnotation: string | null;
   isTicketsAvailable: boolean;
   productionStatus: string | null;
   type: string;
   ratingMpaa: string;
   ratingAgeLimits: string;
   hasImax: boolean;
   has3D: boolean;
   nullable: true;
   lastSync: string;
   countries: countrys[];
   genres: genres[];
   startYear: number | null;
   endYear: number | null;
   serial: boolean;
   shortFilm: boolean;
   completed: boolean;
 }
