import { Box } from 'components/Box';
import { MovieImage } from "components/MovieImage"

export const MovieInfo = ({ title, overview, score, poster_path, genresString }) =>
    <Box display="grid" gridTemplateColumns="342px 1fr">
    <MovieImage poster_path={poster_path} />
      <Box>
          <h2>{title}</h2>
          <p>User score:{score}%</p>
          <p>Overview:</p>
          <span>{overview}</span>
          <p>Genres:</p>
          {genresString}
      </Box>
    </Box>