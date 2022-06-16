export default function MovieForm({ movieFormTitle, movieFormColor, movieFormDirector, movieFormYearReleased, setMovieFormTitle, setMovieFormColor, setMovieFormDirector, setMovieFormYearReleased, handleSubmit }) {
  return (<div className="form-display">
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
        title:
          <input value={movieFormTitle} onChange={e => setMovieFormTitle(e.target.value)} />
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
          <input value={movieFormDirector} onChange={e => setMovieFormDirector(e.target.value)} />
        </label>
        <label>
        Year Year Released
          <input value={movieFormYearReleased} onChange={e => setMovieFormYearReleased(e.target.value)} />
        </label>
        <button>Add to your watchlist</button>
      </form>
    </div>
    <div className="preview-card" style={{ background: movieFormColor }}>
      <div className="poster">
        <h2>{movieFormTitle}</h2>
        <h3>by {movieFormDirector}</h3>
        <h4>Released in {movieFormYearReleased}</h4>
      </div>
    </div>
  </div>);
}