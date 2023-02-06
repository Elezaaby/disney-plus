import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import MoviesDetails from './components/MoviesDetails';
import MoviesList from './components/MoviesList';
import SeriesList from './components/SeriesList';
import OriginalList from './components/OriginalList';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/disney-plus/login' element={<Login />} />
        <Route path='/disney-plus/details' element={<MoviesDetails />} />
        <Route path='/disney-plus/movies' element={<MoviesList />} />
        <Route path='/disney-plus/series' element={<SeriesList />} />
        <Route path='/disney-plus/original' element={<OriginalList />} />
        <Route path='/disney-plus' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
