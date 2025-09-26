import React, { useState } from 'react';

interface ToggleSwitchProps {
  label: string;
  initialValue?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, initialValue = false }) => {
  const [isOn, setIsOn] = useState(initialValue);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="flex items-center justify-between bg-slate-800 p-3 rounded-lg">
      <label htmlFor={label} className="text-white font-semibold cursor-pointer">
        {label}
      </label>
      <button
        id={label}
        onClick={toggleSwitch}
        className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-cyan-500 ${
          isOn ? 'bg-cyan-600' : 'bg-slate-600'
        }`}
        role="switch"
        aria-checked={isOn}
      >
        <span
          className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${
            isOn ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
};

export default ToggleSwitch;
