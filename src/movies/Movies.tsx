//import data from '../MovieData.json';
import { Movies } from '../types/MovieList';
import { useState } from 'react';
import styles from '../main/HomePage.module.css';
import { useEffect } from 'react';

// const MovieData = data.MovieData;

function MovieList() {
  const [movieData, setMovieData] = useState<Movies[]>([]);

  const fetchMovie = async () => {
    const rsp = await fetch('https://localhost:4000/Movies');
    const temp = await rsp.json();
    setMovieData(temp);
  };

  useEffect(() => {
    fetchMovie();
  }, []);

  const editedMovies = movieData.filter((movie) => movie.Edited === 'yes');
  const sortedMovies = editedMovies.sort((a, b) =>
    a.Title.localeCompare(b.Title),
  );

  return (
    <>
      <div>
        <h3 className={styles.h3}>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title:</th>
              <th>Year:</th>
              <th>Director:</th>
              <th>Rating:</th>
              <th>Category:</th>
              <th>Edited:</th>
            </tr>
          </thead>
          <tbody>
            {sortedMovies.map((movie) => (
              <tr key={movie.MovieId}>
                <td>{movie.Title}</td>
                <td>{movie.Year}</td>
                <td>{movie.Director}</td>
                <td>{movie.Rating}</td>
                <td>{movie.Category}</td>
                <td>{movie.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default MovieList;
