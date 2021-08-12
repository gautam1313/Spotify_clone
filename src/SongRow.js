import React from "react";
import "./SongRow.css";

const SongRow = ({ track }) => {
  return (
    <div className="songRow">
      <img
        className="songRow__album"
        src={track && track.album.images[0].url}
        alt=""
      />
      <div className="songRow__info">
        <h1>{track && track.name}</h1>
        <p>
          {track && track.artists.map((artist) => artist.name).join(", ")} -
          {track && track.album.name}
        </p>
      </div>
    </div>
  );
};

export default SongRow;
