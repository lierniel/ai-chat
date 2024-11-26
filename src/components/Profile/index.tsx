import React, { useCallback, useRef } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
    Avatar,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from '@mui/material';

import './Profile.css';
import cn from 'classnames';

interface Props {
    className?: string;
}

export const Profile: React.FC<Props> = ({ className }) => {
    const { user, isAuthenticated, isLoading, logout } = useAuth0();

    const userAvatarRef = useRef<HTMLButtonElement>(null);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const openMenu = useCallback(() => {
        if (!isAuthenticated) {
            return;
        }
        setIsMenuOpen(true);
    }, [isAuthenticated]);
    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    const handleLogoutClick = useCallback(() => {
        logout();
    }, [logout]);

    return (
        <div className={cn('profile-info', className)}>
            <Typography>
                {isLoading ? 'Loading...' : (user?.name ?? 'Anonymous')}
            </Typography>
            <Tooltip title={user?.email}>
                <IconButton onClick={openMenu} ref={userAvatarRef}>
                    <Avatar alt={user?.email} src={user?.picture} />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={userAvatarRef.current}
                keepMounted
                open={isMenuOpen}
                onClose={closeMenu}
            >
                <MenuItem onClick={handleLogoutClick}>
                    <Typography>Log out</Typography>
                </MenuItem>
            </Menu>
        </div>
    );
};
