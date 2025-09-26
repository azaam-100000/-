import React from 'react';
import { Currency } from '../types';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CurrencyRowProps {
  currency: Currency;
}

const CurrencyRow: React.FC<CurrencyRowProps> = ({ currency }) => {
  const isPositive = currency.change >= 0;

  return (
    <div className="flex items-center justify-between p-4 bg-slate-800 rounded-lg border border-slate-700">
      <div className="flex items-center space-x-3 space-x-reverse">
        <img src={currency.flagUrl} alt={`${currency.code} flag`} className="w-10 h-10 rounded-full object-cover" />
        <div>
          <p className="font-bold text-white text-lg">{currency.name}</p>
          <p className="text-sm text-slate-400">{currency.code} / SYP</p>
        </div>
      </div>
      <div className="text-left">
        <p className="font-bold text-white text-lg">{currency.price.toLocaleString('ar-SY', { style: 'currency', currency: 'SYP', minimumFractionDigits: 0 })}</p>
        <div className={`flex items-center justify-end space-x-1 space-x-reverse ${isPositive ? 'text-green-400' : 'text-red-500'}`}>
          {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="font-semibold text-sm">{Math.abs(currency.change).toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyRow;