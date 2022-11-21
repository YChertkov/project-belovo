import { useRef, useEffect, useState } from "react";
import img from "./bg.jpg";
import save from "./media/save.png";
import red from "./media/red.png";
import blue from "./media/blue.png";
import black from "./media/black.png";
import green from "./media/green.png";
import yellow from "./media/yellow.png";
import eraser from "./media/eraser.png";

export const Page10 = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [color, setColor] = useState("#070707");
  const [isDrawing, setIsDrawing] = useState(false);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = color;
    context.lineWidth = 5;
    contextRef.current = context;
  }, [color]);
  const startDrawing = ({nativeEvent}) => {
    const {pageX, pageY} = nativeEvent.touches[0];
    contextRef.current.beginPath();
    contextRef.current.moveTo(pageX-1149, pageY-354);
    contextRef.current.stroke();
    setIsDrawing(true);
  };
  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };
  const draw = ({nativeEvent}) => {
    if (!isDrawing) {
      return;
    }
    const {pageX, pageY} = nativeEvent.touches[0];
    contextRef.current.lineTo(pageX-1149, pageY-354);
    contextRef.current.stroke();
  };
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "#ffe000";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };
  const saveCanvas = () => {
    const dataURL = canvasRef.current.toDataURL("image/png", 1.0);
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = "un.png";
    document.body.appendChild(a);
    a.click();
    console.log(dataURL);
  };
  return (
    <div style={{position: "absolute", top: 0}}>
      <canvas
      style={styles.canvas}
      width={943}
      height={700}
      onTouchStart={startDrawing}
      onTouchEnd={stopDrawing}
      onTouchMove={draw}
      ref={canvasRef}
      />
      <img onClick={() => saveCanvas()} src={save} style={styles.save} alt="" />
      <img onClick={() => setColor("rgba(0,0,0,0)")} src={eraser} style={styles.eraser} alt="" />
      <img onClick={() => setColor("#ff0000")} src={red} style={styles.red} alt="" />
      <img onClick={() => setColor("#005be4")} src={blue} style={styles.blue} alt="" />
      <img onClick={() => setColor("#070707")} src={black} style={styles.black} alt="" />
      <img onClick={() => setColor("#ffe000")} src={yellow} style={styles.yellow} alt="" />
      <img onClick={() => setColor("#789932")} src={green} style={styles.green} alt="" />
      <img src={img} style={styles.img} alt=""/> 
    </div>
  )};

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
    right: 67,
    top: 355
  },
  save: {
    position: "absolute",
    bottom: 679,
    right: 70
  },
  eraser: {
    position: "absolute",
    bottom: 715,
    right: 293
  },
  red: {
    position: "absolute",
    bottom: 697,
    right: 827
  },
  black: {
    position: "absolute",
    bottom: 697,
    right: 941
  },
  blue: {
    position: "absolute",
    bottom: 697,
    right: 599
  },
  green: {
    position: "absolute",
    bottom: 697,
    right: 713
  },
  yellow: {
    position: "absolute",
    bottom: 697,
    right: 483
  }
}