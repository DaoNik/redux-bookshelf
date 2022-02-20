import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/actions';
import Card from './Card/Card';

function FetchedBooks() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.books.books);
  const query = 'all';
  const orderBy = 'relevance';
  console.log(cards);

  if (!cards.length) {
    return <></>;
  }

  return cards.map((card) => <Card card={card} key={card.id} />);
}

export default FetchedBooks;
