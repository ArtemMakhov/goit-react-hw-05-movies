
import { fetchTrendingMovie } from "../../Api";
import { MovieList } from "components/MovieList/MovieList";
import { useEffect,useState } from "react";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrendingMovie().then(data => {
            setMovies(data.results);
        });
    }, []);

    
    return (
        <main>
            <MovieList movies={movies} />
        </main>
    )
};


export default Home;