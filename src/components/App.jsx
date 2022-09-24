import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { Box } from "./Box";

import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
import { Header,Link } from "./App.styled";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

export const App = () => {
  return (
    <Box
      m="0 auto"
      p="0 16px">
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
</Header>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<div>Not Found</div>}/>
      </Routes>
      <GlobalStyle/>
    </Box>
  )
};
