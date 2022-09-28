import PropTypes from 'prop-types';
import {  useLocation } from "react-router-dom";
import { Box } from "components/Box";
import { List,MovieCard } from './MovieList.styled';

export const MovieList = ({ movies }) => {
    const location = useLocation();
    
    return (
        
        <Box as="ul">
            {movies.map(({id,title}) => {
                return (
                    <List key={id}>
                        <MovieCard to={`/movies/${id}`} state={{ from: location }}>
                            <h3>{title}</h3>
                        </MovieCard>
                    </List>
                );

            })};
        </Box>
    )
}

MovieList.propTypes = {
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
        })
    ).isRequired,
};