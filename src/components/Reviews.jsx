import { useParams } from "react-router-dom";
import { useGetMovieRewiewsQuery } from "api/themoviedb"
import { Box } from 'components/Box';

// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.
export const Reviews = () => {
  const { movieId } = useParams();
  const { data, error, isLoading } = useGetMovieRewiewsQuery(movieId);
  //console.log(data.results);
  if (isLoading || error){return}
  return (data.results.length ?
     <Box as="ul">
      {data.results.map(({ id, author, content }) => {
        return (
          <Box key={id} as="li" p={2}>
            <p>Author: {author}</p>
            {content}
          </Box>
        );
      }, "")}
    </Box>:
    <p>We don't have any reviews for this movie</p>)
}