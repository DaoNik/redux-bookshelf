import { START_FETCH_BOOKS } from './types';

const initialState = {
  books: [],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCH_BOOKS:
      return {
        ...state,
        books: action.payload.items,
      };
    default:
      return state;
  }
};
