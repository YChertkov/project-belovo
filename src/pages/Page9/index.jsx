import { useState } from "react";
import img from "./bg.jpg";
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
  const images = [first, second, third, fourth];
  const firstWord = ["взлёт","хвост","крыло","диспетчер"];
  const secondWord = ["пилот","люк","высота","аэродром"];
  const thirdWord = ["скорость","фюзеляж","топливо","небо"];
  const fourthWord = ["полоса","аэродром","шасси","самолёт"];
  const accept = [2, 3, 1, 4];
  return (
    <div style={styles.content}>
      <div>
        <div style={styles.imageWrapper}>
          <img src={images[page]} style={styles.image} alt=""/>
        </div>
        <span style={styles.textFirst}>{firstWord[page]}</span>
        {firstHandler ? <img src={accept[page] === 1 ? right : error} style={styles.imageFirst} alt=""/> : null}
        <span style={styles.textSecond}>{secondWord[page]}</span>
        {secondHandler ? <img src={accept[page] === 2 ? right : error} style={styles.imageSecond} alt=""/> : null}
        <span style={styles.textThird}>{thirdWord[page]}</span>
        {thirdHandler ? <img src={accept[page] === 3 ? right : error} style={styles.imageThird} alt=""/> : null}
        <span style={styles.textFourth}>{fourthWord[page]}</span>
        {fourthHandler ? <img src={accept[page] === 4 ? right : error} style={styles.imageFourth} alt=""/> : null}
        <span style={styles.number}>{page+1} из 4</span>
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
  textFirst: {
    fontSize: 42,
    lineHeight: "115%",
    position: "absolute",
    right: 725,
    bottom: 488
  },
  textSecond: {
    fontSize: 42,
    lineHeight: "115%",
    position: "absolute",
    right: 235,
    bottom: 488
  },
  textThird: {
    fontSize: 42,
    lineHeight: "115%",
    position: "absolute",
    right: 690,
    bottom: 268
  },
  textFourth: {
    fontSize: 42,
    lineHeight: "115%",
    position: "absolute",
    right: 234,
    bottom: 268
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
  }
}