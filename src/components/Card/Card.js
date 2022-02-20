import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Card.css';

function Card({ card }) {
  const { categories = 'All', title, authors = 'No Author' } = card.volumeInfo;
  const { smallThumbnail: image } = card.volumeInfo.imageLinks;
  const navigate = useNavigate();

  function handleCardClick() {
    navigate(`/${card.id}`);
  }

  function checkAuthors() {
    let newAuthors = '';
    if (Array.isArray(authors) && authors.length > 1) {
      authors.forEach((author) => {
        if (author !== authors[authors.length - 1]) {
          newAuthors += author + ', ';
        } else {
          newAuthors += author;
        }
      });
      return newAuthors;
    } else {
      return authors;
    }
  }

  return (
    <li onClick={handleCardClick} className='card' style={{ width: '18rem' }}>
      <img src={image} className='card-img-top card-image' alt={title}></img>
      <div className='card-body'>
        <a className='card-link'>{categories}</a>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{checkAuthors()}</p>
      </div>
    </li>
  );
}

export default Card;
