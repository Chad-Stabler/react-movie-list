import { useState } from 'react';
import './App.css';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [visibleMovies, setVisibleMovies] = useState(allMovies);
  const [movieFormYearReleased, setMovieFormYearReleased] = useState('');
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        Welcome to your movie list
      </header>
      <MovieForm />
    </div>
  );
}

export default App;
