import './index.css';
import img from "./p-5.jpg";
import pick from "./p-5/pick.png";
import hoe from "./p-5/hoe.png";
import pick2 from "./p-5/pick2.png";
import torch from "./p-5/torch.png";
import error from "./p-5/error.png";
import right from "./p-5/right.png";
import { useState } from 'react';

export function Page5() {
  const [pickState, setPick] = useState(false);
  const [hoeState, setHoe] = useState(false);
  const [pick2State, setPick2] = useState(false);
  const [torchState, setTorch] = useState(false);
  return (
    <div className="page">
      {/* <h1>PAGE 7</h1> */}
      <img onClick={() => setPick(true)} style={styles.pick} src={pickState ? error : pick} alt=""/>
      <img onClick={() => setHoe(true)} style={styles.hoe} src={hoeState ? right : hoe} alt=""/>
      <img onClick={() => setPick2(true)} style={styles.pick2} src={pick2State ? error : pick2} alt=""/>
      <img onClick={() => setTorch(true)} style={styles.torch} src={torchState ? error : torch} alt=""/>
      <img src={img} style={{width: "2160px", height: "1920px"}} />  
    </div>
  )
};

const styles = {
  pick: {
    position: "absolute",
    top: 409,
    right: 742,
    width: 274,
    height: 372
  },
  hoe: {
    position: "absolute",
    top: 409,
    right: 498,
    width: 274,
    height: 372
  },
  pick2: {
    position: "absolute",
    top: 409,
    right: 293,
    width: 274,
    height: 372
  },
  torch: {
    position: "absolute",
    top: 409,
    right: 60,
    width: 274,
    height: 372
  }
}