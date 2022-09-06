import { BsPerson } from "react-icons/bs";
import { Box } from 'components/Box';

const baseImgUrl = 'https://image.tmdb.org/t/p/w185/';

export const CastImage = ({ profile_path }) => {
  const imgPath = baseImgUrl + profile_path;
  return <Box>
    {profile_path ? <img src={imgPath} alt={profile_path} /> : <BsPerson size={185} />}
  </Box>
}