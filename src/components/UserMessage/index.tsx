import React from 'react';
import cn from 'classnames';

import './UserMessage.css';

interface Props {
    className?: string;
    message: string;
}

export const UserMessage: React.FC<Props> = ({ className, message }) => {
    return <div className={cn('user-message', className)}>{message}</div>;
};
