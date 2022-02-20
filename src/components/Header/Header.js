import React, { useState } from 'react';
import './Header.css';
import { fetchBooks, changeQueries } from '../../redux/actions';
import { connect, useDispatch } from 'react-redux';

function Header({ cards, queries }) {
  const [search, setSearch] = useState('');
  const [filterCategories, setFilterCategories] = useState('all');
  const [filterOrders, setFilterOrders] = useState('relevance');
  const dispatch = useDispatch();

  function handleInputSearch(e) {
    setSearch(e.target.value);
    changeQueries({ query: e.target.value, ...queries });
  }

  function handleFilterCategories(e) {
    setFilterCategories(e.target.value);
  }

  function handleFilterOrders(e) {
    setFilterOrders(e.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();

    dispatch(
      fetchBooks({
        query: search,
        filter: filterCategories,
        orderBy: filterOrders,
        startIndex: cards.length,
        isNewBook: true,
      })
    );
  }

  return (
    <header className='header'>
      <h1 className='header__title'>Search for books</h1>
      <form onSubmit={handleSearch}>
        <div className='form__search'>
          <input
            value={search}
            onChange={handleInputSearch}
            type='search'
            name='search'
            className='input-search'
          />
          <button type='submit' className='input-search-btn'></button>
        </div>
        <div className='form__filter'>
          <label>
            Categories
            <select
              name='filterCategories'
              onChange={handleFilterCategories}
              value={filterCategories}
              className='form__select'
            >
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
            <select
              name='filterOrders'
              onChange={handleFilterOrders}
              value={filterOrders}
              className='form__select'
            >
              <option value='relevance'>relevance</option>
              <option value='newest'>newest</option>
            </select>
          </label>
        </div>
      </form>
    </header>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cards: state.books.books,
    queries: state.books.queries,
  };
};

export default connect(mapStateToProps, null)(Header);
