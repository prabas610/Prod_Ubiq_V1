import React from 'react';

const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-[-2]">
      <div className="absolute inset-0 bg-[#0a192f]" />
      <div className="absolute inset-0">
        {/* Horizontal lines */}
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0',
        }} />
        
        {/* Vertical lines */}
        <div className="h-full w-full absolute top-0 left-0" style={{
          backgroundImage: `linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.05) 25%, rgba(0, 255, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0',
        }} />
      </div>
      
      {/* Glowing dots */}
      <div className="absolute inset-0">
        <div className="h-full w-full" style={{
          backgroundImage: `radial-gradient(circle, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }} />
      </div>
      
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `linear-gradient(45deg, #00ffff, #0080ff, #8000ff, #ff00ff)`,
        backgroundSize: '400% 400%',
        animation: 'gradientBG 15s ease infinite',
      }} />
    </div>
  );
};

export default GridBackground;