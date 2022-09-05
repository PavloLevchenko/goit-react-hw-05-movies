import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';
import { navMovieItems } from 'components/NavDeclarations';

export const MovieDetailsNav = () => {
  return (
      <Box as="ul">
      {navMovieItems.map(({ href, text }) => (
          <Box key={href} as="li" p={2}>
          <NavLink to={href} >{text}</NavLink>
          </Box>
        ))}
    </Box>
  );
};