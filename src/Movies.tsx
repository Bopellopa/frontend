import data from './MovieData.json';
// import { useState } from 'react';

const MovieData = data.MovieData;
function MovieList() {
  //   const [lostOMovies, setListOMovies] = useState(MovieData);
  //   const addMovie = () => {
  //     setListOMovies(
  //         [...MovieData,
  //         {

  //         }]
  //     )
  //   };

  return (
    <>
      <div>
        <h3>Joel Hilton's Movie Collection</h3>
      </div>
      <div>
        <table className="table">
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
            {MovieData.map((m) => (
              <tr>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
                <td>{m.Edited}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <button className="btn btn-primary">Add Movie</button> */}
    </>
  );
}

export default MovieList;
