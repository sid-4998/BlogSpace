import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  // Safely access the currentUser from the Redux state
  const currentUser = useSelector((state) => state.user?.currentUser);

  // If currentUser exists, render the Outlet, otherwise navigate to the sign-in page
  return currentUser ? <Outlet /> : <Navigate to='/signin' />;
}
