import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import './ViewCard.css';

function ViewCard({ cards }) {
  const location = useLocation();
  console.log(cards, location.pathname);
  const card = cards.filter((card) => '/' + card.id === location.pathname);
  console.log(card);
  if (!card[0]) {
    return (
      <main className='view-card'>
        <h1>Page Not Found</h1>
        <NavLink to='/'>Вернуться на главную</NavLink>
      </main>
    );
  }

  const {
    categories = 'All',
    title = 'No Title',
    authors = 'No Author',
    description = 'No description',
  } = card[0].volumeInfo;
  const { smallThumbnail: image } = card[0].volumeInfo.imageLinks ?? '';

  return (
    <main className='view-card'>
      <div className='view-card__image-overlay'>
        <img className='view-card__image' src={image} alt={title} />
      </div>
      <div className='view-card__block'>
        <h1>{title}</h1>
        <nav className='view-card__breadcrumb' aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <NavLink to='/'>All</NavLink>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              {categories}
            </li>
          </ol>
        </nav>
        <p className='view-card__authors'>{authors}</p>
        <p className='view-card__description'>{description}</p>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cards: state.books.books,
  };
};

export default connect(mapStateToProps, null)(ViewCard);
