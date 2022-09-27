import PropTypes from 'prop-types';
import { Link, useLocation } from "react-router-dom";
// import { Box } from "components/Box";

export const MovieList = ({ movies }) => {
    const location = useLocation();
    
    return (
        
        <div>
            {movies.map(({id,title}) => {
                return (
                    <div key={id}>
                        <Link to={`/movies/${id}`} state={{from:location}}>
                            <h3>{title}</h3>
                        </Link>
                    </div>
                );

            })};
        </div>
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