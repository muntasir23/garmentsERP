import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const { toggleSidebar } = useSelector((state) => state.sidebar);

  return (
    <div className={`relative border top-0 ${toggleSidebar && "displayNone"}`}>
      <div
        className={`p-2 h-[100vh] border fixed md:absolute md:top-0 z-50 w-full ${
            toggleSidebar ? "sidebar" : "sidebar-open"
        }`}
      >
        <p className="mt-5 font-bold text-[20px]">Dashboard</p>
        <div className="mt-[40px]">
        </div>
      </div>
    </div>
  );
}
