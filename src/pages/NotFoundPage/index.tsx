import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { TopPanel } from '@components/TopPanel';

import notFoundImage from './assets/404.png';

import './NotFoundPage.css';

export const NotFoundPage: React.FC = () => {
    return (
        <section className="not-found-page">
            <TopPanel />
            <main className="not-found-page-content">
                <Link to="/">
                    <img
                        className="not-found-page-image"
                        src={notFoundImage}
                        alt="404 not-found"
                    />
                </Link>

                <Link to="/">
                    <Button variant="contained" size="large">
                        Go back to home page
                    </Button>
                </Link>
            </main>
        </section>
    );
};
