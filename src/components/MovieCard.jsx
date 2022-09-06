import { useParams } from "react-router-dom";
import { MovieInfo } from 'components/MovieInfo';
import { MovieDetails } from "components/MovieDetails"
import { useGetMovieDetailsQuery } from "api/themoviedb"
import { genresHelper } from "api/genresHelper"

export const MovieCard = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieDetailsQuery(movieId);

  if (isLoading || error){return}
  const { title, overview, vote_average, poster_path, genres } = data;
  const score = Math.round(vote_average * 10);
  const genresString = genresHelper(genres);
  const info = { title, overview, score, poster_path, genresString };

  return (
    <>
    <MovieInfo {...info} />
    <MovieDetails />
    </>
  );}