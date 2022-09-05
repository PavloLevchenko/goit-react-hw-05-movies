import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { MovieDetailsNav } from "components/MovieDetailsNav";

export const MovieDetails = () =>
<Box>
  <p>Additional information</p>
  <MovieDetailsNav />
  <Outlet />
</Box>