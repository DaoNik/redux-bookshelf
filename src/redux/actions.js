import { CHANGE_QUERIES, FETCH_BOOKS, NEW_FETCH_BOOKS } from './types';

export function changeQueries(newQueries) {
  console.log(newQueries);
  return {
    type: CHANGE_QUERIES,
    payload: newQueries,
  };
}

export function fetchBooks({ query, orderBy, startIndex, filter, isNewBook }) {
  return async (dispatch) => {
    try {
      if (!query.trim()) {
        query = 'all';
      }
      // dispatch(showLoader());
      console.log(startIndex);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&categories:${filter}&startIndex=${startIndex}&orderBy=${orderBy}&maxResults=30&key=AIzaSyDm7BoTRuvNX7gL2-rCUdMaVE8buxJxSyM`
      );
      const json = await response.json();
      dispatch({
        type: isNewBook ? NEW_FETCH_BOOKS : FETCH_BOOKS,
        payload: json,
      });
    } catch (e) {
      // dispatch(showAlert('Что-то пошло не так'));
      // dispatch(hideLoader());
    }
  };
}
