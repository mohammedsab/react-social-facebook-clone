import "./profile.css";
import Topbar from "../../components/topbar/topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Rightbar from "../../components/rightbar/rightbar";
import Feed from "../../components/feed/feed";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export default function Profile() {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/user?username=${username}`);
      setUser(res.data);
    };

    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.cover || PF + "noCover.png"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.avatar || PF + "person/noAvatar.png"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user.username}</h4>
              <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}
