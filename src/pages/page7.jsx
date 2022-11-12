import { Axe } from './p-7/Axe';
import './index.css';
import img from "./p-7.jpg";
import hay from "./p-7/hay.png";
import wood from "./p-7/wood.png";
import wheat from "./p-7/wheat.png";
import fork from "./p-7/fork.png";
import sickle from "./p-7/sickle.png";

export const Page7 = () => (
  <div className="page">
    {/* <h1>PAGE 5</h1> */}
    <img style={styles.hay} src={hay} alt=""/>
    <img style={styles.wood} src={wood} alt=""/>
    <img style={styles.wheat} src={wheat} alt=""/>
    <Axe />
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