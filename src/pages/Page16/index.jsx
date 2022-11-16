import { useState } from 'react';
import img from "./bg.jpg";
import carp from "./fishs/carp.png";
import catfish from "./fishs/catfish.png";
import silver from "./fishs/silver.png";
import sturgeon from "./fishs/sturgeon.png";
import birch from "./trees/birch.png";
import linden from "./trees/linden.png";
import marple from "./trees/maple.png";
import rowan from "./trees/rowan.png";
import error from "./../../media/error.png";
import right from "./../../media/right.png";

export const Page16 = () => {
  const [slide, setSlide] = useState(false);
  const [hide, setHide] = useState(styles.opacityUp);
  const [firstHandler, setFirstHandler] = useState(styles.opacityDown);
  const [secondHandler, setSecondHandler] = useState(styles.opacityDown);
  const [thirdHandler, setThirdHandler] = useState(styles.opacityDown);
  const [fourthHandler, setFourthHandler] = useState(styles.opacityDown);
  const handleClick = (a) => {
    if (a === 1) {
      setFirstHandler(styles.opacityUp);
    }
    if (a === 2) {
      setSecondHandler(styles.opacityUp);
    }
    if (a === 3) {
      setThirdHandler(styles.opacityUp);
    }
    if (a === 4) {
      setFourthHandler(styles.opacityUp);
    }
    if (a === 3 && !slide) {
      setTimeout(() => {setHide(styles.opacityDown);}, 1500);
      setTimeout(() => {setFirstHandler(styles.opacityDown);}, 2000);
      setTimeout(() => {setSecondHandler(styles.opacityDown);}, 2000);
      setTimeout(() => {setThirdHandler(styles.opacityDown);}, 2000);
      setTimeout(() => {setFourthHandler(styles.opacityDown);}, 2000);
      setTimeout(() => {setSlide(true);}, 2050);
      setTimeout(() => {setHide(styles.opacityUp);}, 2100);
    }
  };

  return (
    <div className="page">
      <div style={{...styles.headerWrapper, ...hide}}>
        <span style={styles.header}>{slide ? "Определи из предложенных деревьев липу" : "Определи из предложенных рыб карпа"}</span>
      </div>
      <div onClick={() => handleClick(1)} style={{...styles.select, ...styles.first, ...hide}}>
        <div style={styles.imageWrapper}>
          <img src={slide ? marple : silver} alt="" />
        </div>
        <div style={{...styles.answer, ...firstHandler}}>
          <img src={error} alt="" />
          <span style={styles.answerText}>{slide ? "Клён" : "Толстолобик"}</span>
        </div>
      </div>
      <div onClick={() => handleClick(2)} style={{...styles.select, ...styles.second, ...hide}}>
        <div style={styles.imageWrapper}>
          <img style={styles.image} src={slide ? linden : sturgeon} alt="" />
        </div>
        <div style={{...styles.answer, ...secondHandler}}>
          <img src={slide ? right : error} alt="" />
          <span style={styles.answerText}>{slide ? "Липа" : "Осётр"}</span>
        </div>
      </div>
      <div onClick={() => handleClick(3)} style={{...styles.select, ...styles.third, ...hide}}>
        <div style={styles.imageWrapper}>
          <img src={slide ? birch : carp} alt="" />
        </div>
        <div style={{...styles.answer, ...thirdHandler}}>
          <img src={slide ? error : right} alt="" />
          <span style={styles.answerText}>{slide ? "Берёза" : "Карп"}</span>
        </div>
      </div>
      <div onClick={() => handleClick(4)} style={{...styles.select, ...styles.fourth, ...hide}}>
        <div style={styles.imageWrapper}>
          <img src={slide ? rowan : catfish} alt="" />
        </div>
        <div style={{...styles.answer, ...fourthHandler}}>
          <img src={error} alt="" />
          <span style={styles.answerText}>{slide ? "Рябина" : "Сом"}</span>
        </div>
      </div>
      <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/> 
    </div>
  )
};

const styles = {
  headerWrapper: {
    position: "absolute",
    left: 90,
    top: 1002,
    width: 947,
    height: 156,
    display: "flex",
    justifyContent: "center"
  },
  header: {
      fontFamily: "Praho Pro",
      fontWeight: 500,
      fontSize: 48,
      lineHeight: "78px",
      textAlign: "center",
      width: "90%"
  },
  select: {
    position: "absolute",
    width: 453,
    height: 275,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  first: {
    bottom: 450,
    left: 68
  },
  second: {
    bottom: 450,
    left: 547
  },
  third: {
    bottom: 101,
    left: 65
  },
  fourth: {
    bottom: 92,
    left: 535
  },
  imageWrapper: {
    height: 217,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  answer: {
    display: "flex",
    marginTop: 10,
    alignItems: "center"
  },
  answerText: {
    fontSize: 32,
    lineHeight: "51px",
    fontFamily: "Praho Pro",
    marginTop: 10,
    marginLeft: 9
  },
  opacityDown: {
    opacity: 0,
    transition: "opacity 0.5s"
  },
  opacityUp: {
    opacity: 1,
    transition: "opacity 0.5s"
  }
}