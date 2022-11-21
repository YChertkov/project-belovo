import { useState, useEffect } from "react";
import img from "./bg.jpg";
import closed from "./closed.png";
import opened from "./opened.png";
import record from "./record.mp3";
import open from "./open.mp3";

export const Page12 = () => {
  const [handle, setHandle] = useState(0);
  const openSound = new Audio(open);
  const boxOpen = () => {
    openSound.play();
    setHandle(!handle);
  };
  return (
    <div className="page">
      <img onClick={() => boxOpen()} src={handle ? opened : closed} style={styles.image} alt="" />
      {!!handle ? <audio src={record} autoPlay></audio> : null}
      <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/> 
    </div>
  )
};

const styles = {
  image: {
    position: "absolute",
    top: 47,
    right: 27
  },
  opacityUp: {
    opacity: 1
  },
  opacityDown: {
    opacity: 0,
    transition: "opacity 0.6s"
  }
}