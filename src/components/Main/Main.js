import React from 'react';
import Card from '../Card/Card';

function Main({ cards }) {
  return (
    <main>
      <h1>Main</h1>
      <ul>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
