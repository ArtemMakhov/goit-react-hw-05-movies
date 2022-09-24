import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from '../../Api';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(response => setCast(response));
  }, [movieId]);
    
  return (
    <>
    {cast.map(({ profile_path, name, character, id }) => (
      <div key={id}>
        <img src={profile_path
          ? 'https://image.tmdb.org/t/p/w500' + profile_path
          : 'https://dummyimage.com/200x300/000/fff&text=No+photo'}
          alt={name}
          width="200"
          height="100"
        />
        <p>{name}</p>
        <p>{character}</p>
      </div>
    ))}
  </>);
    
};

