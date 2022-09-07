import { toast } from 'react-hot-toast';
import { useParams } from "react-router-dom";
import { useGetMovieCreditsQuery } from "api/themoviedb"
import { CastList } from "components/CastList"

// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
export const Cast = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieCreditsQuery(movieId);
  
  if (isLoading) { return }
  if (error) { toast.error("GetMovieCreditsError"); return}
  return  (<main>
    <CastList casts={data.cast} />
  </main>)
}  
