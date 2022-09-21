import axios from "axios";

const API_KEY = 'bb8332b99fe7bc8079c8a7da417e56ea';
const BASE_URL = '';
const TREND_URL = '';
const ID_URL = '';
const SEARCH_BY_QUERY_URL = '';



// export const fetchMovieById = async movieId => {
//   try {
//     const response = await axios.get(
//       `${ID_URL}${movieId}?api_key=${API_KEY}&language=en-US`
//     );
//     return response.data;
//   } catch (error) {
//     return (console.log(error));
//   }
// };


// export async function getMovies(url) {
//     try {
//         const responce = await axios.get(`${url}`);
//         return responce.data;
//     } catch (error) {
//         console.log(error);
//     }
// }