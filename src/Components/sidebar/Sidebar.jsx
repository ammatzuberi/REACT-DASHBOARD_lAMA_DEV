import React from "react";
import "./sidebar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import InventoryIcon from "@mui/icons-material/Inventory";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import VideoLabelOutlinedIcon from "@mui/icons-material/VideoLabelOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ReportIcon from "@mui/icons-material/Report";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Userlist from "../../Pages/UserList/Userlist";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebatList">
              <Link to="/ " style={{textDecoration:"none" ,color:"inherit"}}>
            <li className="sidebarlistItem  active">
              <LineStyleIcon className="sidebarIcon" />
              Home
            </li>
              </Link>
            <li className="sidebarlistItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarlistItem">
              <TrendingUpIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebatList">
            <Link to="/users" className="Link">
              <li className="sidebarlistItem ">
                <PersonIcon className="sidebarIcon" /> Users
              </li>
            </Link>
            <Link to="/product" className="Link">
              <li className="sidebarlistItem">
                <InventoryIcon className="sidebarIcon" />
                Products
              </li>
            </Link>
            <li className="sidebarlistItem">
              <AttachMoneyOutlinedIcon className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarlistItem">
              <BarChartOutlinedIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notification</h3>
          <ul className="sidebatList">
            <li className="sidebarlistItem ">
              <MailOutlinedIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarlistItem">
              <VideoLabelOutlinedIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarlistItem">
              <ChatBubbleOutlineOutlinedIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebatList">
            <li className="sidebarlistItem ">
              <ManageAccountsOutlinedIcon className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarlistItem">
              <TimelineIcon className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarlistItem">
              <ReportIcon className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
