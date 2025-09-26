import React, { useState, useRef, useEffect } from 'react';
import { ConversationPreview, Message } from '../types';
import MessageBubble from './MessageBubble';
import { Send, Mic } from 'lucide-react';

interface ChatScreenProps {
  conversation: ConversationPreview;
}

// بيانات رسائل وهمية للمحادثة
const mockMessages: Message[] = [
    { id: 'm1', text: 'السلام عليكم، هل ما زالت هذه القطعة متوفرة؟', timestamp: '15:20', senderId: 'currentUser' },
    { id: 'm2', text: 'وعليكم السلام', timestamp: '15:21', senderId: 'u2' },
    { id: 'm3', text: 'أهلاً بك، نعم بالتأكيد، التشكيلة الجديدة متوفرة بجميع المقاسات.', timestamp: '15:23', senderId: 'u2' },
];

const ChatScreen: React.FC<ChatScreenProps> = ({ conversation }) => {
    const [messages, setMessages] = useState<Message[]>(mockMessages);
    const [newMessage, setNewMessage] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (newMessage.trim() === '') return;

        const message: Message = {
            id: `m${Date.now()}`,
            text: newMessage,
            timestamp: new Date().toLocaleTimeString('ar-EG', { hour: '2-digit', minute: '2-digit' }),
            senderId: 'currentUser',
        };

        setMessages([...messages, message]);
        setNewMessage('');
    };

    return (
        <div className="h-full flex flex-col bg-slate-900">
            {/* Messages Area */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4">
                {messages.map(msg => (
                    <MessageBubble key={msg.id} message={msg} isSender={msg.senderId === 'currentUser'} />
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Message Input Area */}
            <div className="bg-slate-800 p-2 border-t border-slate-700 sticky bottom-0">
                <form onSubmit={handleSendMessage} className="flex items-center space-x-2 space-x-reverse">
                    <button type="button" className="p-3 text-slate-400 hover:text-cyan-400 rounded-full hover:bg-slate-700">
                        <Mic size={22}/>
                    </button>
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="اكتب رسالة..."
                        className="flex-1 bg-slate-700 rounded-full py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        autoComplete="off"
                    />
                    <button type="submit" className="p-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 disabled:bg-slate-600" disabled={!newMessage.trim()}>
                        <Send size={22}/>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChatScreen;
