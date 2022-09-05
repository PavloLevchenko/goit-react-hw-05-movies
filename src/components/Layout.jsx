import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from 'components/Box';
import { NavBar } from 'components/NavBar';

export const Layout = () => {
  return (
    <Box>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};