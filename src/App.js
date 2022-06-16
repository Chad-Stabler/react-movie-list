import { useEffect, useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(allMovies);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('lightgreen');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [filter, setFilter] = useState('');

  function handleMovieFilter(filter) {
    setFilter(filter);

    const updatedMovies = allMovies.filter(movie => movie.movieFormTitle.toLowerCase().includes(filter.toLowerCase()));

    setVisibleMovies(updatedMovies);
    setMovieFormColor('lightgreen');
    setMovieFormDirector('');
    setMovieFormTitle('');
    setMovieFormYearReleased('');
  }

  useEffect(() => {
    setVisibleMovies(allMovies);
    setFilter('');
  }, [allMovies]);

  function handleDelete(movieFormTitle) {
    const index = allMovies.findIndex(movie => movie.movieFormTitle === movieFormTitle);
    allMovies.splice(index, 1);

    setAllMovies([...allMovies]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = { movieFormTitle: movieFormTitle, movieFormColor: movieFormColor, movieFormDirector: movieFormDirector, movieFormYearReleased: movieFormYearReleased };

    const updatedMovies = [...allMovies, newMovie];

    setAllMovies(updatedMovies);
  }
  return (
    <div className="App">
      <header className="App-header">
        Welcome to your movie list
      </header>
      <MovieForm 
        movieFormYearReleased={movieFormYearReleased} 
        movieFormColor={movieFormColor} 
        movieFormTitle={movieFormTitle} 
        movieFormDirector={movieFormDirector}
        setMovieFormYearReleased={setMovieFormYearReleased}
        setMovieFormColor={setMovieFormColor}
        setMovieFormTitle={setMovieFormTitle}
        setMovieFormDirector={setMovieFormDirector}
        handleSubmit={handleSubmit} />
      <div className='filter'>
        Search your movies:
        <input value={filter} onChange={e => handleMovieFilter(e.target.value)} />
      </div> 
      <div className='movie-list'>
        <MovieList movies={visibleMovies} handleDelete={handleDelete}/>
      </div>
    </div>
  ); 
}

export default App;
