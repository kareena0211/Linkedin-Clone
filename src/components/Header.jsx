import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import MessageIcon from "@mui/icons-material/Message";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <div className="header__logo">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png"
              alt=""
            />
          </div>
          <div className="header__search">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={PeopleAltIcon} title="My Network" />
          <HeaderOption Icon={LocalMallIcon} title="Jobs" />
          <HeaderOption Icon={MessageIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notification" />
          <HeaderOption avatar={Avatar}  title="Kareena" />
        </div>
      </div>
    </>
  );
};

export default Header;
