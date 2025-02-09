import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from '@mui/material';

import { ChatListItem } from '@components/ChatListItem';
import { BasePageLayout } from '@components/BasePageLayout';
import { botsList } from '../../bots/config';

export const ChatListPage: React.FC = () => {
    const navigate = useNavigate();

    const handleChatClick = useCallback(
        (id: string) => {
            navigate(`/chat/${id}`);
        },
        [navigate]
    );

    return (
        <BasePageLayout>
            <List disablePadding>
                {botsList.map(({ id, title, avatarSrc }) => (
                    <ChatListItem
                        key={id}
                        id={id}
                        title={title}
                        avatarSrc={avatarSrc}
                        onClick={handleChatClick}
                    />
                ))}
            </List>
        </BasePageLayout>
    );
};
