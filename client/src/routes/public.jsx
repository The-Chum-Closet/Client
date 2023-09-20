import Home from 'src/pages/Home.jsx';
import Login from 'src/pages/Login.jsx';
import Product from 'src/pages/Product.jsx';


const publicRoutes = [
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/products',
    element: <Product />,
  },
];

export default publicRoutes;