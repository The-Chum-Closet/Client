import { Suspense } from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';

//pages
import FourOhFourRoutes from 'src/features/misc/404/routes/index.jsx'

// import Home from 'src/pages/Home.jsx';
// import Product from 'src/pages/Home.jsx';
// import Login from 'src/pages/Login.jsx';
// import Settings from 'src/pages/Settings.jsx';
// import Cart from 'src/pages/Cart.jsx';

import protectedRoutes from './protected.jsx';
import publicRoutes from './public.jsx';

const App = () => {

  return (
    <div>
      <Suspense
        fallback={
          <div>
            <h1 className="text-3xl">
              Loading...
            </h1>
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      ...protectedRoutes,
      ...publicRoutes,
    ],
  },
  {
    path:'*',
    element: <App />,
    children: [
      ...FourOhFourRoutes,
    ],
  },
]);

export default router;