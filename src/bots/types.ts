export type BotType =
    | 'englishTeacher'
    | 'fitnessTrainer'
    | 'businessConsultant';

export interface BotConfig {
    id: BotType;
    title: string;
    prompt: string;
    avatarSrc: string;
}
