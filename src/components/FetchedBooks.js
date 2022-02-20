import React from 'react';
import Card from './Card/Card';

function FetchedBooks({ cards }) {
  if (!cards.length) {
    return <></>;
  }

  return cards.map((card) => <Card card={card} key={card.id} />);
}

export default FetchedBooks;
