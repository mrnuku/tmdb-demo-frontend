import { useSelector } from 'react-redux';
import {
  SearchResultRecord,
  selectSearchResult,
} from './listMoviesSlice';
// import styles from './ListMovies.module.css';

function ListMovieRecord(props: any) {
  return <li>{ props.record.title }</li>;
}

export function ListMovies() {
  const searchResult = useSelector(selectSearchResult);

  return (
    <>
      <ul>
        {searchResult !== null ? searchResult.results.map((record: SearchResultRecord) => <ListMovieRecord key={record.id} record={record} />) : null}
      </ul>
    </>
  );
}
