import { useCallback, useState } from 'react';
import { botsConfig } from '@bots/config';
import { BotType } from '@bots/types';
import { sendMessageToChatGPT } from '@services/chatService';
import { OpenAIMessage } from '@services/chatService/types';

interface UseChatGptApiParams {
    botId: BotType;
}

interface UseChatGptApiReturns {
    response?: OpenAIMessage;
    isResponding: boolean;
    isError?: boolean;

    sendRequest: (
        messages: OpenAIMessage[]
    ) => Promise<OpenAIMessage | undefined>;
}

export const useChatGptApi = ({
    botId,
}: UseChatGptApiParams): UseChatGptApiReturns => {
    const [response, setResponse] = useState<OpenAIMessage>();
    const [isResponding, setIsResponding] = useState(false);
    const [isError, setIsError] = useState(false);

    const { prompt } = botsConfig[botId];

    const clearState = useCallback(() => {
        setIsResponding(false);
        setIsError(false);
        setResponse(undefined);
    }, []);

    const sendRequest = useCallback(
        async (messages: OpenAIMessage[]) => {
            clearState();

            try {
                setIsResponding(true);

                const contextMessage: OpenAIMessage = {
                    role: 'system',
                    content: prompt,
                };

                const result = await sendMessageToChatGPT([
                    contextMessage,
                    ...messages,
                ]);

                setResponse(result);

                return result;
            } catch {
                setIsError(true);
                return undefined;
            } finally {
                setIsResponding(false);
            }
        },
        [clearState, prompt]
    );

    return { response, isResponding, isError, sendRequest };
};
