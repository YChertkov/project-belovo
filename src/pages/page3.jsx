import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { Axe } from './p-3/Axe';
import './index.css';
import img from "./p-3.jpg";
import hay from "./p-3/hay.png";
import wood from "./p-3/wood.png";
import wheat from "./p-3/wheat.png";
import fork from "./p-3/fork.png";
import sickle from "./p-3/sickle.png";

export const Page3 = () => {
  const [ done, setDone ] = useState(wood);
  const [collectedProps, drop] = useDrop(() => ({
    accept: 'axe',
    collect: () => setDone(wheat)
  }));

  return (
    <div className="page">
      {/* <h1>PAGE 5</h1> */}
      <img style={styles.hay} src={hay} alt=""/>
      <img style={styles.wood} src={done} alt="" ref={drop}/>
      <img style={styles.wheat} src={wheat} alt=""/>
      <Axe />
      <img style={styles.fork} src={fork} alt=""/>
      <img style={styles.sickle} src={sickle} alt=""/>
      <img src={img} style={{width: "2160px", height: "1920px"}} />  
    </div>
  );
}

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