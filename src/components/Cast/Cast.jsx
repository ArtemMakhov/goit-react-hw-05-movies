import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from 'components/Box';
import { List,Name,Character } from './Cast.styled';

import { fetchMovieCast } from '../../Api';

 const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then(response => setCast(response));
  }, [movieId]);
    
  return (
    <Box as="ul">
    {cast.map(({ profile_path, name, character, id }) => (
      <List key={id}>
        <img src={profile_path
          ? 'https://image.tmdb.org/t/p/w500' + profile_path
          : 'https://dummyimage.com/200x300/000/fff&text=No+photo'}
          alt={name}
          width="200"
          height="100"
        />
        <Name>{name}</Name>
        <Character>{character}</Character>
      </List>
    ))}
  </Box>);
    
};

export default Cast;

