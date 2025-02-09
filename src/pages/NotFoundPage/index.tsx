import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { BasePageLayout } from '@components/BasePageLayout';

import notFoundImage from './assets/404.png';

import './NotFoundPage.css';

export const NotFoundPage: React.FC = () => {
    return (
        <BasePageLayout contentClassName="not-found-page-content">
            <Link to="/" className="not-found-page-image">
                <img src={notFoundImage} alt="404 not-found" />
            </Link>

            <Link to="/">
                <Button variant="contained" size="large">
                    Go back to home page
                </Button>
            </Link>
        </BasePageLayout>
    );
};
