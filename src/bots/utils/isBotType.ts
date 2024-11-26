import { botTypes } from '../config';
import { BotType } from '../types';

export const isBotType = (value: string | undefined): value is BotType => {
    if (!value) return false;
    return botTypes.has(value);
};
