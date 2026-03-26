import React, {Component} from "react";
import ReactPlayer from "react-player";
import "./tourHelper.scss";
import "./trainingPlayer.scss";
import Measure from "react-measure";
import {subscribe} from "helpers/pubsub";
import {FaRegTimesCircle} from "react-icons/fa";
import {
  FaPlay,
  FaPause,
  FaVolumeDown,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import debounce from "./debounce";

const formatTime = value => {
  const seconds = Number.isFinite(value) ? Math.max(0, Math.floor(value)) : 0;
  const mins = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
};

const PlayPause = ({isPlaying, onToggle, className}) => (
  <button
    type="button"
    className={`${className} media-control-button`}
    onClick={onToggle}
    aria-label={isPlaying ? "Pause" : "Play"}
  >
    {isPlaying ? <FaPause /> : <FaPlay />}
  </button>
);

const MuteUnmute = ({isMuted, volume, onToggle, className}) => {
  let Icon = FaVolumeUp;
  if (isMuted || volume === 0) {
    Icon = FaVolumeMute;
  } else if (volume < 0.5) {
    Icon = FaVolumeDown;
  }
  return (
    <button
      type="button"
      className={`${className} media-control-button`}
      onClick={onToggle}
      aria-label={isMuted || volume === 0 ? "Unmute" : "Mute"}
    >
      <Icon />
    </button>
  );
};

const debouceSeekTo = debounce((seekTo, value, shouldPlay, setPlaying) => {
  if (!seekTo) return;
  seekTo(+value);
  if (shouldPlay) {
    setPlaying(true);
  }
}, 250);

const PlayRate = ({playRate, setPlayRate}) => {
  const playRates = [0.5, 1, 1.25, 1.5, 1.75, 2];
  return (
    <span
      className="training-playRate"
      onClick={() => {
        setPlayRate(playRate => {
          const playRatesIndex = playRates.indexOf(+playRate);
          return playRates[(playRatesIndex + 1) % playRates.length];
        });
      }}
    >
      {String(playRate) === "0.5" ? "½" : playRate}×
    </span>
  );
};
const invalidTags = ["INPUT", "BUTTON", "circle", "svg"];

const MediaPlayerObject = ({isMovie, src, close}) => {
  const [playRate, setPlayRate] = React.useState(1);
  const playerRef = React.useRef();
  const playPauseRef = React.useRef(() => {});
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [volume, setVolume] = React.useState(1);
  const [duration, setDuration] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [seekValue, setSeekValue] = React.useState(0);
  const isPlayingOnMouseDown = React.useRef(false);
  const onChangeUsed = React.useRef(false);

  React.useEffect(() => {
    return subscribe("toggleTraining", () => {
      playPauseRef.current();
    });
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(playing => !playing);
  };
  playPauseRef.current = togglePlayPause;

  const toggleMute = () => {
    setIsMuted(muted => !muted);
  };

  const onSeekMouseDown = () => {
    isPlayingOnMouseDown.current = isPlaying;
    setIsPlaying(false);
  };

  const onSeekMouseUp = ({target: {value}}) => {
    const shouldPlay = isPlayingOnMouseDown.current;
    if (!onChangeUsed.current) {
      setSeekValue(+value);
      const player = playerRef.current;
      if (player) {
        player.seekTo(+value, "seconds");
      }
      setIsPlaying(shouldPlay);
      return;
    }
    onChangeUsed.current = false;
    setIsPlaying(shouldPlay);
  };

  const onSeekChange = ({target: {value}}) => {
    const player = playerRef.current;
    if (!player) return;
    setSeekValue(+value);
    debouceSeekTo(
      seconds => player.seekTo(seconds, "seconds"),
      value,
      true,
      setIsPlaying,
    );
    onChangeUsed.current = true;
  };

  const onVolumeChange = ({target: {value}}) => {
    const nextVolume = Math.max(0, Math.min(1, +value));
    setVolume(nextVolume);
    setIsMuted(nextVolume === 0);
  };

  const progressSize = duration > 0 ? (seekValue * 100) / duration : 0;

  return (
    <div className="media">
      <div
        className="media-player"
        style={{display: isMovie ? "block" : "none"}}
      >
        <ReactPlayer
          ref={playerRef}
          url={src}
          playing={isPlaying}
          controls={false}
          playbackRate={playRate}
          volume={volume}
          muted={isMuted}
          width="100%"
          height={isMovie ? "100%" : "0"}
          onProgress={({playedSeconds}) => {
            setCurrentTime(playedSeconds);
            if (!onChangeUsed.current) {
              setSeekValue(playedSeconds);
            }
          }}
          onDuration={d => setDuration(d)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={togglePlayPause}
        />
      </div>
      <div className="media-controls">
        <PlayPause
          className="media-control media-control--play-pause"
          isPlaying={isPlaying}
          onToggle={togglePlayPause}
        />
        <span className="media-control media-control--current-time">
          {formatTime(currentTime)}
        </span>
        <input
          type="range"
          step="any"
          max={(duration || 0).toFixed(4)}
          value={seekValue}
          onMouseDown={onSeekMouseDown}
          onMouseUp={onSeekMouseUp}
          onChange={onSeekChange}
          className="media-control media-control--volume-range"
          style={{
            backgroundSize: `${progressSize}% 100%`,
          }}
        />
        <span className="media-control media-control--duration">
          {formatTime(duration)}
        </span>
        <PlayRate playRate={playRate} setPlayRate={setPlayRate} />
        <MuteUnmute
          className="media-control media-control--mute-unmute"
          isMuted={isMuted}
          volume={volume}
          onToggle={toggleMute}
        />
        <input
          className="media-control media-control--volume"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={onVolumeChange}
        />

        {close && (
          <FaRegTimesCircle
            size="2em"
            style={{cursor: "pointer"}}
            onClick={close}
          />
        )}
      </div>
    </div>
  );
};

export default class MediaPlayer extends Component {
  state = {
    position: {x: 0, y: 0},
  };
  mouseDown = evt => {
    if (invalidTags.indexOf(evt.target.tagName) > -1) return;

    this.setState(
      {
        initialPosition: evt.target.getBoundingClientRect(),
      },
      () => {
        document.addEventListener("mousemove", this.mouseMove);
        document.addEventListener("touchmove", this.touchMove);
        document.addEventListener("touchend", this.mouseUp);

        document.addEventListener("mouseup", this.mouseUp);
      },
    );
  };
  mouseUp = () => {
    document.removeEventListener("mousemove", this.mouseMove);
    document.removeEventListener("touchmove", this.touchMove);
    document.removeEventListener("mouseup", this.mouseUp);
    document.removeEventListener("touchend", this.mouseUp);
  };
  touchMove = evt => {
    const {clientX, clientY} = evt.touches[0];
    this.setState({
      position: {
        x:
          clientX -
          this.state.initialPosition.x -
          this.state.initialPosition.width / 2,
        y: clientY - this.state.initialPosition.y,
      },
    });
  };
  mouseMove = evt => {
    this.setState({
      position: {
        x: Math.max(
          0,
          Math.min(
            window.innerWidth - this.state.dimensions.width,
            this.state.position.x + evt.movementX,
          ),
        ),
        y: Math.max(
          0,
          Math.min(
            window.innerHeight - this.state.dimensions.height,
            this.state.position.y + evt.movementY,
          ),
        ),
      },
    });
  };
  setDimensions = contentRect => {
    // Set the position based on the dimensions
    let {position} = this.state;
    const {width} = contentRect.bounds;
    position = {
      x: position.x === 0 ? window.innerWidth / 2 - width : position.x,
      y: position.y === 0 ? 100 : position.y,
    };
    this.setState({dimensions: contentRect.bounds, position});
  };
  render() {
    const {src = "/sciences.ogg", close} = this.props;
    const {position} = this.state;
    const ext1 = src.match(/\..*$/gi);
    const ext = ext1 ? ext1[0].replace(".", "").toLowerCase() : null;
    const isMovie = ["mov", "mp4", "ogv", "webm", "m4v"].indexOf(ext) > -1;
    return (
      <Measure bounds onResize={this.setDimensions}>
        {({measureRef}) => (
          <div
            ref={measureRef}
            className="training-media-wrapper"
            onMouseDown={this.mouseDown}
            onTouchStart={this.mouseDown}
            style={{
              transform: `translate(${position.x}px, ${position.y}px)`,
            }}
          >
            <MediaPlayerObject close={close} isMovie={isMovie} src={src} />
          </div>
        )}
      </Measure>
    );
  }
}
