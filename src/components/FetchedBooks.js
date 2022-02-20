import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/actions';
import Card from './Card/Card';

function FetchedBooks({ cards }) {
  // const cards = useSelector((state) => state.books.books);
  console.log(cards);

  if (!cards.length) {
    return <></>;
  }

  return cards.map((card) => <Card card={card} key={card.id} />);
}

export default FetchedBooks;
