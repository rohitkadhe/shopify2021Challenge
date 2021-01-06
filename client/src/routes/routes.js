import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { homeRoute, loginRoute, registerRoute, userImagesRoute } from '../constants/strings';
import AuthForm from '../components/auth/AuthForm';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import AuthService from '../services/AuthService';

export default function Routes() {
  return (
    <Switch>
      <Route
        exact
        path={homeRoute}
        component={(props) => (
          <ImageGallery
            {...props}
            isAuthenticated={AuthService.isAuthenticated()}
            fetchType={'publicImages'}
          />
        )}
      />
      <Route
        exact
        path={userImagesRoute(':user_id')}
        component={(props) => (
          <ImageGallery
            {...props}
            isAuthenticated={AuthService.isAuthenticated()}
            fetchType={'userImages'}
          />
        )}
      />
      <Route exact path={loginRoute} component={(props) => <AuthForm {...props} type="Login" />} />
      <Route
        exact
        path={registerRoute}
        component={(props) => <AuthForm {...props} type="Register" />}
      />
    </Switch>
  );
}
