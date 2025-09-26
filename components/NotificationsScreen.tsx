import React from 'react';
import NotificationRow from './NotificationRow';
import { Notification } from '../types';

// بيانات إشعارات وهمية
const mockNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'like',
    user: { id: 'u3', name: 'فاطمة العلي', avatarUrl: 'https://placehold.co/100x100/3b82f6/ffffff/png?text=F' },
    content: 'أعجبه منشورك: "من يعرف أفضل مكان لبيع الحلويات..."',
    timestamp: 'منذ 5 دقائق',
    isRead: false,
  },
  {
    id: 'n2',
    type: 'comment',
    user: { id: 'u1', name: 'أحمد الفراتي', avatarUrl: 'https://placehold.co/100x100/ef4444/ffffff/png?text=A' },
    content: 'علّق على منشورك: "جرب حلويات القصر، إنها ممتازة!"',
    timestamp: 'منذ 20 دقيقة',
    isRead: false,
  },
  {
    id: 'n3',
    type: 'follow',
    user: { id: 's2', name: 'إلكترونيات الفرات', avatarUrl: 'https://placehold.co/100x100/f97316/ffffff/png?text=E' },
    content: 'بدأ بمتابعتك.',
    timestamp: 'منذ ساعة',
    isRead: true,
  },
  {
    id: 'n4',
    type: 'system',
    user: { id: 'sys', name: 'إدارة التطبيق', avatarUrl: 'https://placehold.co/100x100/6366f1/ffffff/png?text=S' },
    content: 'تم تحديث سياسة الخصوصية. يرجى مراجعتها.',
    timestamp: 'يوم أمس',
    isRead: true,
  },
   {
    id: 'n5',
    type: 'like',
    user: { id: 'u2', name: 'متجر الياسمين', avatarUrl: 'https://placehold.co/100x100/22c55e/ffffff/png?text=Y' },
    content: 'أعجبه منشورك.',
    timestamp: 'يوم أمس',
    isRead: true,
  },
];

const NotificationsScreen: React.FC = () => {
    const newNotifications = mockNotifications.filter(n => !n.isRead);
    const earlierNotifications = mockNotifications.filter(n => n.isRead);

  return (
    <div className="bg-slate-900 h-full">
      <div className="p-2 border-b border-slate-700 flex justify-end">
        <button className="text-sm text-cyan-400 hover:text-cyan-300 p-2">
            تحديد الكل كمقروء
        </button>
      </div>
      <div className="divide-y divide-slate-800">
        {newNotifications.length > 0 && (
            <div>
                <h2 className="font-bold text-slate-300 p-3">جديد</h2>
                {newNotifications.map(n => <NotificationRow key={n.id} notification={n} />)}
            </div>
        )}
        {earlierNotifications.length > 0 && (
            <div>
                <h2 className="font-bold text-slate-300 p-3">أقدم</h2>
                {earlierNotifications.map(n => <NotificationRow key={n.id} notification={n} />)}
            </div>
        )}
      </div>
    </div>
  );
};

export default NotificationsScreen;
