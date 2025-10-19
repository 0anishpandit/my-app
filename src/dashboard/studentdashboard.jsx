import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import Sidebar from "../components/sidebar";
import TopHeader from "../components/topheader";
import { X } from "lucide-react";
import { useSidebarStore } from "../store/useSidebarStore";

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const { isCollapsed } = useSidebarStore(); 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const userData = {
    name: "Anish Pandit",
    regNo: "ST1234",
    course: "Bachelor of Technology CSE",
    schoolLoc: "Kathmandu",
    studentStatus: "Active",
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* === SIDEBAR SECTION === */}
      <div className="hidden md:block">
        <Sidebar role="students" onLogout={handleLogout} />
      </div>

      {/* === MOBILE OVERLAY === */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* === MOBILE DRAWER SIDEBAR === */}
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
        <Sidebar role="students" onLogout={handleLogout} />
      </div>

      {/* === MAIN CONTENT AREA === */}
      <div className="flex-1 flex flex-col w-full">
        {/* TOP HEADER */}
        <TopHeader
          role="students"
          userData={userData}
          onLogout={handleLogout}
          isSidebarCollapsed={isCollapsed}
        />

        {/* === MAIN DASHBOARD CONTENT === */}
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
