// Represents the token usage stats
export interface OpenAIUsage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}

// Represents a single message in the chat (user, assistant, or system)
export interface OpenAIMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
}

// Represents a single choice in the response (e.g., one generated message)
export interface OpenAIChoice {
    message: OpenAIMessage; // The generated message
    finish_reason: 'stop' | 'length' | 'content_filter' | null; // Reason for stopping
    index: number; // Index of the choice (useful if multiple choices are generated)
}

// Represents the entire response from the Chat Completions API
export interface OpenAIChatResponse {
    id: string; // Unique identifier for the request
    object: string; // Type of object, e.g., "chat.completion"
    created: number; // Timestamp of the creation
    model: string; // The model used, e.g., "gpt-3.5-turbo"
    usage?: OpenAIUsage; // Optional token usage stats
    choices: OpenAIChoice[]; // Array of generated choices
}
