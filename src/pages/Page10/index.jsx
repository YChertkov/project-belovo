import { useRef, useEffect, useState } from "react";
import img from "./bg.jpg";
import save from "./media/save.png";
import red from "./media/red.png";
import blue from "./media/blue.png";
import black from "./media/black.png";
import eraser from "./media/eraser.png";

export const Page10 = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [color, setColor] = useState("black");
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
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
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
    const {offsetX, offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
    console.log(1);
  };
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  }
  return (
    <div style={{position: "absolute", top: 0}}>
      <canvas
      style={styles.canvas}
      width={800}
      height={1700}
      onMouseDown={startDrawing}
      onMouseUp={stopDrawing}
      onMouseMove={draw}
      ref={canvasRef}
      />
      <img onClick={() => clearCanvas()} src={save} style={styles.save} alt="" />
      <img onClick={() => setColor("white")} src={eraser} style={styles.eraser} alt="" />
      <img onClick={() => setColor("red")} src={red} style={styles.red} alt="" />
      <img onClick={() => setColor("blue")} src={blue} style={styles.blue} alt="" />
      <img onClick={() => setColor("black")} src={black} style={styles.black} alt="" />
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
    background: "white",
    right: 140,
    top: 110
  },
  save: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 100,
    height: 100
  },
  eraser: {
    position: "absolute",
    top: 10,
    right: 150,
    width: 100,
    height: 100
  },
  red: {
    position: "absolute",
    top: 10,
    right: 400,
    width: 100,
    height: 100
  },
  black: {
    position: "absolute",
    top: 10,
    right: 550,
    width: 100,
    height: 100
  },
  blue: {
    position: "absolute",
    top: 10,
    right: 700,
    width: 100,
    height: 100
  }
}