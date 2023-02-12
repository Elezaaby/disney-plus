import { Route, Routes } from 'react-router-dom';
import './App.css';

// ---------------------------------------- Components ---------------------------------------- //
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import MoviesDetails from './components/MoviesDetails';
import MoviesList from './components/MoviesList';
import SeriesList from './components/SeriesList';
import OriginalList from './components/OriginalList';
import ViewersMoviesList from './components/ViewersMoviesList';
import StarwarsMovies from './components/StarwarsMovies';
import GenresSearch from './components/GenresSearch';
import CrewMovies from './components/CrewMovies';
// ---------------------------------------- Components ---------------------------------------- //

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/disney-plus' element={<Home />} />
        <Route path='/disney-plus/login' element={<Login />} />

        <Route path='/disney-plus' element={<MoviesDetails />}>
          <Route path=':type/details' element={<MoviesDetails />} >
            <Route path=':id' element={<MoviesDetails />} />
          </Route>
        </Route>

        <Route path='/disney-plus/movies' element={<MoviesList />} />
        <Route path='/disney-plus/series' element={<SeriesList />} />
        <Route path='/disney-plus/original' element={<OriginalList />} />

        <Route path='/disney-plus' element={<ViewersMoviesList />}>
          <Route path=':vi' />
        </Route>
        <Route path='/disney-plus/star-wars' element={<StarwarsMovies />} />

        <Route path='/disney-plus' element={<GenresSearch />}>
          <Route path=':type' element={<GenresSearch />}>
            <Route path=':genre' element={<GenresSearch />} />
          </Route>
        </Route>

        <Route path='/disney-plus/actors/details/' element={<CrewMovies />}>
          <Route path=':actorsId' element={<CrewMovies />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
