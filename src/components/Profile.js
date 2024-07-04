import "../styles/profile.css";

import ProfileRight from "./ProfileLeft.js";
import ProfileLeft from "./ProfileRight.js";

function Profile() {
  return (
    <div className="profile+footer">
      <div className="profile">
        <ProfileRight />

        <ProfileLeft />
      </div>
      <div className="footer_profile">
        <div className="footer_header">
          <img
            src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png"
            alt=""
          />
        </div>
        <div className="footers">
          <div className="footer_1">
            <a href="#top">About</a>
            <a href="#top">Communication Guidelines</a>
            <a href="#top">Privacy & Terms</a>
            <a href="#top">Sales Solutions</a>
            <a href="#top">Safety Center</a>
            <br />
          </div>

          <div className="footer_2">
            <a href="#top">Accessibility</a>
            <a href="#top">Careers</a>
            <a href="#top">Ad Choices</a>
            <a href="#top">Mobile</a>
          </div>

          <div className="footer_3">
            <a href="#top">Talent Solutions</a>
            <a href="#top">Market Solutions</a>
            <a href="#top">Advertising</a>
            <a href="#top">Small Business</a>
            <br />
          </div>
        </div>
        <br />
        <a href="#top">© LinkedIn Corporation 2022</a>
      </div>
    </div>
  );
}

export default Profile;
