import React from 'react';
import { Avatar, Typography } from '@mui/material';
import cn from 'classnames';

import './BotMessage.css';

interface Props {
    className?: string;
    title: string;
    avatarSrc: string;
    message: string;
}

export const BotMessage: React.FC<Props> = ({
    className,
    title,
    avatarSrc,
    message,
}) => {
    return (
        <div className={cn('bot-message', className)}>
            <Avatar
                className="bot-message-avatar"
                alt={title}
                src={avatarSrc}
            />
            <div className="bot-message-box">
                <Typography
                    className="bot-message-title"
                    color="textSecondary"
                    fontWeight={600}
                    fontSize={14}
                    lineHeight={1.2}
                >
                    {title}
                </Typography>
                <span className="bot-message-content">{message}</span>
            </div>
        </div>
    );
};
