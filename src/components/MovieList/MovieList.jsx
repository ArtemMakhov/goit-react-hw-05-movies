import { Link } from "react-router-dom";
// import { Box } from "components/Box";

export const MovieList = ({ movies }) => {
    // console.log(movies)
    return (
        
        <div>
            {movies.map((movie) => {
                return (
                    <div key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            <h3>{movie.title}</h3>
                        </Link>
                    </div>
                );

            })};
        </div>
    )
}