import { options } from '../../constant';
import axios from 'axios';
import { ActionTypes } from './../actionTypes';

// Define the base URL for all requests
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// Fetch popular movies and update the store
export const getPopular = () => (dispatch) => {
  // Notify the reducer that loading has started
  dispatch({
    type: ActionTypes.SET_MOVIES_LOADING,
  });

  axios
    .get('/movie/popular?language=en-CA', options) // Change language setting to Canadian English
    // If successful, send data to the reducer
    .then((res) =>
      dispatch({
        type: ActionTypes.SET_MOVIES,
        payload: res.data.results,
      })
    )
    // If an error occurs, send the error to the reducer
    .catch((err) => {
      dispatch({
        type: ActionTypes.SET_MOVIES_ERROR,
        payload: err.message,
      });
    });
};

// Fetch movie genres and update the store
export const getGenres = () => (dispatch) => {
  dispatch({ type: ActionTypes.SET_GENRES_LOADING });

  axios
    .get('/genre/movie/list?language=en-CA', options) // Set to Canadian English for genres as well
    .then((res) => {
      dispatch({
        type: ActionTypes.SET_GENRES,
        payload: res.data.genres,
      });
    })
    .catch((err) =>
      dispatch({
        type: ActionTypes.SET_GENRES_ERROR,
        payload: err.message,
      })
    );
};
