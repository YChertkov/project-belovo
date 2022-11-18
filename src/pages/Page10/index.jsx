import ReactPaint from 'react-paint';
import img from "./bg.jpg";

export const props = {
  style: {
    background: 'tomato',
    position: "absolute",
    userDrag: "none",
    WebkitUserDrag: "none",
    userSelect: "none",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none"
  },
  brushCol: '#ffffff',
  lineWidth: 10,
  className: 'react-paint',
  height: 500,
  width: 500,
  onDraw: () => { console.log('i have drawn!'); },
};

export const Page10 = () => (
  <div style={{position: "absolute", top: 0}}>
    {/* <ReactPaint {...props} /> */}
    <canvas style={styles.canvas}>

    </canvas>
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