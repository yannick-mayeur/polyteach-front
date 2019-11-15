import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import S from '../../services';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      S.connexion.isAuthenticated()
        ? <Component {...props} />
        : <Redirect to='/connexion' />
    )} />
  )