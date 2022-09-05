import { Box } from 'components/Box';
import { BsFileImage } from "react-icons/bs";

export const MovieInfo = ({ title, score, overview, genres }) =>
    <Box display="grid" gridTemplateColumns="100px 1fr">
      <BsFileImage size={100} />
      <Box>
          <h2>{title}</h2>
          <p>User score:{score}</p>
          <p>Overview:</p>
          <span>{overview}</span>
          <p>Genres:</p>
        {genres.join(", ")}
                </Box>
      </Box>