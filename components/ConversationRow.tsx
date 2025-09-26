import React from 'react';
import { ConversationPreview } from '../types';

interface ConversationRowProps {
  conversation: ConversationPreview;
  onClick: () => void;
}

const ConversationRow: React.FC<ConversationRowProps> = ({ conversation, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center p-3 space-x-4 space-x-reverse hover:bg-slate-800 cursor-pointer transition-colors rounded-lg"
    >
      <div className="relative">
        <img src={conversation.user.avatarUrl} alt={conversation.user.name} className="w-14 h-14 rounded-full" />
        {conversation.user.isOnline && (
            <span className="absolute bottom-0 right-0 block h-3.5 w-3.5 rounded-full bg-green-500 border-2 border-slate-900"></span>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <p className="text-base font-bold text-white truncate">{conversation.user.name}</p>
          <p className="text-xs text-slate-400">{conversation.timestamp}</p>
        </div>
        <div className="flex justify-between items-start mt-1">
          <p className="text-sm text-slate-400 truncate pr-4">{conversation.lastMessage}</p>
          {conversation.unreadCount > 0 && (
            <span className="bg-cyan-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {conversation.unreadCount}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ConversationRow;
