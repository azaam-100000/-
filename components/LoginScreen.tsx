import React, { useState } from 'react';
import { Mail, Lock, Building2, Loader } from 'lucide-react';
import { login, signInWithGoogle } from '../services/authService';

interface LoginScreenProps {
  onLoginSuccess: () => void;
  onSwitchToSignUp: () => void;
}

// Google Icon SVG Component
const GoogleIcon: React.FC = () => (
    <svg className="w-5 h-5 ml-3" viewBox="0 0 48 48">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.021,35.591,44,30.033,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
);

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess, onSwitchToSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(email, password);
      onLoginSuccess();
    } catch (err: any) {
      if (err.code === 'auth/invalid-credential' || err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        setError('البريد الإلكتروني أو كلمة المرور غير صحيحة.');
      } else {
        setError('حدث خطأ ما. يرجى المحاولة مرة أخرى.');
      }
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
      onLoginSuccess();
    } catch (err: any) {
      setError('فشل تسجيل الدخول باستخدام جوجل. يرجى المحاولة مرة أخرى.');
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
            <h1 className="text-4xl font-bold mt-4">سوق محافظة الرقة</h1>
            <p className="text-slate-400 mt-2">مرحباً بك مجدداً! قم بتسجيل الدخول للمتابعة.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {loading ? <Loader className="animate-spin" /> : 'تسجيل الدخول'}
          </button>
        </form>

        <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-slate-700"></div>
            <span className="mx-4 text-slate-500 text-sm">أو</span>
            <div className="flex-grow border-t border-slate-700"></div>
        </div>
        
        <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-4 rounded-lg transition-colors flex items-center justify-center border border-slate-600 disabled:bg-slate-600 disabled:cursor-not-allowed"
        >
            <GoogleIcon />
            <span>تسجيل الدخول باستخدام جوجل</span>
        </button>

        <div className="text-center mt-6">
          <button onClick={onSwitchToSignUp} className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
            ليس لديك حساب؟ إنشاء حساب جديد
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;