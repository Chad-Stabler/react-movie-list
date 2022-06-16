export default function Movie({ movieFormColor, movieFormTitle, movieFormDirector, movieFormYearReleased }) {
  return ( 
    <div style={{ background: movieFormColor }}>
      <div className="poster">
        <h2>{movieFormTitle}</h2>
        <h3>by {movieFormDirector}</h3>
        <h4>Released in {movieFormYearReleased}</h4>
      </div>
    </div>
  );
}