import { useCallback, useEffect, useState } from 'react';
import { BotType } from '@bots/types';
import { getMessages, Message, saveMessage } from '@storage/messages';
import { OpenAIMessage } from '@services/chatService/types';

export interface AddMessagePayload extends OpenAIMessage {}

interface UseMessagesHistoryParams {
    userId: string;
    botId: BotType;
}

interface UseMessagesHistoryReturn {
    messages: Message[];
    isLoading: boolean;

    addMessage: (message: AddMessagePayload) => Promise<void>;
}

export const useMessagesHistory = ({
    userId,
    botId,
}: UseMessagesHistoryParams): UseMessagesHistoryReturn => {
    // const [messages, setMessages] = useState(INIT_MESSAGES);

    // const addMessage = useCallback((message: AddMessagePayload) => {
    //     setMessages((prev) => [...prev, { ...message, id: Date.now() }]);
    // }, []);

    // return { messages, addMessage };

    const [messages, setMessages] = useState<Message[]>([]);

    const [isLoading, setIsLoading] = useState(true);

    const loadMessages = useCallback(async () => {
        setIsLoading(true);
        try {
            const msgs = await getMessages(userId, botId);
            setMessages(msgs);
        } catch (e) {
            console.error('Error while loading messages history', e);
        } finally {
            setIsLoading(false);
        }
    }, [botId, userId]);

    const addMessage = useCallback(
        async ({ role, content }: AddMessagePayload) => {
            await saveMessage({
                userId,
                botId,
                role,
                content,
            });
            await loadMessages();
        },
        [botId, loadMessages, userId]
    );

    useEffect(() => {
        loadMessages();
    }, [loadMessages]);

    return { messages, isLoading, addMessage };
};
