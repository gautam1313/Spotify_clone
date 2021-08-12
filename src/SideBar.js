import React from "react";
import "./SideBar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "./DataLayer";

const SideBar = () => {
  const { playlists } = useDataLayerValue()[0];
  console.log(playlists);
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://logodownload.org/wp-content/uploads/2016/09/spotify-logo-branca-white.png"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists.items &&
        playlists.items.map((playlist) => (
          <SidebarOption key={Math.random().toString()} title={playlist.name} />
        ))}
    </div>
  );
};

export default SideBar;
