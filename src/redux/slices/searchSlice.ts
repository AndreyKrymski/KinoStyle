import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { filmsProps } from '../filmsProps';

interface SearchData {
  total: number | null;
  totalPages: number | null;
  items: filmsProps[];
}
interface SearchState {
  searchData: SearchData;
  searchLoading: boolean;
  searchError: string | null;
  keyward: string | null;
  api: string | null;
}

const initialSearchState: SearchState = {
  searchData: { total: null, totalPages: null, items: [] },
  searchLoading: false,
  searchError: null,
  keyward: null,
  api: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState: initialSearchState,
  reducers: {
    searchStart: (state) => {
      state.searchLoading = true;
      state.searchError = null;
    },
    searchSuccess: (state, action: PayloadAction<SearchData>) => {
      state.searchLoading = false;
      state.searchData = action.payload;
    },
    searchFailure: (state, action: PayloadAction<string>) => {
      state.searchLoading = false;
      state.searchError = action.payload;
    },
    searchKeyWard: (state, action: PayloadAction<string>) => {
      state.keyward = action.payload;
    },
    searchApi: (state, action: PayloadAction<string>) => {
      state.api = action.payload;
    },

    searchReset: (state) => {
      state.searchLoading = initialSearchState.searchLoading;
      state.searchData = initialSearchState.searchData;
      state.searchError = initialSearchState.searchError;
      //state.keyward = initialSearchState.keyward;
      state.api = initialSearchState.api;
    },
  },
});

export const {
  searchStart,
  searchSuccess,
  searchFailure,
  searchKeyWard,
  searchApi,
  searchReset,
} = searchSlice.actions;
export default searchSlice.reducer;

export const searchName =
  (api: string, keyword?: string): AppThunk =>
  async (dispatch) => {
    let fullApi;
    if (keyword) {
      fullApi = `${api}${encodeURIComponent(keyword)}`;
    } else {
      fullApi = api;
    }
    try {
      dispatch(searchStart());
      dispatch(searchApi(fullApi));
      const response = await fetch(fullApi, {
        method: 'GET',
        headers: {
          'X-API-KEY': '1252da6e-3c22-446d-9e8e-da76592752f9',
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data.message) {
        dispatch(searchFailure(data.message));
      } else {
        dispatch(searchSuccess(data));
      }
    } catch (error: any) {
      dispatch(searchFailure(error.message));
    }
  };
