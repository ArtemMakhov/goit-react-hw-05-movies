
import { useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "../../Api";
import { Loader } from "components/Loader/Loader";
import { BackLink,Title,Text,GenresList,List,InfoTitle,InfoLink } from "./MovieDetails.styled";

 const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    
    useEffect(() => {
        fetchMovieById(movieId).then(data => {
            setMovie(data);
        });
    }, [movieId]);

    if (!movie) {
        return null;
    }

    const {
        original_title: title,
        release_date: date,
        poster_path: poster,
        vote_average: vote,
        overview,
        genres,
    } = movie;

    const backLinkHref = location.state?.from ?? "/movies";
    

    return (
        <main>
            <BackLink to={backLinkHref}>Back</BackLink>
           
            {movie ? (<div>
                <img
                src={poster ?
                    'https://image.tmdb.org/t/p/w500' + poster : 
                    'https://i.gifer.com/5h4.gif'}
                alt={title}
                width="300"
                height="200"
            />
                <Title>{title} ({date.slice(0, 4)})</Title>
                <Text>User score: {Math.round(vote * 100 / 10)}%</Text>
                <h3>Overview</h3>
                <Text>{overview}</Text>
                <h3>Genres</h3>
                <GenresList>
                    {genres.map(({ name, id }) => (
                        <List key={id}>{name}</List>
                    ))}
                </GenresList></div>) : (<Loader/>)}

            <div>
                <InfoTitle>Information :</InfoTitle>
                <ul>
                    <li>
                        <InfoLink state={location.state} to="cast">Cast</InfoLink>
                    </li>
                    <li>
                        <InfoLink state={location.state} to="reviews">Reviews</InfoLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </main>
    );

};

export default MovieDetails;




