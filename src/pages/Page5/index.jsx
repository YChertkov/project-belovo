import img from "./bg.jpg";
import pick from "./instruments/pick.png";
import hoe from "./instruments/hoe.png";
import pick2 from "./instruments/pick2.png";
import torch from "./instruments/torch.png";
import error from "../../media/error.png";
import right from "../../media/right.png";
import { useState } from 'react';

export function Page5() {
  const [pickHandler, setPickHandl] = useState(styles.hide);
  const [pick2Handler, setPick2Handl] = useState(styles.hide);
  const [hoeHandler, setHoeHandl] = useState(styles.hide);
  const [torchHandler, setTorchHandl] = useState(styles.hide);
  return (
    <div className="page">
      <div onClick={() => setPickHandl(styles.show)} style={styles.pick}>
        <img src={pick} alt=""/>
        <div style={pickHandler}>
          <span style={styles.text}>Обушок</span>
          <img src={error} alt="" />
        </div>
      </div>
      <div onClick={() => setHoeHandl(styles.show)} style={styles.hoe}>
        <img src={hoe} alt=""/>
        <div style={hoeHandler}>
          <span style={styles.text}>Мотыга</span>
          <img src={right} alt="" />
        </div>
      </div>
      <div onClick={() => setPick2Handl(styles.show)} style={styles.pick2}>
        <img src={pick2} alt=""/>
        <div style={pick2Handler}>
          <span style={styles.text}>Кирка</span>
          <img src={error} alt="" />
        </div> 
      </div>
      <div onClick={() => setTorchHandl(styles.show)} style={styles.torch}>
        <img src={torch} alt=""/>
        <div style={torchHandler}>
          <span style={styles.text}>Фонарь</span>
          <img src={error} alt="" />
         </div>
      </div>
      <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/>  
    </div>
  )
};

const styles = {
  pick: {
    position: "absolute",
    top: 349,
    right: 742,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  hoe: {
    position: "absolute",
    top: 349,
    right: 498,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  pick2: {
    position: "absolute",
    top: 349,
    right: 293,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  torch: {
    position: "absolute",
    top: 349,
    right: 60,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  text: {
    fontSize: 42,
    lineHeight: "42px",
    marginTop: 45,
    marginBottom: 6
  },
  hide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    opacity: 0
  },
  show: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    opacity: 1,
    transition: "opacity 0.2s"
  }
}