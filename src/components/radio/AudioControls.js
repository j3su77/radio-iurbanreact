import React from "react";
import { IoPlaySharp as Play } from "react-icons/io5";
import { FaPause as Pause } from "react-icons/fa";
import SpinnerLine from "../SpinnerLine";


const AudioControls = ({ isPlaying, onPlayPauseClick, isLoading }) => (


  <>
    {isLoading ? <div className="button-player-loading loading" ><SpinnerLine /></div>  :isPlaying ? (
      <button
        type="button"
        className="pause"
        onClick={() => onPlayPauseClick(false)}
        aria-label="Pause"
      >
        <Pause />
      </button>
    ) :  (
      <button
        type="button"
        className="play animate__animated animate__fadeInUp animate__delay-2s"
        onClick={() => onPlayPauseClick(true)}
        aria-label="Play"
      >
        <Play />
      </button>
    )}
  </>
);

export default AudioControls;
