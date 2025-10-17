import React from "react";
import { CircleArrowRight } from 'lucide-react';

const MiddleHeader = () => {
  return (
    <header className="w-full flex justify-between items-center py-1 bg-blue-600 text-white shadow">
      {/* Left side: UMS title */}
      <div className="flex">
        <h1 className="flex text-xl font-bold uppercase ml-4 mr-1"><CircleArrowRight  className="text-xl mr-3 text-white"/>anish pandit</h1>
        <h1 className="text-xl">( Reg. No. <p className="inline">11212799 )</p></h1>
        <p className="text-xl ml-195"> Bachelor of Technology Computer Science Engineering</p>
      </div>
    </header>
  );
};

export default MiddleHeader;
