import { useCallback } from 'react';
import { BotType } from '@bots/types';
import { Message } from '@storage/messages';
import { useMessagesHistory } from './useMessagesHistory';
import { useChatGptApi } from './useChatGptApi';

interface UseChatWithBotParams {
    userId: string;
    botId: BotType;
}

interface UseChatWithBotReturn {
    messages: Message[];
    isBotResponding: boolean;

    sendMessage: (message: string) => Promise<void>;
}

export const useChatWithBot = ({
    userId,
    botId,
}: UseChatWithBotParams): UseChatWithBotReturn => {
    const { messages, addMessage } = useMessagesHistory({ userId, botId });

    const { isResponding, sendRequest } = useChatGptApi({ botId });

    const sendMessage = useCallback(
        async (message: string) => {
            const userMessage = { role: 'user', content: message } as const;
            await addMessage(userMessage);

            const response = await sendRequest([...messages, userMessage]);

            if (response) {
                addMessage(response);
            }
        },
        [addMessage, messages, sendRequest]
    );

    return {
        messages,
        isBotResponding: isResponding,
        sendMessage,
    };
};
