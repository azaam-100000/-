import React, { useState, useEffect } from 'react';
import {
  Home,
  Store as StoreIcon,
  Users,
  DollarSign,
  MessageCircle,
  Bell,
  User,
  ArrowRight,
  Video,
  Phone,
  type LucideIcon,
} from 'lucide-react';
import HomeScreen from './components/HomeScreen';
import StoresScreen from './components/StoresScreen';
import GroupsScreen from './components/GroupsScreen';
import CurrenciesScreen from './components/CurrenciesScreen';
import MessagesScreen from './components/MessagesScreen';
import ChatScreen from './components/ChatScreen';
import NotificationsScreen from './components/NotificationsScreen';
import ProfileScreen from './components/ProfileScreen';
import StoreDetailsScreen from './components/StoreDetailsScreen';
import EditProfileScreen from './components/EditProfileScreen';
import CreateStoreScreen from './components/CreateStoreScreen';
import { ConversationPreview, Store } from './types';

type Screen = 
  | 'home' | 'stores' | 'groups' | 'currencies' | 'messages' | 'notifications' | 'profile' 
  | 'chat' | 'storeDetails' | 'editProfile' | 'createStore';
  
interface Tab {
  id: Screen;
  label: string;
  Icon: LucideIcon;
}

const TABS: Tab[] = [
  { id: 'home', label: 'الرئيسية', Icon: Home },
  { id: 'stores', label: 'المتاجر', Icon: StoreIcon },
  { id: 'groups', label: 'المجموعات', Icon: Users },
  { id: 'currencies', label: 'العملات', Icon: DollarSign },
  { id: 'messages', label: 'الرسائل', Icon: MessageCircle },
  { id: 'notifications', label: 'الإشعارات', Icon: Bell },
  { id: 'profile', label: 'الشخصي', Icon: User },
];

const App: React.FC = () => {
  const [navigationStack, setNavigationStack] = useState<Screen[]>(['home']);
  const currentScreen = navigationStack[navigationStack.length - 1];

  const [selectedConversation, setSelectedConversation] = useState<ConversationPreview | null>(null);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);

  const navigateTo = (screen: Screen) => {
    setNavigationStack(prev => [...prev, screen]);
  };

  const goBack = () => {
    if (navigationStack.length > 1) {
      setNavigationStack(prev => prev.slice(0, -1));
    }
  };
  
  const navigateTab = (screen: Screen) => {
     setNavigationStack([screen]);
  };

  const handleSelectConversation = (conversation: ConversationPreview) => {
    setSelectedConversation(conversation);
    navigateTo('chat');
  };
  
  const handleSelectStore = (store: Store) => {
    setSelectedStore(store);
    navigateTo('storeDetails');
  };

  const renderHeader = () => {
    const isMainTab = TABS.some(t => t.id === currentScreen);
    let title = '';

    if (currentScreen === 'chat' && selectedConversation) {
      return (
        <header className="bg-slate-800/80 backdrop-blur-sm shadow-md sticky top-0 z-10 flex items-center p-2 justify-between">
          <div className="flex items-center space-x-2 space-x-reverse">
            <button onClick={goBack} className="p-2 text-white hover:bg-slate-700 rounded-full">
              <ArrowRight size={22} />
            </button>
            <img src={selectedConversation.user.avatarUrl} alt={selectedConversation.user.name} className="w-10 h-10 rounded-full" />
            <div>
              <h1 className="text-lg font-bold text-white">{selectedConversation.user.name}</h1>
              <p className="text-xs text-green-400">متصل الآن</p>
            </div>
          </div>
          <div className="flex items-center space-x-1 space-x-reverse">
            <button className="p-2 text-white hover:bg-slate-700 rounded-full" aria-label="Video Call"><Video size={22} /></button>
            <button className="p-2 text-white hover:bg-slate-700 rounded-full" aria-label="Voice Call"><Phone size={22} /></button>
          </div>
        </header>
      );
    }
    
    if (isMainTab) {
        title = TABS.find(tab => tab.id === currentScreen)?.label || '';
        return (
            <header className="bg-slate-800/80 backdrop-blur-sm shadow-md sticky top-0 z-10 flex items-center p-4">
                <h1 className="text-xl font-bold text-white">{title}</h1>
            </header>
        );
    }
    
    // Header for sub-screens
    switch(currentScreen) {
        case 'storeDetails': title = selectedStore?.name || 'تفاصيل المتجر'; break;
        case 'editProfile': title = 'تعديل الملف الشخصي'; break;
        case 'createStore': title = 'إنشاء متجر جديد'; break;
    }
    
    return (
        <header className="bg-slate-800/80 backdrop-blur-sm shadow-md sticky top-0 z-10 flex items-center p-2 justify-between">
            <div className="flex items-center">
                 <button onClick={goBack} className="p-2 text-white hover:bg-slate-700 rounded-full">
                    <ArrowRight size={22} />
                 </button>
                 <h1 className="text-lg font-bold text-white mr-2">{title}</h1>
            </div>
        </header>
    );

  };
  
  const renderContent = () => {
    switch(currentScreen) {
      case 'home': return <HomeScreen />;
      case 'stores': return <StoresScreen onStoreSelect={handleSelectStore} onCreateStore={() => navigateTo('createStore')} />;
      case 'groups': return <GroupsScreen />;
      case 'currencies': return <CurrenciesScreen />;
      case 'messages': return <MessagesScreen onConversationSelect={handleSelectConversation} />;
      case 'notifications': return <NotificationsScreen />;
      case 'profile': return <ProfileScreen onEditProfile={() => navigateTo('editProfile')} />;
      // Sub-screens
      case 'chat': return selectedConversation ? <ChatScreen conversation={selectedConversation} /> : <div />;
      case 'storeDetails': return selectedStore ? <StoreDetailsScreen store={selectedStore} /> : <div />;
      case 'editProfile': return <EditProfileScreen onSave={goBack} />;
      case 'createStore': return <CreateStoreScreen onSave={goBack} />;
      default:
        return <div />;
    }
  };
  
  const isMainTab = TABS.some(t => t.id === currentScreen);

  return (
    <div className="bg-slate-900 text-white h-full flex flex-col">
      {renderHeader()}
      
      <main className="flex-grow overflow-y-auto">
        {renderContent()}
      </main>

      {isMainTab && (
          <nav className="bg-slate-800 border-t border-slate-700 grid grid-cols-7 gap-1 p-2">
            {TABS.map(({ id, label, Icon }) => {
              const isActive = currentScreen === id;
              return (
                <button
                  key={id}
                  onClick={() => navigateTab(id)}
                  className={`flex flex-col items-center justify-center p-2 rounded-lg transition-colors duration-200 ${
                    isActive ? 'bg-cyan-500/20 text-cyan-400' : 'text-slate-400 hover:bg-slate-700'
                  }`}
                  aria-label={label}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon size={24} />
                  <span className="text-xs mt-1">{label}</span>
                </button>
              );
            })}
          </nav>
      )}
    </div>
  );
};

export default App;
