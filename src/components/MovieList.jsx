import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';

const films=['Film1','Film2','Film3','Film4','Film5']

export const MovieList = ({title="", route=""}) => {
  return (
    <Box as="ul">
      <h1>{title}</h1>
      {films.map(text => {
        return (
          <Box key={text} as="li" p={2}>
            <NavLink to={route+text}>{text}</NavLink>
          </Box>
        );
      }, "")}
      </Box>
  );
};