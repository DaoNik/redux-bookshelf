import { FETCH_BOOKS } from './types';

const initialState = {
  books: [],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: state.books.concat(action.payload.items),
      };
    default:
      return state;
  }
};
