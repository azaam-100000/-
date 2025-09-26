import React from 'react';
import GroupCard from './GroupCard';
import { Group } from '../types';
import { PlusCircle } from 'lucide-react';

// بيانات مجموعات وهمية ذات طابع محلي
const mockGroups: Group[] = [
  {
    id: 'g1',
    name: 'سوق السيارات في الرقة',
    imageUrl: 'https://i.ibb.co/689yWhc/image.png',
    memberCount: 12500,
    privacy: 'public',
  },
  {
    id: 'g2',
    name: 'عقارات ومنازل للبيع والإيجار',
    imageUrl: 'https://i.ibb.co/689yWhc/image.png',
    memberCount: 8750,
    privacy: 'public',
  },
  {
    id: 'g3',
    name: 'مطبخ الرقة الشعبي',
    imageUrl: 'https://i.ibb.co/689yWhc/image.png',
    memberCount: 2200,
    privacy: 'private',
  },
  {
    id: 'g4',
    name: 'وظائف شاغرة - الرقة وضواحيها',
    imageUrl: 'https://i.ibb.co/689yWhc/image.png',
    memberCount: 21300,
    privacy: 'public',
  },
];

const GroupsScreen: React.FC = () => {
  return (
    <div className="bg-slate-900 h-full">
      {/* Create Group Button */}
      <div className="p-4 border-b border-slate-700">
        <button className="w-full bg-slate-800 hover:bg-slate-700 border border-slate-600 text-cyan-400 font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
            <PlusCircle size={20} className="ml-2" />
            <span>إنشاء مجموعة جديدة</span>
        </button>
      </div>

      {/* Groups List */}
      <div className="p-4 space-y-4">
        <h2 className="text-lg font-semibold text-slate-300 mb-2">مجموعات قد تعجبك</h2>
        {mockGroups.map(group => (
          <GroupCard key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};

export default GroupsScreen;
