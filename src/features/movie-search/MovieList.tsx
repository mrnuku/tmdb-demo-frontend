import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { selectSearchResult } from './movieSearchSlice';
import { SearchResultRecord } from './movieSearchAPI'
import styles from './MovieList.module.css';

function MovieListRecord(props: any) {
  return (
    <section className={styles.section}>
      <img src={props.record.poster_path ? "https://image.tmdb.org/t/p/w500" + props.record.poster_path : "https://via.placeholder.com/200C/O"} alt="" className={styles.image} />
      <div className={styles.content}>
        <Link to={`detail/${props.record.id}`}>
          <h2 className={styles.title}>
            { props.record.title }
          </h2>
        </Link>
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
