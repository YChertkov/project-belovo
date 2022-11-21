import { useState } from 'react';
import img from "./bg.jpg";
import birch1 from "./trees/birch.png";
import linden1 from "./trees/linden.png";
import rowan1 from "./trees/rowan.png";
import birch2 from "./treeLeaf/birch.png";
import linden2 from "./treeLeaf/linden.png";
import rowan2 from "./treeLeaf/rowan.png";
import birch3 from "./fetus/birch.png";
import linden3 from "./fetus/linden.png";
import rowan3 from "./fetus/rowan.png";
import error from "./../../media/error.png";
import right from "./../../media/right.png";

export const Page16 = () => {
  const leftPic = [birch1, linden2, rowan3];
  const middlePic = [linden1, rowan2, birch3];
  const rightPic = [rowan1, birch2, linden3];
  const leftText = ["Берёза", "Липа", "Рябина"];
  const middleText = ["Липа", "Рябина", "Бёреза"];
  const rightText = ["Рябина", "Берёза", "Липа"];
  const rightAnswer = ["middle", "left", "right"];
  const [page, setPage] = useState(0);
  const [justify, setJustify] = useState(null);
  const [slide, setSlide] = useState(false);
  const [hide, setHide] = useState(styles.opacityUp);
  const [firstHandler, setFirstHandler] = useState(styles.opacityDown);
  const [secondHandler, setSecondHandler] = useState(styles.opacityDown);
  const [thirdHandler, setThirdHandler] = useState(styles.opacityDown);
  const handleClick = (a) => {
    if (a === "left") {
      setFirstHandler(styles.opacityUp);
    }
    if (a === "middle") {
      setSecondHandler(styles.opacityUp);
    }
    if (a === "right") {
      setThirdHandler(styles.opacityUp);
    }
    if (a === rightAnswer[page] && page < 2) {
      setTimeout(() => {setHide(styles.opacityDown);}, 1500);
      setTimeout(() => {setFirstHandler(styles.opacityDown);}, 1500);
      setTimeout(() => {setSecondHandler(styles.opacityDown);}, 1500);
      setTimeout(() => {setThirdHandler(styles.opacityDown);}, 1500);
      setTimeout(() => {setPage(page + 1);}, 1900);
      setTimeout(() => {setJustify(styles.notFirst);}, 1900);
      setTimeout(() => {setHide(styles.opacityUp);}, 1910);
    }
  };

  return (
    <div className="page">
      <div style={styles.content}>
        <div onClick={() => handleClick("left")} style={{...styles.select, ...styles.first, ...hide, ...justify}}>
          <div style={styles.imageWrapper}>
            <img src={leftPic[page]} alt="" />
          </div>
          <div style={{...styles.answer, ...firstHandler}}>
            <img src={rightAnswer[page] === "left" ? right : error} alt="" />
            <span style={styles.answerText}>{leftText[page]}</span>
          </div>
        </div>
        <div onClick={() => handleClick("middle")} style={{...styles.select, ...styles.second, ...hide, ...justify}}>
          <div style={styles.imageWrapper}>
            <img style={styles.image} src={middlePic[page]} alt="" />
          </div>
          <div style={{...styles.answer, ...secondHandler}}>
            <img src={rightAnswer[page] === "middle" ? right : error} alt="" />
            <span style={styles.answerText}>{middleText[page]}</span>
          </div>
        </div>
        <div onClick={() => handleClick("right")} style={{...styles.select, ...styles.third, ...hide, ...justify}}>
          <div style={styles.imageWrapper}>
            <img src={rightPic[page]} alt="" />
          </div>
          <div style={{...styles.answer, ...thirdHandler}}>
            <img src={rightAnswer[page] === "right" ? right : error} alt="" />
            <span style={styles.answerText}>{rightText[page]}</span>
          </div>
        </div>
      </div>
      <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/> 
    </div>
  )
};

const styles = {
  content: {
    position: "absolute",
    display: "flex",
    width: 912,
    height: 677,
    bottom: 45,
    left: 99,
    justifyContent: "space-between"
  },
  select: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  notFirst: {
    justifyContent: "center"
  },
  imageWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  answer: {
    display: "flex",
    marginTop: 43,
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
    transition: "opacity 0.4s"
  },
  opacityUp: {
    opacity: 1,
    transition: "opacity 0.4s"
  }
}