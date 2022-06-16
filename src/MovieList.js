import Movie from './Movie';

export default function MovieList({ movies, handleDelete }) {
  return (<div className='movies'>
    {
      movies.map((movie, i) => <Movie key={movie.movieFormTitle + i} movieFormColor={movie.movieFormColor} movieFormDirector={movie.movieFormDirector} movieFormTitle={movie.movieFormTitle} movieFormYearReleased={movie.movieFormYearReleased} handleDelete={handleDelete} />)
    }
  </div>);
}