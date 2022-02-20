import { START_FETCH_BOOKS } from './types';

export function fetchBooks({ query = 'all', orderBy = 'relevance' }) {
  return async (dispatch) => {
    try {
      // dispatch(showLoader());
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&orderBy=${orderBy}&maxResults=30&key=AIzaSyDm7BoTRuvNX7gL2-rCUdMaVE8buxJxSyM`
      );
      const json = await response.json();
      dispatch({ type: START_FETCH_BOOKS, payload: json });
    } catch (e) {
      // dispatch(showAlert('Что-то пошло не так'));
      // dispatch(hideLoader());
    }
  };
}
