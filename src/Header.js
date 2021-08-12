import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer";

const Header = () => {
  const { user } = useDataLayerValue()[0];
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Artists, songs or podcasts" type="text" />
      </div>
      <div className="header__right">
        <Avatar
          src={user && user.images[0] && user.images[0].url}
          alt={user && user.display_name}
        />
        <h4>{user && user.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
