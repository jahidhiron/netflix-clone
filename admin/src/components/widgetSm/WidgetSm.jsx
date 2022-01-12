import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        await axios
          .get("users?new=true", {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGE5ZTRkYzQzYzc4MmUzZDk3N2VjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTk5MzE0MCwiZXhwIjoxNjQyMDc5NTQwfQ.GS8iyQs-Mwcv9EIZp55JyOCorJu3diup8dPEJhIDFgE",
            },
          })
          .then((res) => setNewUsers(res.data));
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Join New Members</span>
      <ul className="widgetSmList">
        {newUsers &&
          newUsers.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
              <img
                src={
                  user.avatar ||
                  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                }
                alt="profile"
                className="widgetSmImg"
              />

              <div className="widgetSmUser">
                <span className="widgetSmUserName">{user.username}</span>
              </div>

              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
