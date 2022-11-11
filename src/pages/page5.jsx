import './index.css';
import img from "./p-5.jpg";
import hay from "./p-5/hay.png";
import wood from "./p-5/wood.png";
import wheat from "./p-5/wheat.png";
import axe from "./p-5/axe.png";
import fork from "./p-5/fork.png";
import sickle from "./p-5/sickle.png";

export const Page5 = () => (
  <div className="page">
    {/* <h1>PAGE 5</h1> */}
    <img draggable={true} style={styles.hay} src={hay} alt=""/>
    <img style={styles.wood} src={wood} alt=""/>
    <img style={styles.wheat} src={wheat} alt=""/>
    <img style={styles.axe} src={axe} alt=""/>
    <img style={styles.fork} src={fork} alt=""/>
    <img style={styles.sickle} src={sickle} alt=""/>
    <img src={img} style={{width: "1080px", height: "1920px"}} />  
  </div>
);

const styles = {
  hay: {
    position: "absolute",
    top: 542,
    right: 695
  },
  wood: {
    position: "absolute",
    top: 542,
    right: 357
  },
  wheat: {
    position: "absolute",
    top: 542,
    right: 18
  },
  axe: {
    position: "absolute",
    bottom: 678,
    left: 1304
  },
  fork: {
    position: "absolute",
    bottom: 658,
    right: 455
  },
  sickle: {
    position: "absolute",
    bottom: 678,
    right: 235
  }
}