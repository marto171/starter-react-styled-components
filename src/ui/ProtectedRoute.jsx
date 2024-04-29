import styled from 'styled-components';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useUser } from '../features/authentication/useUser.js';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children, requireAuthentication = true, navigateFallback = '/home' }) {
  const navigate = useNavigate();

  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if ((!isAuthenticated && !isLoading && requireAuthentication) || (isAuthenticated && !isLoading && !requireAuthentication))
        navigate(navigateFallback, { replace: true });
    },
    [isAuthenticated, isLoading, navigate, navigateFallback, requireAuthentication]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if ((isAuthenticated && requireAuthentication) || (!isAuthenticated && !requireAuthentication)) return children;
  else return null;
}

export default ProtectedRoute;
