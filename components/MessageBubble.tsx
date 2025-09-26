import React from 'react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
  isSender: boolean;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, isSender }) => {
  const bubbleClasses = isSender
    ? 'bg-cyan-600 text-white rounded-br-none self-end'
    : 'bg-slate-700 text-slate-200 rounded-bl-none self-start';
  
  const containerClasses = isSender ? 'justify-end' : 'justify-start';

  return (
    <div className={`flex w-full ${containerClasses}`}>
        <div className={`max-w-xs md:max-w-md p-3 rounded-2xl shadow ${bubbleClasses}`}>
            <p className="text-base whitespace-pre-wrap">{message.text}</p>
            <p className={`text-xs mt-1 text-right ${isSender ? 'text-cyan-200' : 'text-slate-400'}`}>
                {message.timestamp}
            </p>
        </div>
    </div>
  );
};

export default MessageBubble;
