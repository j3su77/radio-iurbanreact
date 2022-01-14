import React, { useState, useRef,useEffect, useContext } from "react";
import $ from "jquery";
import AudioControls from "./AudioControls";
import LinesBars from "./LinesBars";
import "./radio.css";
import Marquee from "react-fast-marquee";
import AudioPlayer from "react-h5-audio-player";
import { Context } from "../../context/Context";
import  Spinner  from "../../components/Spinner";
import SpinnerLine from "../SpinnerLine";


const RadioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const radiocontrol = useRef();
  

  

  var height = 0;
 

useEffect(() => {
 
   
    if(isPlaying) {
      setIsLoading(true)
        radiocontrol.current.audio.current.src =
         "https://stream.zeno.fm/9a8ufvubpy8uv" +
        "?noCache=" +
        Math.floor(Math.random() * 1000000)
       radiocontrol.current.audio.current.play();
   
    } else {
        radiocontrol.current.audio.current.pause();
  
      }

  }, [isPlaying]);

  useEffect(() => {
 
    if( !radiocontrol.current.audio.current.onPlaying ||
      radiocontrol.current.audio.current.paused ||
      radiocontrol.current.audio.current.onPause ) {
     
        isPaused()
      
    }else  {

    }

    
   
  }, [{}])
  function onLoadedd() {
     
setIsLoading(false)
     
    console.log("cargando");
  }

 const isRealPlaying = () => {
  
  
   waveAfterWave()
  
   $(".wave").each(function () {
    height = $(this).height();
    $(this).css("height", height);
  });
  $(".wave").removeClass("no-animation");
  $(".radio-lid").removeClass("slide-bottom");
  $(".radio-lid").addClass("slide-top");
 
  }

 const isPaused = () => {

  $(".wave").each(function () {
    height = $(this).height();
    $(this).css("height", height);
  });
  $(".wave").addClass("no-animation");
  $(".radio-message").removeClass("animate__rollIn");
  $(".radio-lid").addClass("slide-bottom");
  $(".radio-lid").removeClass("slide-top");
  


  }





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
  
      <div className="radio-container"  style={{position: "relative"}}>

        <div className="radio-body">

       
          
          <LinesBars />
       
       
          

          <div className="button-player">
            <div className="audio-controls">
              {isPlaying && (
                <Marquee gradient={false} speed={50} className="overflow-hidden">
                  <span style={{ marginLeft: "300px" }}>
                    
                    Sonando iurbanradio
                  
                  </span>
                  <span style={{ marginLeft: "300px" }}>
                    
                    Sonando iurbanradio
                  
                  </span>
                </Marquee>
              ) 
                
              }
              <div className="radio-lid  slide-bottom">
                  {" "}
                  <div className=""></div>{" "}
                </div>
              <AudioControls
                isPlaying={isPlaying}
                onPlayPauseClick={setIsPlaying}
               isLoading={isLoading}
              />
          <AudioPlayer
          style={{ display: "none" }}
          preload="metadata"
          // Try other props!
          ref={radiocontrol}
          onPlay={(e) => console.log("onPlay")}
          onPlaying={isRealPlaying}
          onLoadedMetaData={onLoadedd}
          onPause={isPaused}
          
        />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioPlayer;
