import React, { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router';
import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
  path: string;
  exact: boolean;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component: Component,
  path,
  exact,
}) => {
  const { login } = useSelector((state: AppState) => state.appCurrent);

  useEffect(() => {
    console.log(
      `loading protected route '${path}' with component ${Component?.name}`
    );
  }, [Component, path]);

  return (
    <Route
      path={path}
      exact={exact}
      render={() => (login ? <Component /> : <Redirect to="/" />)}
    />
  );
};
