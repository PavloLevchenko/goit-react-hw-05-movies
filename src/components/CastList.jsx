import { Box } from 'components/Box';
import { BsPerson } from "react-icons/bs";
import { ImageBox } from 'components/ImageBox';

const width = 185;

export const CastList = ({ casts }) => {
  const gridTmpl = `repeat(auto-fit, minmax(${width}px, 1fr))`;
  return (
    <Box as="ul" display="grid" gridTemplateColumns={gridTmpl} >
      {casts.map(({ cast_id, name, character, profile_path }) => {
        return (
          <Box key={cast_id} as="li" p={2} display="grid" alignContent="space-between">
            <ImageBox poster_path={profile_path} width={width} ><BsPerson size={width} /></ImageBox>
            <Box>
              <p>{name}</p>
              <p>Character: {character}</p>
            </Box>
          </Box>
        );
      }, "")}
      </Box>
  );
};