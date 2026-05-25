import React from 'react';

export default function RobotDancer() {
  return (
    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes robotBounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-15px) rotate(5deg); }
          50% { transform: translateY(0) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes armMove {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(45deg); }
        }
        @keyframes headBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .robot-body {
          animation: robotBounce 1s infinite cubic-bezier(0.45, 0.05, 0.55, 0.95);
        }
        .robot-arm-left {
          transform-origin: top right;
          animation: armMove 0.5s infinite alternate ease-in-out;
        }
        .robot-arm-right {
          transform-origin: top left;
          animation: armMove 0.5s infinite alternate-reverse ease-in-out;
        }
        .robot-head {
          animation: headBob 0.5s infinite alternate ease-in-out;
        }
      `}} />
      
      <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="robot-body drop-shadow-2xl">
        {/* Head */}
        <g className="robot-head">
          <rect x="60" y="30" width="80" height="60" rx="15" fill="#EEF2FF" stroke="#6366F1" strokeWidth="4"/>
          <rect x="75" y="45" width="50" height="25" rx="8" fill="#1E1B4B"/>
          <circle cx="88" cy="57" r="4" fill="#818CF8" className="animate-pulse"/>
          <circle cx="112" cy="57" r="4" fill="#818CF8" className="animate-pulse"/>
          <rect x="90" y="20" width="20" height="10" rx="2" fill="#6366F1"/>
          <circle cx="100" cy="15" r="5" fill="#F43F5E" className="animate-ping"/>
        </g>
        
        {/* Neck */}
        <rect x="90" y="90" width="20" height="10" fill="#C7D2FE"/>
        
        {/* Body */}
        <rect x="50" y="100" width="100" height="70" rx="20" fill="#EEF2FF" stroke="#6366F1" strokeWidth="4"/>
        <rect x="70" y="115" width="60" height="30" rx="5" fill="#C7D2FE" opacity="0.5"/>
        <circle cx="80" cy="130" r="5" fill="#F43F5E"/>
        <circle cx="100" cy="130" r="5" fill="#10B981"/>
        <circle cx="120" cy="130" r="5" fill="#3B82F6"/>
        
        {/* Arms */}
        <rect x="25" y="105" width="25" height="15" rx="7" fill="#6366F1" className="robot-arm-left"/>
        <rect x="150" y="105" width="25" height="15" rx="7" fill="#6366F1" className="robot-arm-right"/>
        
        {/* Legs */}
        <rect x="70" y="170" width="20" height="25" rx="10" fill="#6366F1"/>
        <rect x="110" y="170" width="20" height="25" rx="10" fill="#6366F1"/>
      </svg>
    </div>
  );
}
