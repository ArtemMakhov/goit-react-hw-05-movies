import axios from "axios";

const API_KEY = 'bb8332b99fe7bc8079c8a7da417e56ea';
const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`;
const ID_URL = `${BASE_URL}/movie/`;
// const SEARCH_BY_QUERY_URL = `${BASE_URL}/search/movie?api_key=${API_KEY}`;


 
export const fetchTrendingMovie = async () => {
    try {
        const {data} = await axios.get(`${TREND_URL}`);
        return data;
    } catch (error) {
        return console.log(error);
    }
}

export const fetchMovieById = async movieId => {
  try {
    const {data} = await axios.get(
      `${ID_URL}${movieId}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    return (console.log(error));
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `${ID_URL}${movieId}/credits?api_key=${API_KEY}`
    );
    return response.data.cast;
  } catch (error) {
    return (console.log(error));
  }
};

// export const fetchCastInfo = async movieId => {
//   try {
//     const response = await axios.get(
//       `${ID_URL}${movieId}/credits?api_key=${API_KEY}&language=en-US`
//     );
//     return response.data.cast;
//   } catch (error) {
//     return notification(error.message);
//   }
// };