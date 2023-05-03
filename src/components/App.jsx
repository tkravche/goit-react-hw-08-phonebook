import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../UseAuth';
import { HomePage } from '../pages/HomePage';
import { RegisterPage } from '../pages/RegisterPage';
import { LoginPage } from '../pages/LoginPage';
import { ContactsPage } from '../pages/ContactsPage';
import authOperations from '../redux/auth/auth-operations';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import AppBar from './AppBar';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<PublicRoute component={<HomePage />} />} />

        <Route
          path="/register"
          element={
            <PublicRoute
              restricted
              redirectTo="/todos"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute
              restricted
              redirectTo="/contacts"
              component={<LoginPage />}
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <PrivateRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
      </Routes>
    </>
  );
};
