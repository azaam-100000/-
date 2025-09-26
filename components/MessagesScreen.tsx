import React from 'react';
import ConversationRow from './ConversationRow';
import { ConversationPreview } from '../types';
import { Search } from 'lucide-react';

// بيانات محادثات وهمية
const mockConversations: ConversationPreview[] = [
  {
    id: 'c1',
    user: { id: 'u2', name: 'متجر الياسمين', avatarUrl: 'https://placehold.co/100x100/22c55e/ffffff/png?text=Y', isOnline: true },
    lastMessage: 'أهلاً بك، نعم بالتأكيد، التشكيلة الجديدة متوفرة بجميع المقاسات.',
    timestamp: '15:23',
    unreadCount: 2,
  },
  {
    id: 'c2',
    user: { id: 'u1', name: 'أحمد الفراتي', avatarUrl: 'https://placehold.co/100x100/ef4444/ffffff/png?text=A', isOnline: false },
    lastMessage: 'شكراً جزيلاً لك على المساعدة!',
    timestamp: '11:45',
    unreadCount: 0,
  },
  {
    id: 'c3',
    user: { id: 'u3', name: 'فاطمة العلي', avatarUrl: 'https://placehold.co/100x100/3b82f6/ffffff/png?text=F', isOnline: true },
    lastMessage: 'سأرسل لك الموقع على الخريطة.',
    timestamp: 'أمس',
    unreadCount: 0,
  },
   {
    id: 'c4',
    user: { id: 's2', name: 'إلكترونيات الفرات', avatarUrl: 'https://placehold.co/100x100/f97316/ffffff/png?text=E', isOnline: false },
    lastMessage: 'تم استلام الطلب، سيتم التوصيل خلال 24 ساعة.',
    timestamp: '2024/05/20',
    unreadCount: 0,
  },
];

interface MessagesScreenProps {
    onConversationSelect: (conversation: ConversationPreview) => void;
}

const MessagesScreen: React.FC<MessagesScreenProps> = ({ onConversationSelect }) => {
  return (
    <div className="bg-slate-900 h-full flex flex-col">
      {/* Search Bar */}
      <div className="p-4 sticky top-0 bg-slate-900/80 backdrop-blur-sm z-10 border-b border-slate-800">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث في الرسائل..."
            className="w-full bg-slate-800 border border-slate-700 rounded-full py-2 pr-10 pl-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search size={20} className="text-slate-400" />
          </div>
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-grow overflow-y-auto p-2">
        {mockConversations.map(conv => (
          <ConversationRow key={conv.id} conversation={conv} onClick={() => onConversationSelect(conv)} />
        ))}
      </div>
    </div>
  );
};

export default MessagesScreen;
