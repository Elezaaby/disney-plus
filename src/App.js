import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import MoviesDetails from './components/MoviesDetails';
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/disney-plus/login' element={<Login />} />
        <Route path='/disney-plus/details' element={<MoviesDetails />} />
        <Route path='/disney-plus/movies' element={<MoviesList />} />
        <Route path='/disney-plus' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
