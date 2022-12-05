import React, { useEffect } from 'react';
import {
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
          <section className={styles.section}>
            <img src={detailResult.belongs_to_collection.poster_path ? "https://image.tmdb.org/t/p/w500" + detailResult.belongs_to_collection.poster_path : "https://via.placeholder.com/200C/O"} alt="" className={styles.image} />
            <div className={styles.content}>
              <p className={styles.paragraph}>
                { detailResult.overview }
              </p>
            </div>
          </section>
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
