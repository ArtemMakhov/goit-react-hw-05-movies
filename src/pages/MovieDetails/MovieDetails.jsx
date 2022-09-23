
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../../Api";

export const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
   
    
    useEffect(() => {
        fetchMovieById(movieId).then(data => {
            console.log(data)
            setMovie(data);
        });
    }, [movieId]);

    return (
        <main>
            <p>{ movie.adult}</p>
      </main>
  )  

}




