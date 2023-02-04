import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import MoviesDetails from './components/MoviesDetails';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/disney-plus/details' element={<MoviesDetails />} />
        <Route path='/disney-plus' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
