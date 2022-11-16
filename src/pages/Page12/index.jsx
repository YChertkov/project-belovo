import { useState } from "react";
import img from "./bg.jpg";
import closed from "./closed.png";
import opened from "./opened.png";
import record from "./record.mp3";

export const Page12 = () => {
  document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
      mp3.currentTime = 0;
      mp3.pause();
    }
  });
  const [handle, setHandle] = useState(false);
  const mp3 = new Audio(record);
  if (handle === true) {
    mp3.play();
    setHandle(1);
  };
  return (
    <div className="page">
      <img onClick={() => setHandle(true)} src={handle ? opened : closed} style={styles.image} alt="" />
      <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/> 
    </div>
  )
};

const styles = {
  image: {
    position: "absolute",
    top: 47,
    right: 27
  }
}