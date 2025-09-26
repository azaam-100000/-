import React from 'react';
import { Store } from '../types';
import { UserPlus, MessageCircle, Phone } from 'lucide-react';

interface StoreDetailsScreenProps {
  store: Store;
}

const StoreDetailsScreen: React.FC<StoreDetailsScreenProps> = ({ store }) => {
  return (
    <div className="bg-slate-900 h-full overflow-y-auto">
      {/* Store Header Image */}
      <img src={store.imageUrl} alt={store.name} className="w-full h-48 object-cover" />

      <div className="p-4">
        {/* Store Info */}
        <h1 className="text-3xl font-bold text-white">{store.name}</h1>
        <p className="text-md text-cyan-400 mt-1">{store.category}</p>
        <p className="text-sm text-slate-400 mt-1">{store.location || 'الموقع غير محدد'}</p>
        <p className="text-slate-300 my-4">
          {store.description || 'لا يوجد وصف لهذا المتجر.'}
        </p>

        {/* Action Buttons */}
        <div className="flex space-x-2 space-x-reverse my-4">
          <button className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center transition-colors">
            <UserPlus size={16} className="ml-2" />
            <span>متابعة</span>
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold p-3 rounded-lg transition-colors">
            <MessageCircle size={20} />
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white font-bold p-3 rounded-lg transition-colors">
            <Phone size={20} />
          </button>
        </div>

        {/* Products Section */}
        <div>
          <h2 className="text-xl font-bold text-white border-b-2 border-cyan-500 pb-2 mb-4">
            المنتجات المعروضة
          </h2>
          {store.products && store.products.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {store.products.map(product => (
                <div key={product.id} className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                  <img src={product.imageUrl} alt={product.name} className="w-full h-24 object-cover" />
                  <div className="p-2">
                    <p className="font-semibold text-white truncate">{product.name}</p>
                    <p className="text-sm text-green-400">{product.price.toLocaleString('ar-SY', { style: 'currency', currency: 'SYP' })}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-slate-800 rounded-lg">
              <p className="text-slate-400">لا توجد منتجات لعرضها حالياً.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreDetailsScreen;
