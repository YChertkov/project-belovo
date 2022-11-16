import { useState } from "react";
import img from "./bg.jpg";
import textBg from "./media/bg.png";
import error from "./media/error.png";
import right from "./media/right.png";
import first from "./media/first.png";
import second from "./media/second.png";
import third from "./media/third.png";
import fourth from "./media/fourth.png";

export const Page9 = () => {
  const [page, setPage] = useState(0);
  const [firstHandler, setFirstHandler] = useState(false);
  const [secondHandler, setSecondHandler] = useState(false);
  const [thirdHandler, setThirdHandler] = useState(false);
  const [fourthHandler, setFourthHandler] = useState(false);
  const [opacityHigh , setOpacityHigh] = useState(styles.opacityUp);
  const images = [first, second, third, fourth];
  const firstWord = ["взлёт","хвост","крыло","диспетчер"];
  const secondWord = ["пилот","люк","высота","аэродром"];
  const thirdWord = ["скорость","фюзеляж","топливо","небо"];
  const fourthWord = ["полоса","аэродром","шасси","самолёт"];
  const accept = [2, 3, 1, 4];
  const handleClick = (a) => {
    if (a === 1) {
      setFirstHandler(true);
    }
    if (a === 2) {
      setSecondHandler(true);
    }
    if (a === 3) {
      setThirdHandler(true);
    }
    if (a === 4) {
      setFourthHandler(true);
    }
    if (a === accept[page]) {
      setOpacityHigh(styles.opacityDown);
      setTimeout(() => {setPage(page + 1);}, 300);
      setTimeout(() => {setOpacityHigh(styles.opacityUp);}, 310);
      setFirstHandler(false);
      setSecondHandler(false);
      setThirdHandler(false);
      setFourthHandler(false);
    }
  };
  return (
    <div style={styles.content}>
      <div>
        <div style={styles.imageWrapper}>
          <img src={images[page]} style={{...styles.image, ...opacityHigh}} alt=""/>
        </div>
        <div onClick={() => handleClick(1)} style={{...styles.bg, ...styles.bg1}}>
          <span style={{...styles.text, ...opacityHigh}}>{firstWord[page]}</span>
        </div>
        {firstHandler ? <img src={accept[page] === 1 ? right : error} style={{...styles.imageFirst, ...opacityHigh}} alt=""/> : null}
        <div onClick={() => handleClick(2)} style={{...styles.bg, ...styles.bg2}}>
          <span style={{...styles.text, ...opacityHigh}}>{secondWord[page]}</span>
        </div>
        {secondHandler ? <img src={accept[page] === 2 ? right : error} style={{...styles.imageSecond, ...opacityHigh}} alt=""/> : null}
        <div onClick={() => handleClick(3)} style={{...styles.bg, ...styles.bg3}}>
          <span style={{...styles.text, ...opacityHigh}}>{thirdWord[page]}</span>
        </div>
        {thirdHandler ? <img src={accept[page] === 3 ? right : error} style={{...styles.imageThird, ...opacityHigh}} alt=""/> : null}
        <div onClick={() => handleClick(4)} style={{...styles.bg, ...styles.bg4}}>
          <span style={{...styles.text, ...opacityHigh}}>{fourthWord[page]}</span>
        </div>
        {fourthHandler ? <img src={accept[page] === 4 ? right : error} style={{...styles.imageFourth, ...opacityHigh}} alt=""/> : null}
        <span style={{...styles.number, ...opacityHigh}}>{page+1} из 4</span>
      </div>
      <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/> 
    </div>
  )
};

const styles = {
  content: {
    position: "relative"
  },
  imageWrapper: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      right: 216,
      bottom: 659,
      width: 650
  },
  number: {
    fontFamily: "B52",
    position: "absolute",
    right: 473,
    bottom: 75,
    fontSize: 42,
    lineHeight: "115%"
  },
  text: {
    fontSize: 42,
    lineHeight: "115%"
  },
  imageFirst: {
    position: "absolute",
    right: 737,
    bottom: 454
  },
  imageSecond: {
    position: "absolute",
    right: 243,
    bottom: 454
  },
  imageThird: {
    position: "absolute",
    right: 737,
    bottom: 234
  },
  imageFourth: {
    position: "absolute",
    right: 247,
    bottom: 234
  },
  opacityDown: {
    opacity: 0,
    transition: "opacity 0.3s"
  },
  opacityUp: {
    opacity: 1,
    transition: "opacity 0.3s"
  },
  bg: {
    width: 378,
    backgroundImage: `url(${textBg})`,
    height: 147,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute"
  },
  bg1: {
    right: 596,
    bottom: 439
  },
  bg2: {
    right: 106,
    bottom: 439
  },
  bg3: {
    right: 596,
    bottom: 219
  },
  bg4: {
    right: 106,
    bottom: 219
  }
}