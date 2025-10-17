import React, { useState } from "react";
import logo from '../assets/logo.jpg';
import { roles } from "../auth/permissions";

import {
  LayoutDashboard,
  FileText,
  CalendarCheck,
  Clock,
  ClipboardList,
  PenTool,
  User,
  BookOpen,
  Newspaper,
  Award,
  FilePlus,
  Home,
  Bus,
  Key,
  MessageCircle,
  Menu,
  LogOutIcon,
} from "lucide-react";

const Sidebar = ({ role = "students" }) => {
  const menuItems = [
    { icon: <LayoutDashboard size={16} />, label: "Dashboard" },
    { icon: <FileText size={16} />, label: "Fees & Receipts" },
    { icon: <CalendarCheck size={16} />, label: "Attendance Record" },
    { icon: <Clock size={16} />, label: "Daily Punch Record" },
    { icon: <ClipboardList size={16} />, label: "Leave Management" },
    { icon: <PenTool size={16} />, label: "Exam Form" },
    { icon: <User size={16} />, label: "Student Profile" },
    { icon: <BookOpen size={16} />, label: "Learning Management" },
    { icon: <Newspaper size={16} />, label: "News & Feeds" },
    { icon: <Award size={16} />, label: "Results" },
    { icon: <FilePlus size={16} />, label: "Request Form" },
    { icon: <Home size={16} />, label: "Apply for Hostel" },
    { icon: <Bus size={16} />, label: "Apply for Transport" },
    { icon: <Key size={16} />, label: "Change Password" },
    { icon: <MessageCircle size={16} />, label: "Feedback" },
    { icon: <LogOutIcon size={16} />, label: "Logout" },
  ];

  const allowedItems = menuItems.filter((item) =>
    roles[role]?.includes(item.label)
  );

  return (
    <div className="border-r border-black min-h-screen bg-blue-200
      md:w-56 w-16 relative transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-black">
        <img
          src={logo}
          alt="InnovNepal Logo"
          className="w-30 h-14 hidden md:block"
        />
        <button className="bg-white border border-gray-400 rounded p-1 hover:bg-gray-100 hover:scale-[1.1]">
          <Menu size={18} />
        </button>
      </div>

      {/* Menu Items */}
      <ul className="flex flex-col">
        {allowedItems.map((item, idx) => (
          <li
            key={idx}
            className="group relative flex items-center gap-2 border-b bg-blue-200
              pl-4 py-2 text-[13px] font-medium hover:bg-blue-400 hover:text-[14px] cursor-pointer"
          >
            {item.icon}

            {/* Full label for medium+ screens */}
            <span className="hidden md:inline">{item.label}</span>

            {/* Tooltip for small screens */}
            <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2
              bg-gray-800 text-white text-xs rounded px-2 py-1 whitespace-nowrap
              opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 md:hidden">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
