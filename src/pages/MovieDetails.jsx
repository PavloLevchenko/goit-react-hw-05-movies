import { BsReplyFill } from "react-icons/bs";
import { Box } from 'components/Box';
import { MovieCard } from "components/MovieCard"
import { Link,useLocation } from "react-router-dom";


// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
const MovieDetails = () => {
    const {state} = useLocation();
    const path = state ? state.pathname + state.search : "/";
    
    return <main>
        <Box as="button" type="button" display="flex" alignItems="center" m={2}>
            <Link to={path}><BsReplyFill />Go Back</Link>
        </Box>
        <MovieCard />
    </main>
}
export default MovieDetails;