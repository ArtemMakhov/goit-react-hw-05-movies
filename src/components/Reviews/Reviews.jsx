import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchMovieReviews } from '../../Api';

export const Reviews = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(res => setReview(res))
    }, [movieId]);

    return (
        <div>
            {!review.length > 0 ? (
                <h3>No reviews</h3>
            ) : (
                <ul>
                    {review.map(({ author, content, id }) => (
                        <li key={id}>
                            <h3>{author}</h3>
                            <p>{content}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}