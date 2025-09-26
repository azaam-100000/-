import React from 'react';
import StoreCard from './StoreCard';
import { Store } from '../types';
import { Search, Plus } from 'lucide-react';

// بيانات متاجر وهمية ذات طابع محلي
const mockStores: Store[] = [
  {
    id: 's1',
    name: 'أزياء المنصور',
    category: 'ملابس وأقمشة',
    imageUrl: 'https://i.ibb.co/689yWhc/image.png',
    rating: 4.5,
    followersCount: 2450,
    description: 'متجر متخصص ببيع أحدث موديلات الملابس الرجالية والنسائية. لدينا تشكيلة واسعة تناسب جميع الأذواق.',
    location: 'الرقة - شارع تل أبيض',
    products: [
        {id: 'p1', name: 'قميص صيفي', price: 75000, imageUrl: 'https://i.ibb.co/689yWhc/image.png'},
        {id: 'p2', name: 'بنطال جينز', price: 150000, imageUrl: 'https://i.ibb.co/689yWhc/image.png'},
    ]
  },
  {
    id: 's2',
    name: 'إلكترونيات الفرات',
    category: 'أجهزة كهربائية وإلكترونيات',
    imageUrl: 'https://i.ibb.co/689yWhc/image.png',
    rating: 4.8,
    followersCount: 5120,
    description: 'كل ما تحتاجه من أجهزة إلكترونية وهواتف محمولة وأجهزة منزلية تجده لدينا بأفضل الأسعار.',
    location: 'الرقة - دوار الساعة',
  },
  {
    id: 's3',
    name: 'حلويات قصر الشام',
    category: 'مطاعم ومواد غذائية',
    imageUrl: 'https://i.ibb.co/689yWhc/image.png',
    rating: 4.2,
    followersCount: 1800,
  },
  {
    id: 's4',
    name: 'مكتبة النور',
    category: 'قرطاسية وخدمات طلابية',
    imageUrl: 'https://i.ibb.co/689yWhc/image.png',
    rating: 4.9,
    followersCount: 3200,
  },
];

interface StoresScreenProps {
    onStoreSelect: (store: Store) => void;
    onCreateStore: () => void;
}

const StoresScreen: React.FC<StoresScreenProps> = ({ onStoreSelect, onCreateStore }) => {
  return (
    <div className="bg-slate-900 h-full relative">
      {/* Search Bar */}
      <div className="p-4 sticky top-0 bg-slate-900/80 backdrop-blur-sm z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن متجر..."
            className="w-full bg-slate-800 border border-slate-700 rounded-full py-2 pr-10 pl-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <Search size={20} className="text-slate-400" />
          </div>
        </div>
      </div>

      {/* Stores Grid */}
      <div className="p-4 grid grid-cols-2 gap-4">
        {mockStores.map(store => (
          <StoreCard key={store.id} store={store} onClick={() => onStoreSelect(store)} />
        ))}
      </div>
      
      {/* Create Store FAB */}
      <button 
        onClick={onCreateStore}
        className="absolute bottom-6 left-6 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-4 shadow-lg transition-transform transform hover:scale-110"
        aria-label="إنشاء متجر جديد"
      >
        <Plus size={24} />
      </button>
    </div>
  );
};

export default StoresScreen;