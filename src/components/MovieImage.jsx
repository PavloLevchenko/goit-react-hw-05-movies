import { BsFileExcel } from "react-icons/bs";
import { Box } from 'components/Box';

const baseImgUrl = 'https://image.tmdb.org/t/p/w342/';

export const MovieImage = ({ poster_path }) => {
  const imgPath = baseImgUrl + poster_path;
  return <Box>
    {poster_path ? <img src={imgPath} alt={poster_path} /> : <BsFileExcel size={342} />}
  </Box>
}
