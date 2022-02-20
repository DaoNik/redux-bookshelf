import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../images/bookshelfs.jpeg';

function ViewCard({ card }) {
  const { category = 'Computers' } = card;

  return (
    <main>
      <h2>J.S. Bach The Goldberg Variations in Open Score</h2>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <NavLink to='/'>All</NavLink>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            {category}
          </li>
        </ol>
      </nav>
    </main>
  );
}

export default ViewCard;
