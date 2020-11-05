import React from "react";
import {
  Apps,
  Menu,
  Notifications,
  Search,
  VideoCall,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
          alt=""
        />
      </div>

      <div className="header__input">
        <input placeholder='Search' type="text" />
        <Search className='header__input-button' />
      </div>

      <div className="header__right">
        <VideoCall className='header__right-icon' />
        <Apps className='header__right-icon' />
        <Notifications className='header__right-icon' />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
