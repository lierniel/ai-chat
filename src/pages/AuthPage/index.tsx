import React, { useCallback } from 'react';

import './AuthPage.css';
import { Button } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { BasePageLayout } from '@components/BasePageLayout';

export const AuthPage: React.FC = () => {
    const { loginWithRedirect } = useAuth0();

    const handleLogInButtonClick = useCallback(() => {
        loginWithRedirect();
    }, [loginWithRedirect]);

    return (
        <BasePageLayout contentClassName="auth-page-content">
            <h1>Please log in to your account or sign up</h1>
            <Button
                variant="contained"
                size="large"
                onClick={handleLogInButtonClick}
            >
                Authorize
            </Button>
        </BasePageLayout>
    );
};
