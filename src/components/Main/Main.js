import React from 'react';
import './Main.css';
import FetchedBooks from '../FetchedBooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/actions';

function Main() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.books.books);
  const query = 'all';
  const orderBy = 'relevance';

  return (
    <main className='main-content'>
      <h2 className='cards-length'>Found {cards.length} results</h2>
      <ul className='cards'>
        <FetchedBooks />
      </ul>
      <button
        className='btn btn-primary btn-add-card'
        onClick={() => dispatch(fetchBooks(query, orderBy))}
      >
        Добавить книг
      </button>
    </main>
  );
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     fetchedBooks: state.posts.fetchedBooks,
//   };
// };

export default Main;
