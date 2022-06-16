import { useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(allMovies);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');

  function handleSubmit(e) {

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
    </div>
  ); 
}

export default App;
