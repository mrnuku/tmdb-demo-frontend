import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {
  DetailResult,
  detailForIdCall,
} from './movieDetailAPI';

export interface MovieDetailState {
  detailResult: null | DetailResult;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: MovieDetailState = {
  detailResult: null,
  status: 'idle',
};

export const detailForId = createAsyncThunk(
  'movieDetail/detailForId',
  async (id: number) => {
    const response = await detailForIdCall(id);
    return response.data;
  }
);

export const movieDetailSlice = createSlice({
  name: 'movieSearch',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(detailForId.pending, (state) => {
        state.status = 'loading';
        state.detailResult = null;
      })
      .addCase(detailForId.fulfilled, (state, action) => {
        state.status = 'idle';
        state.detailResult = action.payload;
      })
      .addCase(detailForId.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

// export const { } = movieDetailSlice.actions;

export const selectDetailResult = (state: RootState) => state.movieDetail.detailResult;

export default movieDetailSlice.reducer;
