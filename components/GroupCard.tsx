import React from 'react';
import { Group } from '../types';
import { Users, Lock, Globe } from 'lucide-react';

interface GroupCardProps {
  group: Group;
}

const GroupCard: React.FC<GroupCardProps> = ({ group }) => {
  const isPublic = group.privacy === 'public';

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 flex items-center p-4 space-x-4 space-x-reverse">
      <img src={group.imageUrl} alt={group.name} className="w-20 h-20 rounded-lg object-cover" />
      <div className="flex-1">
        <h3 className="text-lg font-bold text-white">{group.name}</h3>
        <div className="flex items-center text-slate-400 text-sm my-1">
          <Users size={16} className="ml-1" />
          <span>{group.memberCount.toLocaleString('ar-EG')} عضو</span>
        </div>
        <div className={`flex items-center text-sm ${isPublic ? 'text-green-400' : 'text-amber-400'}`}>
          {isPublic ? <Globe size={16} className="ml-1" /> : <Lock size={16} className="ml-1" />}
          <span>{isPublic ? 'مجموعة عامة' : 'مجموعة خاصة'}</span>
        </div>
      </div>
      <button className="self-start bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-1 px-4 rounded-full transition-colors text-sm">
        انضم
      </button>
    </div>
  );
};

export default GroupCard;
