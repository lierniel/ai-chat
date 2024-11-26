import React from 'react';
import cn from 'classnames';
import { Avatar, Typography } from '@mui/material';

import './EmptyMessagesList.css';

interface Props {
    className?: string;

    botTitle: string;
    botAvatarSrc: string;
}

export const EmptyMessagesList: React.FC<Props> = ({
    className,
    botTitle,
    botAvatarSrc,
}) => {
    return (
        <section className={cn('empty-messages-list', className)}>
            <Typography variant="h6" align="center">
                Your personal {botTitle} is waiting for your first message to
                start helping you!
            </Typography>
            <Avatar
                className="empty-messages-list-avatar"
                variant="rounded"
                src={botAvatarSrc}
                alt={botTitle}
            />
        </section>
    );
};
