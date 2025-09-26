import React from 'react';
import ToggleSwitch from './ToggleSwitch';
import { User, Info, MapPin, Phone, Camera } from 'lucide-react';

interface EditProfileScreenProps {
  onSave: () => void;
}

const currentUser = {
    name: 'عبدالله الأحمد',
    avatarUrl: 'https://placehold.co/100x100/64748b/e2e8f0/png?text=A',
    bio: 'مطور واجهات أمامية | مهتم بالتجارة الإلكترونية في الرقة.',
    location: 'الرقة، سوريا',
    phone: '+963 912 345 678',
};


const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ onSave }) => {
  return (
    <div className="bg-slate-900 h-full overflow-y-auto p-4">
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
            <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-28 h-28 rounded-full border-4 border-slate-700" />
            <button className="absolute bottom-0 left-0 bg-cyan-600 p-2 rounded-full text-white hover:bg-cyan-700 border-2 border-slate-900">
                <Camera size={20} />
            </button>
        </div>
      </div>
      
      <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSave(); }}>
        <div>
          <label className="text-sm font-bold text-slate-400 mb-2 block">الاسم</label>
          <div className="relative">
            <User size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" defaultValue={currentUser.name} className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
        </div>
        
        <div>
          <label className="text-sm font-bold text-slate-400 mb-2 block">السيرة الذاتية (Bio)</label>
          <div className="relative">
            <Info size={20} className="absolute right-3 top-4 text-slate-400" />
            <textarea defaultValue={currentUser.bio} rows={3} className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-400 mb-2 block">الموقع</label>
          <div className="relative">
            <MapPin size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" defaultValue={currentUser.location} className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-400 mb-2 block">رقم الهاتف</label>
          <div className="relative">
            <Phone size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="tel" defaultValue={currentUser.phone} className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
        </div>

        {/* Privacy Settings */}
        <div className="pt-4 border-t border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">إعدادات الخصوصية</h3>
            <div className="space-y-4">
                <ToggleSwitch label="إظهار رقم الهاتف للعامة" initialValue={false} />
                <ToggleSwitch label="إظهار حالة الاتصال (متصل الآن)" initialValue={true} />
                <ToggleSwitch label="السماح بالرسائل من غير المتابعين" initialValue={true} />
            </div>
        </div>

        <div className="pt-4">
          <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
            حفظ التغييرات
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileScreen;
