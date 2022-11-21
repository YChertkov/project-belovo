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
  const [opacity, setOpacity] = useState(false);
  const [opacityCanvas, setOpacityCanvas] = useState(true);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = color;
    context.lineWidth = 5;
    contextRef.current = context;
    context.fillStyle = "#070707";
  }, [color]);
  const startDrawing = ({nativeEvent}) => {
    const {pageX, pageY} = nativeEvent.touches[0];
    contextRef.current.beginPath();
    contextRef.current.moveTo(pageX-1149, pageY-354);
    contextRef.current.stroke();
    contextRef.current.fillRect(pageX-1149, pageY-354, 5, 5);
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
    context.globalCompositeOperation = 'destination-out';
    context.lineWidth = 20;
  };
  const saveCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setOpacityCanvas(false);
    const dataURL = canvasRef.current.toDataURL("image/png", 1.0);
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = `${(Math.random() + 1).toString(36).substring(7)}.png`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => context.clearRect(0, 0, canvas.width, canvas.height), 410);
    setTimeout(() => setOpacity(true), 610);
    setTimeout(() => setOpacityCanvas(true), 3310);
    setTimeout(() => setOpacity(false), 3510);
  };
  const changeColor = (color) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    setColor(color);
    context.lineWidth = 5;
    context.globalCompositeOperation = 'source-over';
    context.fillStyle = color;
  };
  return (
    <div style={{position: "absolute", top: 0}}>
      <canvas
      style={{...styles.canvas, ...(opacityCanvas ? {opacity: 1} : {opacity: 0})}}
      width={943}
      height={700}
      onTouchStart={startDrawing}
      onTouchEnd={stopDrawing}
      onTouchMove={draw}
      ref={canvasRef}
      />
      <span style={{...styles.text, ...(opacity ? {opacity: 1} : {opacity: 0})}}>Открытка отправлена</span>
      <img onClick={() => saveCanvas()} src={save} style={styles.save} alt="" />
      <img onClick={() => clearCanvas()} src={eraser} style={styles.eraser} alt="" />
      <img onClick={() => changeColor("#ff0000")} src={red} style={styles.red} alt="" />
      <img onClick={() => changeColor("#005be4")} src={blue} style={styles.blue} alt="" />
      <img onClick={() => changeColor("#070707")} src={black} style={styles.black} alt="" />
      <img onClick={() => changeColor("#ffe000")} src={yellow} style={styles.yellow} alt="" />
      <img onClick={() => changeColor("#789932")} src={green} style={styles.green} alt="" />
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
  text: {
    position: "absolute",
    top: 695,
    right: 255,
    fontFamily: "B52",
    fontSize: 52,
    lineHeight: "88.8%",
    opacity: 0,
    transition: "opacity 0.6s"
  },
  opacity: {
    opacity: 1
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