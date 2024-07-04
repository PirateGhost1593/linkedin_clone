import "../styles/profileLeft.css";

import { Avatar } from "@material-ui/core";
import CreateIcon from "@mui/icons-material/Create";
import AddIcon from "@mui/icons-material/Add";
import AvatarImg from "../images/man.png";

function ProfileLeft() {
  return (
    <div className="profiles">
      <div className="profile_left">
        <img
          src="https://images.unsplash.com/photo-1653592328269-09c14b3628f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <CreateIcon className="icon" />
        <div className="profile_info">
          <Avatar className="avatar" src={AvatarImg} />
          <div className="nameSchool">
            <h2>Abdulai Sulaiman Bah</h2>
            <div className="school">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA1VBMVEX+UQL/////UQD/TgD7UgT7///6SwDvsZDeaTT//PX//fr6/fv4/vz2///vyqz//fzrSAD9/P/7//jw17367dfniVr638byvJ/0RQDlSgDs0LX7VADcg13vybD7QwDvvKL67N/aTAD63sv6/vPyvpnlYxrruY/yqozws4ftsozzr4Xwo3frTALjZkP/+PPiaCT8/uL//O763rz6683aiVHoPQDv//LwWAH9OgDvzaLspmboXAPuxrPyvonuwabu5ODl2MLpmnfguKXkURXgfEDy3tTww7iODXzaAAAEoUlEQVR4nO3dC3faNgCGYd/kxpIVW17W2XUhULqu3bx2dM1oNka7S/v/f9IkLjndsdEOmrAFfM9pcwiJEr+RiSEksucBAAAAAAAAAAAAAAAAgEWBg1AIFyd20DiOre2qwbcvvnv5yDGvvn/1Q2MrMfzxtc+J7xZCyOPKWuGbn4qZYG6Zz/jj3Frh1VwIkW1Q9Z8OeUFdpPIS+WSzMEsLQrKMuCETKROz2VuLhQklCSGU0OHJyaNMFKmg7JndQsYSzoeevK2UZIzYL0wS/vONGyZcZPYLaULou9wJd7e/pML+XlqIgn4dDn1/ey1+7s98+b3U5tHiodAb+oGG/PyeKiTF8QqHTdwViiMWDhrYS6E35IPPXWFBjng7HJos/MYvGAoPgsJ+odAECvuFQhMo7BcKTaCwXyg0gcJ+odDEfxbWXhjafuQfhKEX1V1vGKAw9Op6Edm2WESdn26IwsgLx+PStvfjsDNxkMJ6+uJ+ZNny/tfoN1cKvXA6Sa0/ycuv3ztTGIXTG/tPgpPlOOr6bOdUWJ59YXzuhSM39lL1Y3ZVyLIOcjszStbxRGQFVb/toH7lQTxkZMTvGqhGUrmXdhX0XijJwglJO3FGCd0WpnR9DS9STneFNGVMXsV5x9Bl7sTxcP18kJxD3r2rJZz7bFModu8i82i2vcyzbN/+zUdu3A5VYV1Pf19dd1suVx/U9jIh0ol8fbW6Xl2Psl3hx1v1eqfVH6EzhZ4X53n3Xa+8Ke/+VCkpEfMnVZOX8j3z6mEvfZc3Vamem+8Y+lfoxO1wV7mHvGtZ3qoUkQr2JK/V1yMIq2Szs/r0aRjX+345YM/WDFa4Z2wdf1m4mZSwmm0Lk3XhYVszyP3Ssy+8hDnc++S+/HY47ihMTq1QM7S78OTmUDMUhShsQ6EJFOqGovBcC3HE10GhCRTqhqIQhW0oNIFC3VAc8VHYhkITKNQNRSEK21BoAkd83dBLnUMU6qDQBAp1Q1GIwrbTKMQRXweFJlCoG4pCFLah0AQKdUNxxEdhGwpNoFA3FIUobEOhCRzxdUMvdQ5RqINCEyjUDUUhCttOoxBHfB0UmkChbujZF3rRefyls8aZ/C23xqUWnsnxMFCL88RevPIJYYSImSqUV4ZyDgvmM0Z8+jSOTrlQLewSR/HLycbNqoxUdug1N9urJn+ffGEQNd5iWlXVtJpOmyjaLL8QVTuLOOhchEb3Yd0qDBfxZikk+bJ+uP5f73Po1jhWGC/Gi/UkRet/6kUg37Be+nH9oQ+dQacK25tmhcOFlqDQBAr7hUITKOwXCk2gsF8oNIHCfgVeKQuPcA7LmSOF8gFl+dwvxLEKjc/MaFN8xMLY+hkQDuYF0THnsBz6RLm5WqT37jiFmZ/OP33lhg/qDOHWCykritdDn656K8t84lsvTIqUk8QNvixk9udQffG4G+SWWDziq9Wpr5Kk8NUC+ENP3pbcRSkT9K2VQnX8Ca/mbLZn4fzBcEEsFr6ZE75bJ94VlHE7e+mm8P7zaN/C+cMZPWpsFQZRU1bWz3b0P+VNk8cWAr/IdJG1QgAAAAAAAAAAAAAAAAAAACf8A6iZt0t2lguwAAAAAElFTkSuQmCC"
                alt=""
              />
              <h2>Torrens University Australia</h2>
            </div>
          </div>
          <h4>abdulaisulaimanbah@gmail.com</h4>
          <h4>UX Designer</h4>
          <p>
            Holyrod, New South Wales, Australia <a href="#top">Contact Info</a>
          </p>
          <a href="#top">28 Connections</a>

          <div className="profile_buttons">
            <button type="submit" className="open">
              Open to
            </button>
            <button type="submit" className="add">
              Add Profile Section
            </button>
            <button type="submit" className="more">
              More
            </button>
          </div>
        </div>
      </div>

      <div className="experience">
        <div className="exp_head">
          <h2>Experience</h2>
          <div>
            <AddIcon className="icons" />
            <CreateIcon />
          </div>
        </div>

        <div className="exp_body">
          <img
            src="https://w7.pngwing.com/pngs/281/196/png-transparent-typewriter-paper-logo-computer-icons-others-miscellaneous-text-logo.png"
            alt=""
          />
          <div className="body">
            <h4>Typist</h4>
            <p>Bachelor's Degree - User Experience and Web Design</p>
            <p>August 2014 - September 2020 - 6 Years 1 Month</p>
            <br />
            <p>
              <b>Skills:</b> Microsoft Office · WordPress · Data Collection ·
              Data Entry · Software Installation · HTML · Cascading Style Sheets
              (CSS)
            </p>
          </div>
        </div>
      </div>

      <div className="education">
        <div className="exp_head">
          <h2>Education</h2>
          <div>
            <AddIcon className="icons" />
            <CreateIcon />
          </div>
        </div>

        <div className="edu_body">
          <div className="edu_body_1">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA1VBMVEX+UQL/////UQD/TgD7UgT7///6SwDvsZDeaTT//PX//fr6/fv4/vz2///vyqz//fzrSAD9/P/7//jw17367dfniVr638byvJ/0RQDlSgDs0LX7VADcg13vybD7QwDvvKL67N/aTAD63sv6/vPyvpnlYxrruY/yqozws4ftsozzr4Xwo3frTALjZkP/+PPiaCT8/uL//O763rz6683aiVHoPQDv//LwWAH9OgDvzaLspmboXAPuxrPyvonuwabu5ODl2MLpmnfguKXkURXgfEDy3tTww7iODXzaAAAEoUlEQVR4nO3dC3faNgCGYd/kxpIVW17W2XUhULqu3bx2dM1oNka7S/v/f9IkLjndsdEOmrAFfM9pcwiJEr+RiSEksucBAAAAAAAAAAAAAAAAgEWBg1AIFyd20DiOre2qwbcvvnv5yDGvvn/1Q2MrMfzxtc+J7xZCyOPKWuGbn4qZYG6Zz/jj3Frh1VwIkW1Q9Z8OeUFdpPIS+WSzMEsLQrKMuCETKROz2VuLhQklCSGU0OHJyaNMFKmg7JndQsYSzoeevK2UZIzYL0wS/vONGyZcZPYLaULou9wJd7e/pML+XlqIgn4dDn1/ey1+7s98+b3U5tHiodAb+oGG/PyeKiTF8QqHTdwViiMWDhrYS6E35IPPXWFBjng7HJos/MYvGAoPgsJ+odAECvuFQhMo7BcKTaCwXyg0gcJ+odDEfxbWXhjafuQfhKEX1V1vGKAw9Op6Edm2WESdn26IwsgLx+PStvfjsDNxkMJ6+uJ+ZNny/tfoN1cKvXA6Sa0/ycuv3ztTGIXTG/tPgpPlOOr6bOdUWJ59YXzuhSM39lL1Y3ZVyLIOcjszStbxRGQFVb/toH7lQTxkZMTvGqhGUrmXdhX0XijJwglJO3FGCd0WpnR9DS9STneFNGVMXsV5x9Bl7sTxcP18kJxD3r2rJZz7bFModu8i82i2vcyzbN/+zUdu3A5VYV1Pf19dd1suVx/U9jIh0ol8fbW6Xl2Psl3hx1v1eqfVH6EzhZ4X53n3Xa+8Ke/+VCkpEfMnVZOX8j3z6mEvfZc3Vamem+8Y+lfoxO1wV7mHvGtZ3qoUkQr2JK/V1yMIq2Szs/r0aRjX+345YM/WDFa4Z2wdf1m4mZSwmm0Lk3XhYVszyP3Ssy+8hDnc++S+/HY47ihMTq1QM7S78OTmUDMUhShsQ6EJFOqGovBcC3HE10GhCRTqhqIQhW0oNIFC3VAc8VHYhkITKNQNRSEK21BoAkd83dBLnUMU6qDQBAp1Q1GIwrbTKMQRXweFJlCoG4pCFLah0AQKdUNxxEdhGwpNoFA3FIUobEOhCRzxdUMvdQ5RqINCEyjUDUUhCttOoxBHfB0UmkChbujZF3rRefyls8aZ/C23xqUWnsnxMFCL88RevPIJYYSImSqUV4ZyDgvmM0Z8+jSOTrlQLewSR/HLycbNqoxUdug1N9urJn+ffGEQNd5iWlXVtJpOmyjaLL8QVTuLOOhchEb3Yd0qDBfxZikk+bJ+uP5f73Po1jhWGC/Gi/UkRet/6kUg37Be+nH9oQ+dQacK25tmhcOFlqDQBAr7hUITKOwXCk2gsF8oNIHCfgVeKQuPcA7LmSOF8gFl+dwvxLEKjc/MaFN8xMLY+hkQDuYF0THnsBz6RLm5WqT37jiFmZ/OP33lhg/qDOHWCykritdDn656K8t84lsvTIqUk8QNvixk9udQffG4G+SWWDziq9Wpr5Kk8NUC+ENP3pbcRSkT9K2VQnX8Ca/mbLZn4fzBcEEsFr6ZE75bJ94VlHE7e+mm8P7zaN/C+cMZPWpsFQZRU1bWz3b0P+VNk8cWAr/IdJG1QgAAAAAAAAAAAAAAAAAAACf8A6iZt0t2lguwAAAAAElFTkSuQmCC"
              alt=""
            />
            <div className="body_1">
              <h4>Torrens University Australia</h4>
              <p>Bachelor's Degree - User Experience and Web Design</p>
              <p>August 2021 - October 2023</p>
            </div>
          </div>
          <div className="edu_body_2">
            <img
              src="https://yt3.ggpht.com/ytc/AMLnZu_BtceVjc5A1JdeJZs-QCTSUjFG-yxHXI9n5h_d=s900-c-k-c0x00ffffff-no-rj"
              alt=""
            />
            <div className="body_2">
              <h4>Limkokwing University of Creative Technology</h4>
              <p>Bachelor's Degree - Software Engineering with Multimedia</p>
              <p>August 2016 - November 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileLeft;
