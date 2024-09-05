import React, { useState } from "react";
import Header from "../Header/Header";
import SideBar from "./SideBar";
import "./Admin.scss";
import { FaBars, FaHeart } from "react-icons/fa";
import { Outlet } from "react-router-dom";

export default function Admin(props) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <SideBar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <FaBars
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          />
        </div>
        <div className="admin-main">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
