import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenres, getPopular } from '../redux/actions/movieActions';
import Hero from '../components/Hero';
import MovieList from '../components/MovieList';

const MainPage = () => {
  const state = useSelector((store) => store.genre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular());
    dispatch(getGenres());
  }, []);

  return (
    <div>
      <Hero />

      {/* 
        1) Display a loader if the loading process is ongoing
        2) If loading is complete but there's an error, show the error
        3) If loading is complete and there's no error, display the list components
      */}

      {state.isLoading ? (
        <div className="spinner-border text-primary" role="status"></div>
      ) : state.isError ? (
        <p>Sorry, an error occurred: {state.isError}</p>
      ) : (
        state.genres.map((genre) => (
          <MovieList key={genre.id} genre={genre} />
        ))
      )}
    </div>
  );
};

export default MainPage;
