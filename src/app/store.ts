import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import movieSearchReducer from '../features/movie-search/movieSearchSlice';
import movieDetailReducer from '../features/movie-detail/movieDetailSlice';

export const store = configureStore({
  reducer: {
    movieSearch: movieSearchReducer,
    movieDetail: movieDetailReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
