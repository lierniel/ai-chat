import React, { useCallback, useRef } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { MessageInput } from '@components/MessageInput';
import { BotMessage } from '@components/BotMessage';
import { UserMessage } from '@components/UserMessage';
import { isBotType } from '@bots/utils/isBotType';
import { botsConfig } from '@bots/config';
import { useChatWithBot } from '@hooks/useChatWithBot';
import { EmptyMessagesList } from '@components/EmptyMessagesList';

import './ChatPage.css';
import { BasePageLayout } from '@components/BasePageLayout';

export const ChatPage: React.FC = () => {
    const { botId } = useParams();
    const { user } = useAuth0();

    if (!isBotType(botId) || !user?.email) {
        return <Navigate to="/404" replace />;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const chatListRef = useRef<HTMLElement>(null);

    const { messages, isMessagesListLoading, isBotResponding, sendMessage } =
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useChatWithBot({
            userId: user.email,
            botId,
        });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const handleMessageSubmit = useCallback(
        (message: string) => {
            sendMessage(message);

            chatListRef.current?.scrollTo(0, 0);
        },
        [sendMessage]
    );

    const { title, avatarSrc } = botsConfig[botId];

    const isMessagesListEmpty = !isMessagesListLoading && !messages.length;

    return (
        <BasePageLayout
            canGoBack
            isLoaderVisible={isMessagesListLoading || isBotResponding}
        >
            <section className="chat-messages" ref={chatListRef}>
                {isMessagesListEmpty && (
                    <EmptyMessagesList
                        className="chat-empty-messages-stub"
                        botTitle={title}
                        botAvatarSrc={avatarSrc}
                    />
                )}
                {messages.toReversed().map(({ messageId, role, content }) => {
                    if (role === 'assistant') {
                        return (
                            <BotMessage
                                className="chat-page--bot-message"
                                key={messageId}
                                title={title}
                                avatarSrc={avatarSrc}
                                message={content}
                            />
                        );
                    }

                    if (role === 'user') {
                        return (
                            <UserMessage
                                className="chat-page--user-message"
                                key={messageId}
                                message={content}
                            />
                        );
                    }

                    return null;
                })}
            </section>
            <div className="chat-page--bottom-section">
                <MessageInput
                    autofocus
                    isDisabled={isBotResponding}
                    onSubmit={handleMessageSubmit}
                />
            </div>
        </BasePageLayout>
    );
};
