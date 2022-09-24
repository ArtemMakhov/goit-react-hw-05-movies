
import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../../Api";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
   
    
    useEffect(() => {
        fetchMovieById(movieId).then(data => {
            setMovie(data);
        });
    }, [movieId]);

      const {
    original_title: title,
    release_date: date,
    poster_path: poster,
    vote_average: vote,
    overview,
    genres,
  } = movie;

    return (
        <main>
            {movie ? (<div><img
                src={'https://image.tmdb.org/t/p/w500' + poster}
                alt={title}
                width="300"
                height="200"
            />
            <p>{title} ({date.slice(0,4)})</p>
            <p>User score: {Math.round(vote * 100 / 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul>
                {genres.map(({ name, id }) => (
                    <li key={id}>{ name}</li>
                ))}
            </ul></div>): (<p>console.error(error);</p>)}

            <div>
                <b>Information</b>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
      </main>
  )  

}




