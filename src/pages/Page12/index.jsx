import { useState } from "react";
import img from "./bg.jpg";
import closed from "./closed.png";
import opened from "./opened.png";
import touch from "./touch.png";
import record from "./record.mp3";
import open from "./open.mp3";

export const Page12 = () => {
  const [handle, setHandle] = useState(0);
  const openSound = new Audio(open);
  if (handle === true) {
    openSound.play();
  };
  if (handle === false) {
    openSound.play();
  };
  return (
    <div className="page">
      <img onClick={() => setHandle(!handle)} src={handle ? opened : closed} style={styles.image} alt="" />
      <img style={styles.touch} src={touch} alt="" />
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
  touch: {
    position: "absolute",
    right: 155,
    bottom: 972
  },
  opacityUp: {
    opacity: 1
  },
  opacityDown: {
    opacity: 0,
    transition: "opacity 0.6s"
  }
}