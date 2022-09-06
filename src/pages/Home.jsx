import { MovieList } from "components/MovieList"
import { useGetTrendingQuery } from "api/themoviedb"

//    '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
export const Home = () => {
    const { data, error, isLoading } = useGetTrendingQuery();
    if (isLoading || error){return}
    return (
        <main>
            {data && <MovieList movies={data.results} title="Trending today" route="movies/" />}
        </main>);
}