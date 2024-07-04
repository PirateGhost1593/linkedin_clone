import "../styles/profileRight.css";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";

function ProfileRight() {
  return (
    <div className="right">
      <div className="right_top">
        <div className="top_1">
          <h4>Edit public profile & URL</h4>
          <ContactSupportIcon />
        </div>
        <div className="top_2">
          <h4>Add Profile in another language</h4>
          <ContactSupportIcon />
        </div>
      </div>

      <div className="right_bottom">
        <div className="bottom_top">
          <h5>Promoted</h5>
          <MoreHorizIcon />
        </div>
        <div className="bottom_body">
          <div className="body_1">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3030/3030021.png"
              alt=""
            />
            <p>Work from Home 2022</p>
            <p className="text">
              We provide online work with free schedule. With or without
              experience
            </p>
            <a href="top#">Learn more</a>
          </div>
          <div className="body_2">
            <img
              src="http://atlas-content-cdn.pixelsquid.com/stock-images/laptop-lXNked7-600.jpg"
              alt=""
            />
            <p>Job from home online</p>
            <p className="text">
              We are looking for people with and without experience to work
              remotely
            </p>
            <a href="top#">Learn more</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileRight;
