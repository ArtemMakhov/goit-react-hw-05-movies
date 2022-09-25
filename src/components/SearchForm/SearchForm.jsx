import PropTypes from 'prop-types';
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

import { fetchMovieSearch } from "../../Api";
import { Box } from "components/Box";

export const SearchForm = ({ setSearchMovies }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

    const hendleSabmitSearchMovies = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const query = form.elements.search.value;

        setSearchParams({ query });

        form.reset();
    };

    useEffect(() => {
        if (!query) return;

        async function fetchAwaiter() {
            const allDataMovies = await fetchMovieSearch(query);

            const requiredDataMovies = allDataMovies.map(
                ({ id, title, poster_path: poster, vote_average }) => ({
                    id,
                    title,
                    poster: 'https://image.tmdb.org/t/p/w500' + poster,
                    vote_average,
                })
            );

            setSearchMovies(requiredDataMovies);
        }

        fetchAwaiter();
    }, [query, setSearchMovies]);


    return (
        <Box>
            <form onSubmit={hendleSabmitSearchMovies}>
                <input
                    type="text"
                    name="search"
                    autoComplete="off"
                    placeholder="Search movies"
                />
                <button type="submit">Search</button>
            </form>
            
        </Box>
    );
};

SearchForm.propTypes = {
    setSearchMovies: PropTypes.func.isRequired,
};