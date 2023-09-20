import React from 'react';
import { Redirect } from 'react-router-dom';


const PrivateRoute = ({ isAuthenticated, component, path, ...rest }) => {
  const returnedComponent = (props) => (
    isAuthenticated ? React.createComponent(component, props) : <Redirect to={ { pathname: "/" } } />
  );

  return { ...rest, path: path, element: returnedComponent};
};

export default PrivateRoute;