import Movie from './Movie';

export default function MovieList({ movies }) {
  return (<div className='movies'>
    {
      movies.map((movie, i) => <Movie key={movie.movieFormTitle + i} movieFormColor={movie.movieFormColor} movieFormDirector={movie.movieFormDirector} movieFormTitle={movie.movieFormTitle} movieFormYearReleased={movie.movieFormYearReleased} />)
    }
  </div>);
}