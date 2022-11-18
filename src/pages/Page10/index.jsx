import { Canvas } from "./Canvas.js";
import img from "./bg.jpg";


export const Page10 = () => (
  <div style={{position: "absolute", top: 0}}>
    <Canvas width={900} height={1700} />
    <img src={img} style={styles.img} alt=""/> 
  </div>
);

const styles = {
  img: {
    width: 2160,
    height: 1920,
    userDrag: "none",
    WebkitUserDrag: "none",
    userSelect: "none",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none"
  },
  canvas: {
    position: "absolute",
    width: 800,
    height: 1700,
    background: "white",
    right: 140,
    top: 110
  }
}