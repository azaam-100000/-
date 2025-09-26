import React from 'react';
import { Post } from '../types';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-slate-800 border-b border-slate-700 p-4">
      {/* Post Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3 space-x-reverse">
            <img src={post.author.avatarUrl} alt={post.author.name} className="w-12 h-12 rounded-full" />
            <div>
                <p className="font-bold text-white cursor-pointer hover:underline">{post.author.name}</p>
                <p className="text-sm text-slate-400">{post.timestamp}</p>
            </div>
        </div>
        <button className="text-slate-400 hover:text-white" aria-label="More options">
            <MoreHorizontal size={24} />
        </button>
      </div>

      {/* Post Content */}
      <p className="text-slate-200 mb-3 whitespace-pre-wrap">{post.text}</p>
      {post.imageUrl && (
        <div className="my-3">
            <img src={post.imageUrl} alt="محتوى المنشور" className="rounded-lg w-full max-h-[400px] object-cover" />
        </div>
      )}

      {/* Post Actions */}
      <div className="flex justify-around items-center pt-3 mt-3 border-t border-slate-700 text-slate-400">
        <button className="flex items-center space-x-2 space-x-reverse hover:text-red-500 transition-colors">
          <Heart size={20} />
          <span className="text-sm font-semibold">{post.likes}</span>
        </button>
        <button className="flex items-center space-x-2 space-x-reverse hover:text-cyan-400 transition-colors">
          <MessageCircle size={20} />
          <span className="text-sm font-semibold">{post.commentsCount}</span>
        </button>
        <button className="flex items-center space-x-2 space-x-reverse hover:text-green-400 transition-colors">
          <Share2 size={20} />
          <span className="text-sm font-semibold">مشاركة</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;