import React from "react";
import "./user.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import EmailIcon from "@mui/icons-material/Email";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PublishIcon from "@mui/icons-material/Publish";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser"  style={{textDecoration:"none"}}>
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://duet-cdn.vox-cdn.com/thumbor/0x0:6000x4000/640x427/filters:focal(1788x2183:1789x2184):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19536927/TheWitcher_101_Unit_06900_RT.fk3ph4dhp.jpg"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Ammat zuberi</span>
              <span className="userShowUserTitle">React Developer </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">ammatzuberg2</span>
            </div>
            <div className="userShowInfo">
              <CalendarTodayIcon className="userShowIcon" />
              <span className="userShowInfoTitle">10.12.1547</span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroidIcon className="userShowIcon" />
              <span className="userShowInfoTitle">+1245812155</span>
            </div>

            <div className="userShowInfo">
              <EmailIcon className="userShowIcon" />
              <span className="userShowInfoTitle">ammatzuberg2@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <FmdGoodIcon className="userShowIcon" />
              <span className="userShowInfoTitle">New York</span>
            </div>
          </div>
        </div>

        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="ammatzuberig2"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Ammat Zuberi"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="ammatzuberig2gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+12454425465"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="USA"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://duet-cdn.vox-cdn.com/thumbor/0x0:6000x4000/640x427/filters:focal(1788x2183:1789x2184):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/19536927/TheWitcher_101_Unit_06900_RT.fk3ph4dhp.jpg"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <PublishIcon className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
