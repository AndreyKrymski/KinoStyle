// searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { filmsProps } from '../filmsProps';

interface sliceProps {
  imageUrl: string;
  previewUrl: string;
}
interface imagesFilms {
  total: number | null;
  totalPages: number | null;
  items: sliceProps[];
}

interface FilmState {
  filmData: filmsProps | null;
  filmLoading: boolean;
  filmError: string | null;
  filmImages: imagesFilms;
}

const initialFilmState: FilmState = {
  filmData: null,
  filmLoading: false,
  filmError: null,
  filmImages: { total: null, totalPages: null, items: [] },
};

const filmSlice = createSlice({
  name: 'film',
  initialState: initialFilmState,
  reducers: {
    filmStart: (state) => {
      state.filmLoading = true;
      state.filmError = null;
    },
    filmSuccess: (state, action: PayloadAction<filmsProps>) => {
      state.filmLoading = false;
      state.filmData = action.payload;
    },
    filmFailure: (state, action: PayloadAction<string>) => {
      state.filmLoading = false;
      state.filmError = action.payload;
    },

    filmImg: (state, action: PayloadAction<imagesFilms>) => {
      state.filmLoading = false;
      state.filmImages = action.payload;
    },

    filmReset: (state) => {
      state.filmLoading = initialFilmState.filmLoading;
      state.filmData = initialFilmState.filmData;
      state.filmError = initialFilmState.filmError;
    },
  },
});

export const { filmStart, filmSuccess, filmFailure, filmReset, filmImg } =
  filmSlice.actions;
export default filmSlice.reducer;

export const filmName =
  (api: string, keyword?: string): AppThunk =>
  async (dispatch) => {
    let fullApi;
    if (keyword) {
      fullApi = `${api}${encodeURIComponent(keyword)}`;
    } else {
      fullApi = api;
    }
    try {
      dispatch(filmStart());
      const response = await fetch(fullApi, {
        method: 'GET',
        headers: {
          'X-API-KEY': '1252da6e-3c22-446d-9e8e-da76592752f9',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.message) {
        dispatch(filmFailure(data.message));
      } else {
        dispatch(filmSuccess(data));
      }
    } catch (error: any) {
      dispatch(filmFailure(error.message));
    }
  };

export const setFilmImage =
  (api: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(filmStart());
      const response = await fetch(api, {
        method: 'GET',
        headers: {
          'X-API-KEY': '1252da6e-3c22-446d-9e8e-da76592752f9',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.message) {
        dispatch(filmFailure(data.message));
      } else {
        dispatch(filmImg(data));
      }
    } catch (error: any) {
      dispatch(filmFailure(error.message));
    }
  };
