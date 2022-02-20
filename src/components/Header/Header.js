import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { fetchBooks, changeQueries } from '../../redux/actions';
import { connect, useDispatch } from 'react-redux';

function Header({ queries }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleInputSearch(e) {
    dispatch(changeQueries({ ...queries, query: e.target.value }));
  }

  function handleFilterCategories(e) {
    dispatch(changeQueries({ ...queries, filter: e.target.value }));
  }

  function handleFilterOrders(e) {
    dispatch(changeQueries({ ...queries, orderBy: e.target.value }));
  }

  function handleSearch(event) {
    event.preventDefault();
    navigate('/');
    dispatch(fetchBooks({ ...queries, startIndex: 0, isNewBook: true }));
  }

  return (
    <header className='header'>
      <h1 className='header__title'>Search for books</h1>
      <form onSubmit={handleSearch}>
        <div className='form__search'>
          <input
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
              defaultValue={'all'}
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
              defaultValue={'relevance'}
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
    queries: state.books.queries,
  };
};

export default connect(mapStateToProps, null)(Header);
