import React from 'react';
import { Loader } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white h-full flex flex-col items-center justify-center">
      <Loader className="animate-spin text-cyan-400" size={48} />
      <p className="mt-4 text-slate-400">جاري التحميل...</p>
    </div>
  );
};

export default LoadingScreen;