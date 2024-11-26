import React, { useCallback, useState } from 'react';
import { IconButton, TextareaAutosize } from '@mui/material';
import { Send } from '@mui/icons-material';
import classNames from 'classnames';

import './MessageInput.css';

const ONLY_SPACES_REGEX = /^\s+$/g;

const isValidMessage = (message: string) => {
    if (!message) {
        return false;
    }

    if (ONLY_SPACES_REGEX.test(message)) {
        return false;
    }

    return true;
};

const formatMessageBeforeSubmitting = (message: string) => {
    return message.trim();
};

interface Props {
    className?: string;
    autofocus?: boolean;
    isDisabled?: boolean;
    onSubmit?: (message: string) => void;
}

export const MessageInput: React.FC<Props> = ({
    className,
    autofocus,
    isDisabled = false,
    onSubmit,
}) => {
    const [message, setMessage] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleTextAreaChange = useCallback<
        React.ChangeEventHandler<HTMLTextAreaElement>
    >((e) => {
        setMessage(e.target.value);
    }, []);

    const submitMessage = useCallback(() => {
        if (!isValidMessage(message) || isDisabled) {
            return;
        }

        onSubmit?.(formatMessageBeforeSubmitting(message));
        setMessage('');
    }, [isDisabled, message, onSubmit]);

    const handleTextAreaKeyDown = useCallback<
        React.KeyboardEventHandler<HTMLTextAreaElement>
    >(
        (e) => {
            if (e.code === 'Enter' && !e.shiftKey) {
                e.preventDefault();

                submitMessage();
            }
        },
        [submitMessage]
    );

    return (
        <div
            className={classNames('message-input', className, {
                focused: isFocused,
                disabled: isDisabled,
            })}
        >
            <TextareaAutosize
                className="message-input--textarea"
                placeholder="Type your message here"
                maxRows={6}
                autoFocus={autofocus}
                value={message}
                onChange={handleTextAreaChange}
                onKeyDown={handleTextAreaKeyDown}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
            {isValidMessage(message) && (
                <IconButton
                    size="small"
                    disabled={isDisabled}
                    onClick={submitMessage}
                >
                    <Send className="message-input--send-icon" />
                </IconButton>
            )}
        </div>
    );
};
