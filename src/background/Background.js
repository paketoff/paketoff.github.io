import React from "react";
import '../styles/background.css';
import video from "../assets/bc-final.mp4";
import fallbackImage from "../assets/fallback.png";

const Background = () => {
  return (
    <>
      <div className="shadow-overlay"></div>
      <video playsInline autoPlay muted loop 
      preload="auto" id="bg" className="bg" poster={fallbackImage}>
        <source src={video} type="video/mp4"></source>
      </video>
    </>
  )
}

export default Background;