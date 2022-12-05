import { useSelector } from 'react-redux';
import {
  SearchResultRecord,
  selectSearchResult,
} from './movieSearchSlice';
import styles from './MovieList.module.css';

function MovieListRecord(props: any) {
  return (
    <section className={styles.section}>
      <img src={props.record.poster_path ? "https://image.tmdb.org/t/p/w500" + props.record.poster_path : "https://via.placeholder.com/200C/O"} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>
          { props.record.title }
        </h2>
        <p className={styles.paragraph}>
          { props.record.overview }
        </p>
      </div>
    </section>
);
}

export function MovieList() {
  const searchResult = useSelector(selectSearchResult);

  return (
    <>
      <div className={styles.container}>
        {searchResult !== null ? searchResult.results.map((record: SearchResultRecord) => <MovieListRecord key={record.id} record={record} />) : null}
      </div>
    </>
  );
}
