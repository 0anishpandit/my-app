import React from "react";
import { LogOut, Bell, MessageSquare, UserRoundSearch } from "lucide-react";

const Header = ({ role, onLogout }) => {
  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center py-2 px-4 bg-blue-600 text-white shadow border-b border-white">
      {/* Left side: UMS title */}
      <div className="flex flex-col md:flex-row items-center mb-2 md:mb-0 space-y-1 md:space-y-0 md:space-x-2">
        <h1 className="flex items-center text-lg md:text-xl font-bold text-orange-400">
          <UserRoundSearch className="mr-2" />Innov
        </h1>
        <h1 className="text-lg md:text-xl font-bold">Nepal</h1>
        <h1 className="text-sm md:text-base font-semibold underline">
          UMS (Unified Management System)
        </h1>
      </div>

      {/* Right side: role label + notifications + logout */}
      <div className="flex items-center gap-3 md:gap-4 flex-wrap">
        {/* Role label */}
        <span className="text-sm md:text-base font-medium uppercase">{role} student</span>

        {/* Notifications */}
        <button className="relative p-2 hover:bg-blue-500 rounded-full">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="relative p-2 hover:bg-blue-500 rounded-full">
          <Bell className="w-5 h-5" />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        </button>


        {/* Logout Logic */}
        <button
          onClick={onLogout}   // call the logout function from Zustand
          className="flex items-center gap-1 bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm md:text-base transition duration-200"
           >
          <LogOut className="w-4 h-4 md:w-5 md:h-5" />   {/* icon size adjusts on larger screens */}
          <span className="hidden sm:inline">Logout</span> {/* hide text on very small screens */}
        </button>

      </div>
    </header>
  );
};

export default Header;
