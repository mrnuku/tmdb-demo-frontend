import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import {
  searchForTerm,
} from './movieSearchSlice';

const SearchBar = () => {
  const [inputField , setInputField] = useState({
      term: ''
  });
  const dispatch = useAppDispatch();

  const inputsHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const { name, value } = event.target;
     setInputField((prevState) => ({
       ...prevState,
       [name]: value,
     }));
  }

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchForTerm(inputField.term));
  }

  return <form onSubmit={submitForm}>
    <input
      type="text"
      id="header-search"
      placeholder="Search movies on TMDB"
      onChange={inputsHandler}
      name="term"
      value={inputField.term}
    />
    <button type="submit">Search</button>
  </form>
}

export default SearchBar;
