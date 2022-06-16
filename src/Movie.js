export default function Movie({ movieFormColor, movieFormTitle, movieFormDirector, movieFormYearReleased, handleDelete }) {
  return ( 
    <div className="poster" style={{ background: movieFormColor }}>
      <div onClick={() => handleDelete(movieFormTitle)}>
        <h2>{movieFormTitle}</h2>
        <h3>by {movieFormDirector}</h3>
        <h4>Released in {movieFormYearReleased}</h4>
      </div>
    </div>
  );
}