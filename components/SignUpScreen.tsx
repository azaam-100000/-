import React, { useState } from 'react';
import { User, Mail, Lock, Building2, Loader } from 'lucide-react';
import { signUp } from '../services/authService';

interface SignUpScreenProps {
  onSignUpSuccess: () => void;
  onSwitchToLogin: () => void;
}

const SignUpScreen: React.FC<SignUpScreenProps> = ({ onSignUpSuccess, onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين!");
      return;
    }
    if (password.length < 6) {
      setError("يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.");
      return;
    }
    
    setLoading(true);
    try {
      await signUp(email, password);
      // We don't store the name in Firebase Auth, this would be stored in a database (e.g., Firestore) later.
      console.log('User signed up with email:', email);
      onSignUpSuccess();
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('هذا البريد الإلكتروني مستخدم بالفعل.');
      } else if (err.code === 'auth/invalid-email') {
        setError('البريد الإلكتروني غير صالح.');
      } else {
        setError('حدث خطأ ما. يرجى المحاولة مرة أخرى.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 text-white h-full flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
            <Building2 size={60} className="mx-auto text-cyan-400" />
            <h1 className="text-4xl font-bold mt-4">إنشاء حساب جديد</h1>
            <p className="text-slate-400 mt-2">انضم إلى مجتمع سوق الرقة الآن.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <User size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="الاسم الكامل"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="relative">
            <Mail size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="relative">
            <Lock size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              placeholder="كلمة المرور (6 أحرف على الأقل)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
           <div className="relative">
            <Lock size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="password"
              placeholder="تأكيد كلمة المرور"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full bg-slate-800 border border-slate-700 rounded-lg py-3 pr-10 pl-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center disabled:bg-slate-600 disabled:cursor-not-allowed"
          >
             {loading ? <Loader className="animate-spin" /> : 'إنشاء الحساب'}
          </button>
        </form>

        <div className="text-center mt-6">
          <button onClick={onSwitchToLogin} className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
            لديك حساب بالفعل؟ تسجيل الدخول
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;