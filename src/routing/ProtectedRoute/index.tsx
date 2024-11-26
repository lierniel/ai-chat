import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { LoadingPage } from '@components/LoadingSection';

interface ProtectedRouteProps {
    children: JSX.Element;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <LoadingPage />;
    }

    if (!isAuthenticated) {
        // Redirect to login page if the user is not authenticated
        return <Navigate to="/auth" replace />;
    }

    // Render the protected route if authenticated
    return children;
};
