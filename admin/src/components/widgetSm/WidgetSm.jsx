import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

const WidgetSm = () => {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Join New Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://thumbs.dreamstime.com/b/girl-face-avatar-profile-picture-wearing-glasses-bandana-smiling-cartoon-character-portrait-vector-illustration-graphic-design-149753695.jpg"
            alt="profile"
            className="widgetSmImg"
          />

          <div className="widgetSmUser">
            <span className="widgetSmUserName">Najmus Sakib</span>
            <span className="widgetSmUserTitle">Jr. Software Engineer</span>
          </div>

          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://avatoon.me/wp-content/uploads/2020/07/Cartoon-Pic-Ideas-for-DP-Profile-09.png"
            alt="profile"
            className="widgetSmImg"
          />

          <div className="widgetSmUser">
            <span className="widgetSmUserName">Adnan Nayem</span>
            <span className="widgetSmUserTitle">Front-end developer</span>
          </div>

          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://gocartoonme.com/wp-content/uploads/cartoon-avatar.png"
            alt="profile"
            className="widgetSmImg"
          />

          <div className="widgetSmUser">
            <span className="widgetSmUserName">Sanorita Maria</span>
            <span className="widgetSmUserTitle">UX designer</span>
          </div>

          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://www.drupal.org/files/user-pictures/picture-2204516-1469808304.png"
            alt="profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">John Doe</span>
            <span className="widgetSmUserTitle">Project manager</span>
          </div>

          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
          <img
            src="https://www.pngitem.com/pimgs/m/528-5286598_all-photo-png-clipart-male-teacher-clipart-png.png"
            alt="profile"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUserName">Abil Adnan</span>
            <span className="widgetSmUserTitle">Backend Developer</span>
          </div>

          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSm;
