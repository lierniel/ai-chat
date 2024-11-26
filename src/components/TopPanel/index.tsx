import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { AppBar, IconButton } from '@mui/material';
import { Profile } from '@components/Profile';

import './TopPanel.css';

interface Props {
    canGoBackTo?: string;
}

export const TopPanel: React.FC<Props> = ({ canGoBackTo }) => {
    return (
        <AppBar className="app-top-panel" position="static">
            {canGoBackTo && (
                <Link to={canGoBackTo}>
                    <IconButton className="top-panel--back-btn">
                        <ArrowBack />
                    </IconButton>
                </Link>
            )}
            <Profile className="top-panel--profile" />
        </AppBar>
    );
};
