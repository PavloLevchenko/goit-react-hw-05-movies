import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { useSearchMoviesQuery } from "api/themoviedb"
import { MovieList } from "components/MovieList"

// '/movies' - компонент Movies, страница поиска фильмов по ключевому слову.
const Movies = () => {
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const filmName = searchParams.get("query");

  const { data, error, isLoading } = useSearchMoviesQuery(filmName,{skip:!filmName,});
  const onSubmit = data => setSearchParams({ query:data.filmName })
  if (isLoading) { return }
  if (error) { toast.error("SearchMoviesError"); return}
  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register("filmName")} />
      <button type="submit">Search</button>
      </form>
      {data && <MovieList movies={data.results} />}
    </main>
  );
};
export default Movies;