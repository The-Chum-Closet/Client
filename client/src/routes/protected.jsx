import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PrivateRoute } from 'src/components/PrivateRoute.jsx';

//pages
import Settings from 'src/pages/Settings.jsx';
import Cart from 'src/pages/Cart.jsx';

// const App = () => {
//   return (
//     <div>
//       <Suspense
//         fallback={
//           <div>
//             <h1 className="text-3xl">
//               Loading...
//             </h1>
//           </div>
//         }
//       >
//         <Outlet />
//       </Suspense>
//     </div>
//   );
// };

const protectedRoutes = [
  {
    path: '/settings',
    element: <Settings />,
  },
  {
    path: '/cart',
    element: <Cart />
  },
];

export default protectedRoutes;