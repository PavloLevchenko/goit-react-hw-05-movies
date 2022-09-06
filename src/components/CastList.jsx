import { Box } from 'components/Box';
import { CastCard } from 'components/CastCard';

export const CastList = ({ casts }) => {
  return (
    <Box as="ul">
      {casts.map(({ cast_id, name, character, profile_path }) => {
        return (
          <Box key={cast_id} as="li" p={2}>
            <CastCard options={{name, character, profile_path}} />
          </Box>
        );
      }, "")}
      </Box>
  );
};