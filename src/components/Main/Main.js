import React from 'react';
import './Main.css';
import FetchedBooks from '../FetchedBooks';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../redux/actions';

function Main({ cards }) {
  const dispatch = useDispatch();
  // const cards = useSelector((state) => state.books.books);
  const query = 'all';
  const orderBy = 'relevance';
  let startIndex = cards.length;

  return (
    <main className='main-content'>
      <h2 className='cards-length'>Found {cards.length} results</h2>
      <ul className='cards'>
        <FetchedBooks cards={cards} />
      </ul>
      <button
        className='btn btn-primary btn-add-card'
        onClick={() => dispatch(fetchBooks({ query, orderBy, startIndex }))}
      >
        Добавить книг
      </button>
    </main>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cards: state.books.books,
  };
};

export default connect(mapStateToProps, null)(Main);
