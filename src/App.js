import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import ViewCard from './components/ViewCard/ViewCard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import api from './utils/api';

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getBooks()
      .then((newCards) => {
        console.log(newCards.items);
        setCards(newCards.items);
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main cards={cards} />} />
        <Route
          path='/:cardId'
          element={<ViewCard card={{ value: 1, id: 1 }} />}
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
