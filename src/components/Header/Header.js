import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>Search for books</h1>
      <form>
        <div className='form__search'>
          <input type='search' name='search' className='input-search' />
          <button className='input-search-btn'></button>
        </div>
        <div className='form__filter'>
          <label>
            Categories
            <select defaultValue={'all'} className='form__select'>
              <option value='all'>all</option>
              <option value='art'>art</option>
              <option value='biography'>biography</option>
              <option value='computers'>computers</option>
              <option value='history'>history</option>
              <option value='medical'>medical</option>
              <option value='poetry'>poetry</option>
            </select>
          </label>
          <label>
            Sorting by
            <select defaultValue={'relevance'} className='form__select'>
              <option value='relevance'>relevance</option>
              <option value='newest'>newest</option>
            </select>
          </label>
        </div>
      </form>
    </header>
  );
}

export default Header;
