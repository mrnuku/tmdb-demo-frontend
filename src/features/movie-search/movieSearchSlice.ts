import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { searchForTermCall } from './movieSearchAPI';

export interface SearchResult {
  page:          number;
  results:       SearchResultRecord[];
  total_pages:   number;
  total_results: number;
}

export interface SearchResultRecord {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       null | string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export interface MovieSearchState {
  searchResult: null | SearchResult;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MovieSearchState = {
  searchResult: null,
  status: 'idle',
};

export const searchForTerm = createAsyncThunk(
  'movieSearch/searchForTerm',
  async (term: string) => {
    const response = await searchForTermCall(term);
    return response.data;
  }
);

export const movieSearchSlice = createSlice({
  name: 'movieSearch',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchForTerm.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchForTerm.fulfilled, (state, action) => {
        state.status = 'idle';
        state.searchResult = action.payload;
      })
      .addCase(searchForTerm.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// export const { } = movieSearchSlice.actions;

export const selectSearchResult = (state: RootState) => state.movieSearch.searchResult;

export default movieSearchSlice.reducer;
