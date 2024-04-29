import styled from "styled-components";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children, useContext, requireAuthentication = true, navigateFallback = "/login"}) {
  const navigate = useNavigate();

  const { isLoading, isAuthorized } = useContext();

  useEffect(
    function () {
      if ((!isAuthorized && !isLoading && requireAuthentication) || (isAuthorized && !isLoading && !requireAuthentication)) navigate(navigateFallback);
    },
    [isAuthorized, isLoading, navigate, navigateFallback, requireAuthentication]
  );

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  if (isAuthorized) return children;
}

export default ProtectedRoute;
