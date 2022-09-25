import { MovieList } from "components/MovieList/MovieList";
import { useState } from "react";
import { SearchForm } from "../../components/SearchForm/SearchForm";

const Movies = () => {
    const [searchMovies, setSearchMovies] = useState([]);

    return (
        <>
            <SearchForm setSearchMovies={setSearchMovies} />
            {searchMovies && <MovieList movies={searchMovies} />}
        </>
    );
};

export default Movies;