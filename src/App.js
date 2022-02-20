import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import ViewCard from './components/ViewCard/ViewCard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/:cardId' element={<ViewCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
