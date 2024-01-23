import { Link } from "react-router-dom";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Facebook Clone</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchInput"
            placeholder="Search for friends"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person className="personIcon" />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat className="chatIcon" />
            <span className="topbarIconBadge">3</span>
          </div>
          <div className="topbarIconItem">
            <Notifications className="notificationIcon" />
            <span className="topbarIconBadge">4</span>
          </div>
        </div>
        <Link to="/profile/ww">
          <img src="/assets/person/1.jpeg" alt="" className="topbarImage" />
        </Link>
      </div>
    </div>
  );
}
