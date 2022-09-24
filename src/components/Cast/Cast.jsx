import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchMovieCast } from '../../Api';

export const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);

      useEffect(() => {
    fetchMovieCast(movieId).then(response => setCast(response));
      }, [movieId]);
    
    return (<>
        {cast.map(({ profile_path: poster, name, character, cast_id }) => (
            <div key={cast_id}>
                <img src={poster} alt={name} />
                <p>{name}</p>
                <p>{character }</p>
        </div>
    ))}
    </>)
    
//     return (
//     <StyledCast>
//       {!actors.length > 0 ? (
//         <h3>There are no cast info!</h3>
//       ) : (
//         actors.map(({ profile_path: poster, name, character, cast_id }) => (
//           <li key={cast_id}>
//             <img
//               src={`${poster ? BASE_IMG_URL + poster : dummyImg}`}
//               alt={name}
//               width="100"
//               height="200"
//             />
//             <p>
//               <b>{name}</b>
//             </p>
//             <p>Character: {character}</p>
//           </li>
//         ))
//       )}
//     </StyledCast>
//   );
}

