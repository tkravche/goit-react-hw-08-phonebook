import { useAuth } from '../UseAuth';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({
  restricted = false,
  redirectTo = '/',
  component: Component,
}) {
  const { isLoggedIn } = useAuth();
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}
