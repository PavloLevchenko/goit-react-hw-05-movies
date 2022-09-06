import { useParams } from "react-router-dom";
import { useGetMovieCreditsQuery } from "api/themoviedb"
import { CastList } from "components/CastList"

// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
export const Cast = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieCreditsQuery(movieId);
  if (isLoading || error){return}
  return  (<main>
    <CastList casts={data.cast} />
  </main>)
}  
