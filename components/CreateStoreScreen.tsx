import React from 'react';
import { Store, Tag, Info, MapPin, Camera } from 'lucide-react';

interface CreateStoreScreenProps {
  onSave: () => void;
}

const storeCategories = [
    'ملابس وأقمشة',
    'أجهزة كهربائية وإلكترونيات',
    'مطاعم ومواد غذائية',
    'قرطاسية وخدمات طلابية',
    'عقارات ومكاتب',
    'سيارات ومركبات',
    'صحة وتجميل',
    'خدمات أخرى',
];

const CreateStoreScreen: React.FC<CreateStoreScreenProps> = ({ onSave }) => {
  return (
    <div className="bg-slate-900 h-full overflow-y-auto p-4">
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-white">أضف متجرك إلى السوق</h1>
        <p className="text-slate-400 mt-1">املأ التفاصيل التالية لعرض متجرك للجميع.</p>
      </div>

       <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onSave(); }}>
        <div className="flex flex-col items-center justify-center bg-slate-800 border-2 border-dashed border-slate-700 rounded-lg p-6 text-center cursor-pointer hover:bg-slate-700">
            <Camera size={40} className="text-slate-500 mb-2" />
            <p className="text-white font-semibold">تحميل صورة المتجر</p>
            <p className="text-xs text-slate-400">PNG, JPG (بحد أقصى 5MB)</p>
        </div>
       
        <div>
          <label className="text-sm font-bold text-slate-400 mb-2 block">اسم المتجر</label>
          <div className="relative">
            <Store size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="مثال: أزياء المنصور" required className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-400 mb-2 block">التصنيف</label>
          <div className="relative">
            <Tag size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <select required className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-cyan-500">
                <option value="">اختر تصنيفاً...</option>
                {storeCategories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>
        
        <div>
          <label className="text-sm font-bold text-slate-400 mb-2 block">الوصف</label>
          <div className="relative">
            <Info size={20} className="absolute right-3 top-4 text-slate-400" />
            <textarea placeholder="صف ما يقدمه متجرك..." rows={4} className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-400 mb-2 block">الموقع</label>
          <div className="relative">
            <MapPin size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="مثال: الرقة - شارع تل أبيض" className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
          </div>
        </div>

        <div className="pt-4">
          <button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-colors">
            إنشاء المتجر
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStoreScreen;
