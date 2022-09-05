import { MovieInfo } from 'components/MovieInfo';
import { MovieDetails } from "components/MovieDetails" 

export const MovieCard = () =>
  <>
    <MovieInfo title="The King" score="74" overview="England..." genres={["Drama","History"]} />
    <MovieDetails/>
  </>