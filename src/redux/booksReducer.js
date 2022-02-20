import { CHANGE_QUERIES, FETCH_BOOKS, NEW_FETCH_BOOKS } from './types';

const initialState = {
  books: [],
  queries: {
    query: 'all',
    orderBy: 'relevance',
    startIndex: 0,
    filter: 'All',
    isNewBook: false,
  },
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: state.books.concat(action.payload.items),
      };
    case NEW_FETCH_BOOKS:
      return {
        ...state,
        books: action.payload.items,
      };
    case CHANGE_QUERIES:
      return {
        ...state,
        queries: action.payload,
      };
    default:
      return state;
  }
};
