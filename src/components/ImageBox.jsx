import { Box } from 'components/Box';
import {baseImgUrl} from 'components/NavDeclarations'

export const ImageBox = ({ poster_path, width, children }) => {
  const serverPath = baseImgUrl+width;
  const imgPath = serverPath + poster_path;
  return <Box>
    {poster_path ? <img src={imgPath} alt={poster_path} /> : children}
  </Box>
}
