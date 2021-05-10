import React from "react";
import { useState, useEffect } from "react";
import ReactPlayer from "react-player/vimeo";

function VideoEmbed(props) {
  const { link, handleTime, time, handleVideoEnd } = props;

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // if (time && time.playedSeconds >= 500) {
    //   setPlaying(false);
    // }
  }, [time]);

  let { playedSeconds, played, loadedSeconds, loaded } = time ? time : "";
  if (playedSeconds) {
    playedSeconds = playedSeconds.toFixed(2);
  }
  if (played) {
    played = played.toFixed(2);
  }
  if (loadedSeconds) {
    loadedSeconds = loadedSeconds.toFixed(2);
  }
  if (loaded) {
    loaded = loaded.toFixed(2);
  }

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        width="100%"
        height="100%"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        playing={playing}
        url={link}
        controls={true}
        onProgress={handleTime}
        onEnded={handleVideoEnd}
      />
      <div className="hideInFuture">
        <h4>playedSeconds : {playedSeconds} Seconds</h4>
        <h4>played: {played * 100} %</h4>
        <h4>loadedSeconds: {loadedSeconds} Seconds</h4>
        <h4>loaded: {loaded} Seconds</h4>
      </div>
    </div>
  );
}

export default VideoEmbed;
