import React from 'react';
import { Store } from '../types';
import { Star, UserPlus } from 'lucide-react';

interface StoreCardProps {
  store: Store;
  onClick: () => void;
}

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
    const totalStars = 5;
    const filledStars = Math.round(rating);
    
    return (
        <div className="flex items-center" dir="ltr">
            {[...Array(totalStars)].map((_, index) => (
                <Star
                    key={index}
                    size={16}
                    className={index < filledStars ? 'text-amber-400 fill-amber-400' : 'text-slate-500'}
                />
            ))}
            <span className="text-amber-400 font-bold text-sm mr-1">{rating.toFixed(1)}</span>
        </div>
    );
};


const StoreCard: React.FC<StoreCardProps> = ({ store, onClick }) => {
  return (
    <div 
        className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 cursor-pointer transition-transform transform hover:-translate-y-1"
        onClick={onClick}
    >
      <img src={store.imageUrl} alt={store.name} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate">{store.name}</h3>
        <p className="text-sm text-cyan-400 mb-2">{store.category}</p>
        <div className="flex items-center justify-between text-slate-400">
          <RatingStars rating={store.rating} />
          <div className="flex items-center space-x-1 space-x-reverse">
            <UserPlus size={16} />
            <span className="text-sm font-semibold">
                {store.followersCount.toLocaleString('ar-EG')}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreCard;