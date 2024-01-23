import "./rightbar.css";
import { Users } from "../../constants/dummyData";
import Online from "../online/online";

export default function Rightbar({ profile }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Mobarak</b> and <b>other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt=""></img>
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City: </span>
            <span className="rightbarInfoKey">Cairo </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From: </span>
            <span className="rightbarInfoKey">Alex </span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoKey">Single </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {Users.map((u) => (
            <div className="rightbarFollowing">
              <img
                src={PF + u.profilePicture}
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">{u.username}</span>
            </div>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
