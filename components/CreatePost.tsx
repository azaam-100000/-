import React from 'react';
import { Image as ImageIcon, Video, Send } from 'lucide-react';

// Using a static user for the placeholder
const currentUser = {
    name: 'عبدالله',
    avatarUrl: 'https://placehold.co/100x100/64748b/e2e8f0/png?text=A',
};

const CreatePost: React.FC = () => {
  return (
    <div className="bg-slate-800 p-4 border-b border-slate-700 sticky top-0 z-10">
      <div className="flex items-start space-x-3 space-x-reverse">
        <img src={currentUser.avatarUrl} alt={currentUser.name} className="w-12 h-12 rounded-full" />
        <div className="flex-1">
          <textarea
            className="w-full bg-slate-700 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
            rows={3}
            placeholder={`بماذا تفكر يا ${currentUser.name}؟`}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-3">
        <div className="flex space-x-4 space-x-reverse text-slate-400">
            <button className="hover:text-cyan-400 transition-colors" aria-label="Add Image"><ImageIcon size={22} /></button>
            <button className="hover:text-cyan-400 transition-colors" aria-label="Add Video"><Video size={22} /></button>
        </div>
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-6 rounded-full transition-colors flex items-center">
            <Send size={18} className="ml-2"/>
            <span>نشر</span>
        </button>
      </div>
    </div>
  );
};

export default CreatePost;