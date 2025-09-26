import React, { useState, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';

interface VerificationScreenProps {
  onVerificationSuccess: () => void;
}

const VerificationScreen: React.FC<VerificationScreenProps> = ({ onVerificationSuccess }) => {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus on next input
    if (element.nextSibling && element.value) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const verificationCode = otp.join("");
    // Simulate successful verification
    console.log('Verifying with code:', verificationCode);
    if (verificationCode.length === 6) {
      onVerificationSuccess();
    } else {
        alert("الرجاء إدخال الرمز المكون من 6 أرقام.");
    }
  };

  return (
    <div className="bg-slate-900 text-white h-full flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-sm text-center">
        <ShieldCheck size={60} className="mx-auto text-cyan-400" />
        <h1 className="text-3xl font-bold mt-4">التحقق من حسابك</h1>
        <p className="text-slate-400 mt-2 mb-8">
            لقد أرسلنا رمز تحقق مكون من 6 أرقام إلى بريدك الإلكتروني. الرجاء إدخاله أدناه.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 mb-6" dir="ltr">
            {otp.map((data, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  name="otp"
                  maxLength={1}
                  className="w-12 h-14 text-center text-2xl font-bold bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  // FIX: The ref callback for an element should not return a value. Added braces to ensure a void return.
                  ref={(ref) => {inputRefs.current[index] = ref}}
                />
              );
            })}
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
          >
            تحقق من الحساب
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-slate-400 text-sm">
            لم تستلم الرمز؟{' '}
            <button className="text-cyan-400 hover:text-cyan-300 font-semibold">
              إعادة الإرسال
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationScreen;
