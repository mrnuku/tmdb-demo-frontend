import React, { useEffect } from 'react';
import {
  Link,
  useParams,
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../app/hooks';
import { detailForId } from './movieDetailSlice';
import { selectDetailResult } from './movieDetailSlice';
import styles from './MovieDetail.module.css';

function MovieDetail() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const detailResult = useSelector(selectDetailResult);
  
  useEffect(() => {
    if (typeof(id) == "string") {
      dispatch(detailForId(+id));
    }
  }, [dispatch, id]);

  if (detailResult !== null) {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className={styles.title}>
            { detailResult.title }
          </h1>
          <div className={styles.content}>
            <img src={detailResult.poster_path ? "https://image.tmdb.org/t/p/w500" + detailResult.poster_path : "https://via.placeholder.com/200C/O"} alt="" className={styles.image} />
            <p className={styles.paragraph}>
              { detailResult.imdb_api.plotShort.plainText }
            </p>
            <a href={detailResult.imdb_api.url} className={styles.link}>
              Wikipedia
            </a>
            <a href={`https://www.imdb.com/title/${detailResult.imdb_id}`} className={styles.link}>
              IMDB
            </a>
          </div>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
    </div>
  );
}

export default MovieDetail;
