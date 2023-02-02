import React from "react";
import "./topbar.css";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import img from  "../.././assets/pexels-mohamed-abdelghaffar-771742.jpg"
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
      

          <div className="logo">EESPL</div>
        
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <NotificationsIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconsContainer">
            <LanguageIcon />
            <span className="topIconBadge">7</span>
          </div>
          <div className="topbarIconsContainer">
            <SettingsIcon />
          </div>
          <img src={img} alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
