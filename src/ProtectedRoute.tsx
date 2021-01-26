import React from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

interface ProtectedProps {
  Component: React.FC<RouteComponentProps>;
  path: string;
}

const ProtectedRoute = ({ Component, ...rest }: ProtectedProps) => (
  <Route
    {...rest}
    render={(props: RouteComponentProps) => {
      const user = localStorage.getItem('user');
      console.log(user);
      return user ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

export default ProtectedRoute;
