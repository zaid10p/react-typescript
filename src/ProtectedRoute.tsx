import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

interface ProtectedProps {
  Component: React.FC<RouteComponentProps>;
  path: string;
}

const ProtectedRoute = ({ Component, ...rest }: ProtectedProps) => (
  <Route
    {...rest}
    render={(props) => {
      const login = sessionStorage.getItem('login');
      console.log(login);
      return login === 'true' ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

export default ProtectedRoute;
