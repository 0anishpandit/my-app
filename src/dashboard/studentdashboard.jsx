// StudentDashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import Sidebar from "../components/sidebar";
import Header from "../components/topheader";
import MiddleHeader from "../components/middleheader";
import { Menu, X } from "lucide-react";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { logout, email } = useAuthStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    logout();  // clears Zustand store (email, password, isLoggedIn)
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar for large screens */}
      <div className="hidden md:block">
        <Sidebar role="students" />
      </div>

      {/* Sidebar overlay for small screens */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}

      {/* Sidebar Drawer (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-bold text-lg text-blue-600">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <Sidebar role="students" />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col w-full">
        {/* Top Header */}
        <div className="flex justify-between items-center p-4 bg-blue-600 text-white shadow-md">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden focus:outline-none"
          >
            <Menu size={28} />
          </button>

          {/* Header receives the logout function */}
          <Header role="students" onLogout={handleLogout} />
          
          {/* Main Header */}
        </div>

                {/* Main Dashboard Content */}
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            Welcome to your Student Dashboard 🎓
          </h2>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Manage your schedule, assignments, and notifications here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
