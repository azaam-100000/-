// This file will be used for shared types as the application grows.

export interface UserProfile {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline?: boolean;
}

export interface Post {
  id: string;
  author: UserProfile;
  text: string;
  imageUrl?: string;
  likes: number;
  commentsCount: number;
  timestamp: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export interface Store {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  rating: number; // from 0 to 5
  followersCount: number;
  description?: string;
  location?: string;
  products?: Product[];
}

export interface Group {
  id: string;
  name: string;
  imageUrl: string;
  memberCount: number;
  privacy: 'public' | 'private';
}

export interface Currency {
  code: 'USD' | 'EUR' | 'TRY';
  name: string;
  flagUrl: string;
  price: number;
  change: number; // positive or negative percentage
}

export interface ConversationPreview {
  id:string;
  user: UserProfile;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
}

export interface Message {
  id: string;
  text: string;
  timestamp: string;
  senderId: string; // 'currentUser' or other user's ID
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'system';
  user: UserProfile;
  content: string;
  timestamp: string;
  isRead: boolean;
}