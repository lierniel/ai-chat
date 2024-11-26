import axios from 'axios';
import { OPEN_AI_API_KEY } from '@consts/secrets';
import { OpenAIChatResponse, OpenAIMessage } from './types';

const API_URL = 'https://api.openai.com/v1/chat/completions';

export const sendMessageToChatGPT = async (messages: OpenAIMessage[]) => {
    try {
        const response = await axios.post<OpenAIChatResponse>(
            API_URL,
            {
                model: 'gpt-3.5-turbo', // Replace with the model you want to use
                messages,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${OPEN_AI_API_KEY}`,
                },
            }
        );

        return response.data.choices[0].message;
    } catch (error) {
        console.error('Error communicating with ChatGPT:', error);
        throw error;
    }
};
