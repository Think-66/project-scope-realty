import React from "react";

const VideoListItem = (props) => {
  const { name, duration, setselectedVideo, link } = props;
  const min = duration / 60;

  const handleSelect = () => {
    setselectedVideo(link);
  };
  return (
    <li className="list-group-item active">
      <div className="item" onClick={handleSelect}>
        <p>{name}</p>
        <span>{min.toFixed(2)} mins</span>
      </div>
    </li>
  );
};

export default VideoListItem;
