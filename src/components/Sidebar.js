import React from "react";
import { Home, Subscriptions, Whatshot } from "@material-ui/icons";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow Icon={Home} title="Home" />
      <SidebarRow Icon={Whatshot} title="Trending" />
      <SidebarRow Icon={Subscriptions} title="Subscription" />
    </div>
  );
}

export default Sidebar;
