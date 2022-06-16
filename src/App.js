import { useState } from 'react';
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

  function handleDelete(movieFormTitle) {
    const index = allMovies.findIndex(title => title === movieFormTitle);
    allMovies.splice(index, 1);

    setAllMovies([...allMovies]);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newMovie = { movieFormTitle: movieFormTitle, movieFormColor: movieFormColor, movieFormDirector: movieFormDirector, movieFormYearReleased: movieFormYearReleased };

    allMovies.push(newMovie);
    setAllMovies(allMovies.slice());
    console.log(allMovies);
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
      <div className='movie-list'>
        <MovieList movies={allMovies} handleDelete={handleDelete}/>
      </div>
    </div>
  ); 
}

export default App;
