import React from 'react';
import { Settings, Store, Bookmark, Shield, Edit, Share2, ChevronLeft } from 'lucide-react';

const currentUser = {
    name: 'عبدالله الأحمد',
    username: 'abdullah_ahmad',
    avatarUrl: 'https://placehold.co/100x100/64748b/e2e8f0/png?text=A',
    bio: 'مطور واجهات أمامية | مهتم بالتجارة الإلكترونية في الرقة.',
    stats: {
        posts: 42,
        followers: 1250,
        following: 320,
    }
};

interface ProfileScreenProps {
    onEditProfile: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ onEditProfile }) => {
    const menuItems = [
        { icon: Settings, text: 'الإعدادات والخصوصية', action: () => {} },
        { icon: Store, text: 'متجري', action: () => {} },
        { icon: Bookmark, text: 'العناصر المحفوظة', action: () => {} },
        { icon: Shield, text: 'المساعدة والدعم', action: () => {} },
    ];

  return (
    <div className="bg-slate-900 h-full overflow-y-auto">
      {/* Profile Header */}
      <div className="p-4 bg-slate-800 border-b border-slate-700">
        <div className="flex flex-col items-center">
          <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-24 h-24 rounded-full border-4 border-slate-700" />
          <h1 className="text-2xl font-bold text-white mt-3">{currentUser.name}</h1>
          <p className="text-sm text-slate-400">@{currentUser.username}</p>
          <p className="text-center text-slate-300 my-3 max-w-sm">{currentUser.bio}</p>
        </div>

        {/* Stats */}
        <div className="flex justify-around my-4 bg-slate-900/50 p-3 rounded-xl">
          <div className="text-center">
            <p className="font-bold text-lg text-white">{currentUser.stats.posts}</p>
            <p className="text-sm text-slate-400">منشور</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg text-white">{currentUser.stats.followers.toLocaleString('ar-EG')}</p>
            <p className="text-sm text-slate-400">متابع</p>
          </div>
          <div className="text-center">
            <p className="font-bold text-lg text-white">{currentUser.stats.following}</p>
            <p className="text-sm text-slate-400">متابَع</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 space-x-reverse">
            <button onClick={onEditProfile} className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
                <Edit size={16} className="ml-2" />
                <span>تعديل الملف الشخصي</span>
            </button>
            <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold p-2 rounded-lg transition-colors">
                <Share2 size={20} />
            </button>
        </div>
      </div>

      {/* Menu List */}
      <div className="p-2">
        {menuItems.map((item, index) => {
            // FIX: Property 'color' does not exist on type '{ icon: any; text: string; action: () => void; }'. Removed references to it.
            return (
              <button key={index} onClick={item.action} className={`w-full flex items-center justify-between p-4 rounded-lg hover:bg-slate-800 transition-colors text-right text-white`}>
                  <div className="flex items-center space-x-4 space-x-reverse">
                      <item.icon size={22} />
                      <span className="font-semibold">{item.text}</span>
                  </div>
                  <ChevronLeft size={20} className="text-slate-500" />
              </button>
            );
        })}
      </div>
    </div>
  );
};

export default ProfileScreen;
