import React from 'react';
import CreatePost from './CreatePost';
import PostCard from './PostCard';
import { Post } from '../types';

// بيانات وهمية ذات طابع محلي
const mockPosts: Post[] = [
  {
    id: '1',
    author: { id: 'u1', name: 'أحمد الفراتي', avatarUrl: 'https://placehold.co/100x100/ef4444/ffffff/png?text=A' },
    text: 'أجواء رائعة اليوم في حديقة الرشيد بالرقة. مكان مثالي لقضاء وقت ممتع مع العائلة.\n#سوق_الرقة #سوريا',
    imageUrl: 'https://i.ibb.co/689yWhc/image.png',
    likes: 125,
    commentsCount: 18,
    timestamp: 'منذ ساعتين',
  },
  {
    id: '2',
    author: { id: 'u2', name: 'متجر الياسمين', avatarUrl: 'https://placehold.co/100x100/22c55e/ffffff/png?text=Y' },
    text: 'وصلت تشكيلة جديدة من الملابس الصيفية! زورونا في محلنا في شارع تل أبيض. أسعار خاصة لأول 10 زبائن!',
    likes: 88,
    commentsCount: 9,
    timestamp: 'منذ ٥ ساعات',
  },
  {
    id: '3',
    author: { id: 'u3', name: 'فاطمة العلي', avatarUrl: 'https://placehold.co/100x100/3b82f6/ffffff/png?text=F' },
    text: 'من يعرف أفضل مكان لبيع الحلويات الشرقية في المدينة؟ أبحث عن بقلاوة بالفستق.',
    likes: 210,
    commentsCount: 45,
    timestamp: 'يوم أمس',
  },
];

const HomeScreen: React.FC = () => {
  return (
    <div className="bg-slate-900">
      <CreatePost />
      <div className="pb-4">
        {mockPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;