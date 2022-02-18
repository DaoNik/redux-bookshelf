import { Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import ViewCard from './components/ViewCard/ViewCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/:cardId' element={<ViewCard />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
