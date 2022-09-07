import { toast } from 'react-hot-toast';
import { MovieList } from "components/MovieList"
import { useGetTrendingQuery } from "api/themoviedb"

//    '/' - компонент Home, домашняя страница со списком популярных кинофильмов.
const Home = () => {
    const { data, error, isLoading } = useGetTrendingQuery();
    if (isLoading) { return }
    if (error) { toast.error("GetTrendingError"); return}
    return (
        <main>
            {data && <MovieList movies={data.results} title="Trending today" route="movies/" />}
        </main>);
}
export default Home;