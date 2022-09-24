
import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../../Api";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState('');
   
    useEffect(() => {
        async function movieById() {
            const data = await fetchMovieById(movieId);

            setMovie(data);
        }

        movieById();
    },[movieId])
    
    // useEffect(() => {
    //     fetchMovieById(movieId).then(data => {
    //         console.log(data)
    //         setMovie(data);
    //     });
    // }, [movieId]);

      const {
    original_title: title,
    release_date: date,
    poster_path: poster,
    vote_average: vote,
    overview,
    // genres,
  } = movie;

    return (
        <main>
            {<img
                src={'https://image.tmdb.org/t/p/w500' + poster}
                alt={title}
                width="200"
                height="200"
            />}
            <p>{title} ({date})</p>
            <p>User score: {Math.round(vote * 100 / 10)}%</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>???</p>

            <div>
                <b>Information</b>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
      </main>
  )  

}




