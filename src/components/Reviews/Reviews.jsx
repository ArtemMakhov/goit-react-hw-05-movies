import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from '../../Api';
import { ListReviews,Author,Content,Article } from "./Rewiews.styled";

const Reviews = () => {
    const { movieId } = useParams();
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetchMovieReviews(movieId).then(res => setReview(res))
    }, [movieId]);

    return (
        <div>
            {!review.length > 0 ? (
                <h3>We don't have any reviews for this movie</h3>
            ) : (
                <ListReviews>
                    {review.map(({ author, content, id }) => (
                        <Article key={id}>
                            <Author>{author}</Author>
                            <Content>{content}</Content>
                        </Article>
                    ))}
                </ListReviews>
            )}
        </div>
    );
};

export default Reviews;