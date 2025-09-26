import React from 'react';
import { Notification } from '../types';
import { Heart, MessageCircle, UserPlus, Info } from 'lucide-react';

interface NotificationRowProps {
  notification: Notification;
}

const NOTIFICATION_ICONS = {
  like: <Heart className="w-6 h-6 text-red-500" />,
  comment: <MessageCircle className="w-6 h-6 text-cyan-400" />,
  follow: <UserPlus className="w-6 h-6 text-green-400" />,
  system: <Info className="w-6 h-6 text-amber-400" />,
};

const NotificationRow: React.FC<NotificationRowProps> = ({ notification }) => {
  return (
    <div className="flex items-start p-3 space-x-4 space-x-reverse hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
      <div className="relative">
        <img src={notification.user.avatarUrl} alt={notification.user.name} className="w-12 h-12 rounded-full" />
        <div className="absolute -bottom-1 -left-1 bg-slate-800 rounded-full p-0.5">
          {NOTIFICATION_ICONS[notification.type]}
        </div>
      </div>
      <div className="flex-1">
        <p className="text-slate-200">
          <span className="font-bold text-white">{notification.user.name}</span>
          {' '}
          {notification.content}
        </p>
        <p className="text-sm text-slate-400 mt-1">{notification.timestamp}</p>
      </div>
      {!notification.isRead && (
        <div className="w-3 h-3 bg-cyan-500 rounded-full self-center flex-shrink-0" aria-label="Unread"></div>
      )}
    </div>
  );
};

export default NotificationRow;
