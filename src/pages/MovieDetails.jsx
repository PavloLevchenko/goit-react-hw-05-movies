import { BsReplyFill } from "react-icons/bs";
import { Box } from 'components/Box';
import { MovieCard } from "components/MovieCard"
import { Link, useLocation } from "react-router-dom";


// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
export const MovieDetails = () => {
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/";
    //console.log(location);
    return <main>
        <Box as="button" type="button" display="flex" alignItems="center" m={2}>
            <Link to={backLinkHref}><BsReplyFill />Go Back</Link>
        </Box>
        <MovieCard />
    </main>
}