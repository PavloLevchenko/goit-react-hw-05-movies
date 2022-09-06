import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';

export const MovieList = ({ movies, title = "", route = "" }) => {
  return (
    <Box as="ul">
      <h1>{title}</h1>
      {movies.map(({ id, title }) => {
        return (
          <Box key={id} as="li" p={2}>
            <NavLink to={route+id}>{title}</NavLink>
          </Box>
        );
      }, "")}
      </Box>
  );
};