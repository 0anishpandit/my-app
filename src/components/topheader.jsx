// TopHeader.jsx
import React from "react";
import { LogOut, Bell, MessageSquare, UserRoundSearch } from "lucide-react";
import { headerPermissions } from "../auth/headerPermissions";
import { useSidebarStore } from "../store/useSidebarStore";

const TopHeader = ({ role, onLogout, userData }) => {
  const config = headerPermissions[role] || [];
  const isCollapsed = useSidebarStore((state) => state.isCollapsed); // Correct Zustand usage

  // Dynamic Date & Time
  const currentDate = new Date();
  const dateStr = currentDate.toLocaleDateString("en-GB");
  const timeStr = currentDate.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  // Helper function to get field value dynamically
  const getFieldValue = (field) => {
    switch (field) {
      case "date":
        return dateStr;
      case "time":
        return timeStr;
      case "temp":
        return "40 °C";
      default:
        return userData[field] || "-";
    }
  };

  // Heights adjustments — make slightly smaller when collapsed
  const rowHeightLogo = isCollapsed ? "h-7.5" : "h-7.5"; // Row 1 & 2
  const rowHeightItem = isCollapsed ? "h-8.5" : "h-7.5"; // Row 3

  return (
    <header className="w-full bg-blue-200 text-black text-sm transition-all duration-300">
      {/* Row 1: Top bar */}
      <div className={`flex justify-between items-center px-4 border-b border-black transition-all duration-300 ${rowHeightLogo}`}>
        <div className="flex items-center gap-2 font-bold">
          <UserRoundSearch size={18} className="text-blue-600" />
          <span>
            <span className="text-orange-500">Innov</span>
            Nepal UMS (<span className="capitalize">{role}</span>)
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-1 hover:text-blue-600"><MessageSquare size={18} /></button>
          <button className="p-1 hover:text-blue-600"><Bell size={18} /></button>
          <button onClick={onLogout} className="font-semibold hover:text-red-600 transition">LogOut</button>
        </div>
      </div>

      {/* Row 2: Dynamic role-specific header */}
      <div className={`flex justify-between items-center px-4 border-b border-black transition-all duration-300 ${rowHeightLogo}`}>
        {config.includes("name") && (
          <div className="font-semibold">
            <span>{getFieldValue("name")}</span>{" "}
            {config.includes("regNo") && <span className="font-normal">(Reg. No. {getFieldValue("regNo")})</span>}
            {config.includes("parentName") && <span>{getFieldValue("parentName")}</span>}
            {config.includes("studentName") && <span className="font-normal">({getFieldValue("studentName")})</span>}
          </div>
        )}
        {config.includes("course") && <div className="text-right font-medium">{getFieldValue("course")}</div>}
        {config.includes("className") && <div className="text-right font-medium">{getFieldValue("className")}</div>}
      </div>

      {/* Row 3: Dynamic common section */}
      <div className={`flex justify-between items-center border-b border-black px-4 transition-all duration-300 ${rowHeightItem}`}>
        <div className="flex gap-6 flex-wrap">
          {config.map((field) => {
            if (["name", "regNo", "parentName", "studentName", "course", "className", "quote", "studentStatus"].includes(field)) {
              return null;
            }
            return (
              <span key={field}>
                <strong>{field.charAt(0).toUpperCase() + field.slice(1)}:</strong> {getFieldValue(field)}
              </span>
            );
          })}
        </div>

        {config.includes("quote") && (
          <div className="italic font-medium">
            <strong>Quote:</strong> ‘ Life Doesn’t give you multiple chance! ’
          </div>
        )}

        {config.includes("studentStatus") && (
          <div className="font-medium">
            <strong>Student Status:</strong> {getFieldValue("studentStatus")}
          </div>
        )}
      </div>
    </header>
  );
};

export default TopHeader;
