import { BotConfig, BotType } from './types';

import englishTeacherAvatar from './avatars/englishTeacher.webp';
import fitnessTrainerAvatar from './avatars/fitnessTrainer.webp';
import businessConsultantAvatar from './avatars/businessConsultant.webp';

export const botsConfig: Record<BotType, BotConfig> = {
    englishTeacher: {
        id: 'englishTeacher',
        title: 'English Teacher',
        avatarSrc: englishTeacherAvatar,
        prompt: 'You are a professional English teacher helping with learning',
    },
    fitnessTrainer: {
        id: 'fitnessTrainer',
        title: 'Fitness Trainer',
        avatarSrc: fitnessTrainerAvatar,
        prompt: 'You are a fitness trainer giving advices about usefull exercises and healthy food',
    },
    businessConsultant: {
        id: 'businessConsultant',
        title: 'Business Consultant',
        avatarSrc: businessConsultantAvatar,
        prompt: 'You are a business assistent with huge expertize in building small sector business',
    },
};

export const botsList = Object.values(botsConfig);

export const botTypes = new Set(Object.keys(botsConfig));
