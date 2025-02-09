import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import { AppBar, IconButton } from '@mui/material';
import { Profile } from '@components/Profile';

import './TopPanel.css';

export interface TopPanelProps {
    canGoBack?: string | boolean;
}

export const TopPanel: React.FC<TopPanelProps> = ({ canGoBack }) => {
    const navigate = useNavigate();

    const handleGoBackClick = useCallback(() => {
        if (!canGoBack) {
            return;
        }

        if (typeof canGoBack === 'string') {
            navigate(canGoBack);
        } else {
            navigate(-1);
        }
    }, [canGoBack, navigate]);

    return (
        <AppBar className="app-top-panel" position="static">
            {canGoBack && (
                <IconButton
                    className="top-panel--back-btn"
                    onClick={handleGoBackClick}
                >
                    <ArrowBack />
                </IconButton>
            )}
            <Profile className="top-panel--profile" />
        </AppBar>
    );
};
