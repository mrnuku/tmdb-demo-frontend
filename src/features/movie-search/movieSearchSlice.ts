import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  SearchResult,
  searchForTermCall,
} from './movieSearchAPI';

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
        state.searchResult = null;
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
