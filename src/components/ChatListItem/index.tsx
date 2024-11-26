import React, { useCallback } from 'react';

import './ChatListItem.css';
import {
    Avatar,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

interface Props {
    id: string;
    title: string;
    avatarSrc: string;
    onClick?: (id: string) => void;
}

export const ChatListItem: React.FC<Props> = ({
    id,
    title,
    avatarSrc,
    onClick,
}) => {
    const handleClick = useCallback(() => {
        onClick?.(id);
    }, [id, onClick]);

    return (
        <ListItem disablePadding divider>
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <Avatar variant="rounded" alt={title} src={avatarSrc} />
                </ListItemIcon>
                <ListItemText primary={title} />
            </ListItemButton>
        </ListItem>
    );
};
