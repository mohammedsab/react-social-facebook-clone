import "./sidebar.css";
import { Users, sidebarItems } from "../../constants/dummyData";

import CloseFriend from "../closeFriend/closeFriend";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {sidebarItems.map((item) => (
            <li className="sidebarListItem">
              <item.logo className="sidebarIcon" />
              <span className="sidebarListItemText">{item.text}</span>
            </li>
          ))}
        </ul>

        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
