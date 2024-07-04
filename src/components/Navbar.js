import "../styles/navbar.css";
import { Link } from "react-router-dom";
import linkedinLogo from "../images/Linkedin-logo-png.png";
import NavbarOption from "./NavbarOption.js";

import AvatarImg from "../images/man.png";

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

function Navbar() {
  return (
    <div className="navbar">
      <div className="nav_left">
        <img src={linkedinLogo} alt="logo" />

        <div className="searchbar">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="nav_right">
        <Link to="/" className="link">
          <NavbarOption Icon={HomeIcon} title="Home" />
        </Link>

        <NavbarOption Icon={SupervisorAccountIcon} title="My Network" />
        <NavbarOption Icon={BusinessCenterIcon} title="Jobs" />
        <NavbarOption Icon={ChatIcon} title="Messaging" />
        <NavbarOption Icon={NotificationsIcon} title="Notifications" />

        <Link to="/myprofile" className="link">
          <NavbarOption avatar={AvatarImg} title="me" />
        </Link>

        <NavbarOption Icon={AppsIcon} title="Work" />
        <NavbarOption Icon={OndemandVideoIcon} title="Learning" />
      </div>
    </div>
  );
}

export default Navbar;
