import { useSelector } from 'react-redux';
import { baseImgURL } from '../constant';
import Loading from './Loading';

const Hero = () => {
  const state = useSelector((store) => store.movie);

  // 1) Generate a random number between 0 and 20
  const i = Math.round(Math.random() * state.popularMovies.length);

  // 2) Access the movie at the randomly generated index
  const randomMovie = state.popularMovies[i];

  return (
    <div className="hero row p-4">
      {/* Display loading if the movie data is still being fetched */}
      {!randomMovie ? (
        <Loading />
      ) : (
        <>
          <div className="col-md-6 d-flex flex-column gap-3 align-items-center justify-content-center">
            <h1>{randomMovie.title}</h1>
            <p className="text-start">{randomMovie.overview}</p>
            <p>
              <span>IMDB:</span>
              <span className="text-warning px-2">
                {randomMovie.vote_average}
              </span>
            </p>

            <div className="d-flex gap-3">
              <button className="btn btn-danger">Watch Movie</button>
              <button className="btn btn-info">Add to List</button>
            </div>
          </div>

          <div className="col-md-6">
            <img
              className="img-fluid rounded shadow my-4"
              src={baseImgURL + randomMovie.backdrop_path}
              alt={randomMovie.title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
