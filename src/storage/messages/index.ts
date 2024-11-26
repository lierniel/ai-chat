import { DBSchema, openDB } from 'idb';
import { BotType } from '@bots/types';
import { OpenAIMessage } from '@services/chatService/types';

export type MessageType = 'user' | 'bot';

export interface Message extends OpenAIMessage {
    userId: string;
    botId: BotType;
    messageId: string;
    timestamp: number;
}

interface ChatDBSchema extends DBSchema {
    messages: {
        key: string;
        value: Message;
        indexes: {
            userChatIndex: [string, string];
        };
    };
}

const db = openDB<ChatDBSchema>('AiChat_messages', 1, {
    upgrade(database) {
        const messageStore = database.createObjectStore('messages', {
            keyPath: 'messageId',
        });
        messageStore.createIndex('userChatIndex', ['userId', 'botId']);
    },
});

interface SaveMessagePayload extends OpenAIMessage {
    userId: string;
    botId: BotType;
}

export const saveMessage = async (message: SaveMessagePayload) => {
    const database = await db;
    await database.put('messages', {
        ...message,
        messageId: String(Date.now()),
        timestamp: Date.now(),
    });
};

export const getMessages = async (userId: string, botId: string) => {
    const database = await db;
    const index = database
        .transaction('messages', 'readonly')
        .store.index('userChatIndex');
    return index.getAll([userId, botId]);
};
