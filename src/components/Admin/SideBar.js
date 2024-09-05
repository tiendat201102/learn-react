import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { MdDashboard } from "react-icons/md";


import sidebarBg from "../../assests/bg2.jpg";
import { Link } from "react-router-dom";

export default function SideBar({
  image,
  collapsed,
  toggled,
  handleToggleSidebar,
}) {
  return (
    <ProSidebar
      image={sidebarBg}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <DiReact size={"3em"} color="00bfff"/>
          Tien Dat
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<MdDashboard />}
            // suffix={<span className="badge red">NEW</span>}
          >
            Dashboard
            <Link to={"/admins"}/>
          </MenuItem>
          {/* <MenuItem icon={<FaGem />}>components</MenuItem> */}
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            icon={<FaGem />}
            title="Features"
          >
            <MenuItem>
            Quản lý user
            <Link to={"/admins/manage-users"}/>
            </MenuItem>
            <MenuItem>Quản lý bài quiz</MenuItem>
            <MenuItem>QUản lý câu hỏi</MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>
      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/tiendat201102"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            >
              Tiến Đạt
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
}