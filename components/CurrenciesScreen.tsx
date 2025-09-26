import React from 'react';
import CurrencyRow from './CurrencyRow';
import { Currency } from '../types';
import { RefreshCw } from 'lucide-react';

// بيانات وهمية لأسعار العملات
const mockCurrencies: Currency[] = [
  {
    code: 'USD',
    name: 'الدولار الأمريكي',
    flagUrl: 'https://flagcdn.com/w160/us.png',
    price: 14500,
    change: 0.34,
  },
  {
    code: 'EUR',
    name: 'اليورو الأوروبي',
    flagUrl: 'https://flagcdn.com/w160/eu.png',
    price: 15800,
    change: -0.12,
  },
  {
    code: 'TRY',
    name: 'الليرة التركية',
    flagUrl: 'https://flagcdn.com/w160/tr.png',
    price: 450,
    change: 1.15,
  },
];

const CurrenciesScreen: React.FC = () => {
    const lastUpdated = new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="bg-slate-900 h-full p-4 space-y-4">
      <div className="flex justify-between items-center text-slate-400 mb-2">
        <p className="text-sm">آخر تحديث: {lastUpdated}</p>
        <button className="flex items-center space-x-2 space-x-reverse p-2 rounded-lg hover:bg-slate-800 transition-colors">
            <RefreshCw size={16} />
            <span className="text-sm">تحديث</span>
        </button>
      </div>

      <h2 className="text-xl font-bold text-white mb-2">أسعار الصرف مقابل الليرة السورية</h2>
      
      {mockCurrencies.map(currency => (
        <CurrencyRow key={currency.code} currency={currency} />
      ))}

      <div className="bg-slate-800 p-4 rounded-lg mt-6 border border-slate-700">
        <h3 className="font-bold text-white mb-2">ملاحظة هامة</h3>
        <p className="text-slate-300 text-sm">
          الأسعار المعروضة هي للمعلومات فقط وقد تختلف قليلاً عن أسعار السوق الفعلية. يرجى التأكد من المصادر الموثوقة قبل إجراء أي معاملة.
        </p>
      </div>
    </div>
  );
};

export default CurrenciesScreen;