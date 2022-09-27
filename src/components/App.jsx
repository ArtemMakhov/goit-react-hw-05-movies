import { Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import { lazy } from "react";
// import { Box } from "./Box";

import { SharedLayout } from "./SharedLayout/SharedLayout";
// import Home from "../pages/Home/Home";
// import Movies from "../pages/Movies/Movies";
// import { MovieDetails } from "../pages/MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";

const Home = lazy(() => import("../pages/Home/Home"));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/MovieDetails/MovieDetails"));

export const App = () => {
  return (
    <>
      <GlobalStyle/>
       <Routes>
        <Route path="/" element={<SharedLayout />} >
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews/>}/>
        </Route>
        <Route path="*" element={<Navigate to="/" replace/>} />
        </Route>
      </Routes>
    </>
      
  );
};
