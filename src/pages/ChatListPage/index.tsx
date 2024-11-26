import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { List } from '@mui/material';

import { TopPanel } from '@components/TopPanel';
import { ChatListItem } from '@components/ChatListItem';
import { botsList } from '../../bots/config';

import './ChatListPage.css';

export const ChatListPage: React.FC = () => {
    const navigate = useNavigate();

    const handleChatClick = useCallback(
        (id: string) => {
            navigate(`/chat/${id}`);
        },
        [navigate]
    );

    return (
        <section className="chat-list-page">
            <TopPanel />
            <main className="chat-list-page-content">
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
            </main>
        </section>
    );
};
