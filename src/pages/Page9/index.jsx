import img from "./bg.jpg";
import error from "./media/error.png";
import right from "./media/right.png";
import first from "./media/first.png";
import second from "./media/second.png";
import third from "./media/third.png";
import fourth from "./media/fourth.png";

export const Page9 = () => (
  <div style={styles.content}>
    <div>
      <div style={styles.imageWrapper}>
        <img src={first} style={styles.image} alt=""/>
      </div>
      <span style={styles.textFirst}>взлёт</span>
      <img src={error} style={styles.imageFirst} alt=""/>
      <span style={styles.textSecond}>пилот</span>
      <img src={right} style={styles.imageSecond} alt=""/>
      <span style={styles.textThird}>скорость</span>
      <img src={error} style={styles.imageThird} alt=""/>
      <span style={styles.textFourth}>полоса</span>
      <img src={error} style={styles.imageFourth} alt=""/>
      <span style={styles.number}>1 из 4</span>
    </div>
    <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/> 
  </div>
);

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