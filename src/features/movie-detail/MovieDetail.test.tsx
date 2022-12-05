import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import MovieDetail from './MovieDetail';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MovieDetail />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
