import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import MovieSearch from './MovieSearch';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <MovieSearch />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
