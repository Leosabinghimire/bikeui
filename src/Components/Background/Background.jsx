import React from "react";
import "./background.css";
import video1 from "../../Components/Assets/video1.mp4";
import image1 from "../../Components/Assets/image1.jpg";
import image2 from "../../Components/Assets/image2.jpg";
import image3 from "../../Components/Assets/image3.jpg";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} alt="image1" className="background fade-in" />;
  } else if (heroCount === 1) {
    return <img src={image2} alt="image2" className="background fade-in" />;
  } else if (heroCount === 2) {
    return <img src={image3} alt="image3" className="background fade-in" />;
  }
};

export default Background;
