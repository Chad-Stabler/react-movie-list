import Movie from './Movie';

export default function MovieForm({ movieFormTitle, movieFormColor, movieFormDirector, movieFormYearReleased, setMovieFormTitle, setMovieFormColor, setMovieFormDirector, setMovieFormYearReleased, handleSubmit }) {
  return (<div className="form-display">
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
        title:  
          <input required value={movieFormTitle} onChange={e => setMovieFormTitle(e.target.value)} />
        </label>
        <label>
        Color:  
          <select value={movieFormColor} onChange={e => setMovieFormColor(e.target.value)} >
            <option value={'lightgreen'}>Green</option>
            <option value={'red'}>Red</option>
            <option value={'orange'}>Orange</option>
            <option value={'brown'}>Brown</option>
            <option value={'cyan'}>Cyan</option>
          </select>
        </label>
        <label>
        Director:  
          <input required value={movieFormDirector} onChange={e => setMovieFormDirector(e.target.value)} />
        </label>
        <label>
        Year Released:  
          <input required value={movieFormYearReleased} onChange={e => setMovieFormYearReleased(e.target.value)} />
        </label>
        <button>Add to your watchlist</button>
      </form>
      <Movie movieFormColor={movieFormColor} movieFormDirector={movieFormDirector} movieFormTitle={movieFormTitle} movieFormYearReleased={movieFormYearReleased} />
    </div>
  </div>);
}