import React from 'react';
import Card from '../Card/Card';
import './Main.css';

function Main({ cards }) {
  return (
    <main className='main-content'>
      <h2 className='cards-length'>Found {cards.length} results</h2>
      <ul className='cards'>
        {cards.map((card) => {
          return <Card key={card.id} card={card} />;
        })}
      </ul>
    </main>
  );
}

export default Main;
