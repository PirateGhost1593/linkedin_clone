import "../styles/sidebar.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption";

import ProfileImg from "../images/man.png";
import TurnedInIcon from "@mui/icons-material/TurnedIn";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1653592328269-09c14b3628f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" src={ProfileImg} />
        <h2>Abdulai Sulaiman Bah</h2>
        <h4>abdulaisulaimanbah@gmail.com</h4>
        <h4>UX Designer</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed your Profile</p>
          <p className="sidebar_statNum">1001</p>
        </div>

        <div className="sidebar_stat">
          <p>
            Connections <br /> Manage your Network
          </p>
          <p className="sidebar_statNum">546</p>
        </div>
      </div>

      <div className="myItems">
        <InputOption Icon={TurnedInIcon} title="My Items" color="gray" />
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        <p className="sidebar_recentItem"># ReactJS</p>
        <p className="sidebar_recentItem"># TorrensUniversity</p>
        <p className="sidebar_recentItem"># SoftwareEngineering</p>
      </div>
      <div className="discover">
        <p>Discover more</p>
      </div>
    </div>
  );
}

export default Sidebar;
