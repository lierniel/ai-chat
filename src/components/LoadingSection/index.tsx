import { CircularProgress } from '@mui/material';
import React from 'react';

import './LoadingSection.css';

export const LoadingPage: React.FC = () => {
    return (
        <section className="loading-section">
            <CircularProgress size={48} />
        </section>
    );
};
