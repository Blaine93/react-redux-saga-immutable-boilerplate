import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Home';
import {
  ROUTE_HOME
} from '../../constants/routes';

export default function Routes({ location }) {
  return (
    <Switch location={location}>
      <Route
        exact
        path={ROUTE_HOME}
        component={HomePage}
      />
    </Switch>
  );
}
