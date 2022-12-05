import axios from "axios";

export interface SearchResult {
  page:          number;
  results:       SearchResultRecord[];
  total_pages:   number;
  total_results: number;
}

export interface SearchResultRecord {
  adult:             boolean;
  backdrop_path:     null | string;
  genre_ids:         number[];
  id:                number;
  original_language: string;
  original_title:    string;
  overview:          string;
  popularity:        number;
  poster_path:       null | string;
  release_date:      Date;
  title:             string;
  video:             boolean;
  vote_average:      number;
  vote_count:        number;
}

export function searchForTermCall(term: string) {
  return new Promise<{ data: SearchResult }>((resolve, reject) =>
    axios.get("/api/search", {params: {q: term}})
    .then(res => resolve({ data: res.data }))
  )
}
