import React from 'react';
import { Leaf, Sprout, Trees } from 'lucide-react';

export const FloatingLeaves = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Leaf */}
      <div className="absolute -top-6 left-10 text-[#5E8C61]/10 animate-float-leaf text-7xl sm:text-9xl">
        <Leaf className="w-24 h-24 sm:w-32 sm:h-32" />
      </div>

      {/* Top Right Floating Leaf */}
      <div className="absolute top-1/4 -right-12 text-[#A8C3A0]/15 animate-float-leaf-delayed text-8xl sm:text-[12rem]">
        <Sprout className="w-32 h-32 sm:w-48 sm:h-48" />
      </div>

      {/* Bottom Left Leaf */}
      <div className="absolute bottom-20 left-4 text-[#173F2A]/10 animate-float-leaf text-8xl">
        <Trees className="w-28 h-28 sm:w-36 sm:h-36" />
      </div>
    </div>
  );
};
