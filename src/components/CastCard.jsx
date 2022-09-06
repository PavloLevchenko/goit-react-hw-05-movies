import { Box } from 'components/Box';
import { CastImage } from 'components/CastImage';

export const CastCard = ({ options: { name, character, profile_path } }) => {
  return (
    <Box>
   <CastImage profile_path={profile_path} />
      <Box>
        <p>{name}</p>
        <p>Character: {character}</p>
      </Box>
    </Box>
  );}