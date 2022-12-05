import axios from "axios";

export function searchForTermCall(term: string) {
  return new Promise<{ data: any }>((resolve, reject) =>
    axios.get("/search", {params: {q: term}})
    .then(res => resolve({ data: res.data }))
  )
}
