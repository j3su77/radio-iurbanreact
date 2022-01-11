import React, { useState, useRef,useEffect } from "react";
import $ from "jquery";
import AudioControls from "./AudioControls";
import LinesBars from "./LinesBars";
import "./radio.css";
import Marquee from "react-fast-marquee";
import AudioPlayer from "react-h5-audio-player";


const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const radiocontrol = useRef();

  var height = 0;


useEffect(() => {
   
    if(isPlaying) {
        radiocontrol.current.audio.current.src =
         "https://stream.zeno.fm/9a8ufvubpy8uv" +
        "?noCache=" +
        Math.floor(Math.random() * 1000000)
       radiocontrol.current.audio.current.play();
       console.log("playinggg");
    } else {
        radiocontrol.current.audio.current.pause();
        radiocontrol.current.audio.current.src = undefined
      }

  }, [isPlaying]);

  useEffect(() => {
    if(radiocontrol.current.audio.current.paused) {
     waveAfterWave();
    } else {
      $(".wave").removeClass("no-animation");

    }
  }, [{}])






  function waveAfterWave() {
    $(".wave").each(function () {
      height = $(this).height();
      $(this).css("height", height);
    });
    $(".wave").addClass("no-animation");
    $(".radio-message").removeClass("animate__rollIn");
  }

  return (
    <div className="container_radio">
      <div className="radio-container">
        <div className="radio-body">
          <LinesBars />

          <div className="button-player">
            <div className="audio-controls">
              {isPlaying ? (
                <Marquee gradient={false} speed={50} className="overflow-hidden">
                  <span style={{ marginLeft: "300px" }}>
                    
                    Sonando iurbanradio
                  
                  </span>
                  <span style={{ marginLeft: "300px" }}>
                    
                    Sonando iurbanradio
                  
                  </span>
                </Marquee>
              ) : (
                <div className="radio-lid animate__animated animate__slideInDown">
                  {" "}
                  <div className=""></div>{" "}
                </div>
              )}
              <AudioControls
                isPlaying={isPlaying}
                onPlayPauseClick={setIsPlaying}
              />
          <AudioPlayer
          style={{ display: "none" }}
          preload="metadata"
          // Try other props!
          ref={radiocontrol}
          onPlay={(e) => console.log("onPlay")}
       
        />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
