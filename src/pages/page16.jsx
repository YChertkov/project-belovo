import './index.css';
import img from "./p-16.jpg";
import bream from "./p-16/bream.png";
import carp from "./p-16/carp.png";
import perch from "./p-16/perch.png";
import pike from "./p-16/pike.png";
import error from "./error.png";
import right from "./right.png";
import { useState } from 'react';

export const Page16 = () => {
  const [breamHandler, setBreamHandl] = useState(styles.hide);
  const [carpHandler, setCarpHandl] = useState(styles.hide);
  const [perchHandler, setPerchHandl] = useState(styles.hide);
  const [pikeHandler, setPikeHandl] = useState(styles.hide);
  return (
    <div className="page">
      <div onClick={() => setBreamHandl(styles.show)} style={styles.bream}>
        <img width={386} style={styles.breamImage} src={bream} alt=""/>
        <div style={breamHandler}>
            <img src={error} alt="" />
            <span style={styles.breamText}>Лещ</span>
        </div>
      </div>
      <div onClick={() => setCarpHandl(styles.show)} style={styles.carp}>
            <img width={386} style={styles.image} src={carp} alt=""/>
            <div style={carpHandler}>
                <img src={right} alt="" />
                <span style={styles.text}>Карп</span>
            </div>
      </div>
      <div onClick={() => setPerchHandl(styles.show)} style={styles.perch}>
            <img width={386} style={styles.image} src={perch} alt=""/>
            <div style={perchHandler}>
                <img src={error} alt="" />
                <span style={styles.text}>Окунь</span>
            </div>
      </div>
      <div onClick={() => setPikeHandl(styles.show)} style={styles.pike}>
            <img width={386} style={styles.image} src={pike} alt=""/>
            <div style={pikeHandler}>
                <img src={error} alt="" />
                <span style={styles.text}>Щука</span>
            </div>
      </div>
      <img src={img} style={{width: "2160px", height: "1920px"}} /> 
    </div>
  )
};

const styles = {
  hide: {
      display: "flex",
      alignItems: "center",
      opacity: 0
  },
  show: {
      display: "flex",
      alignItems: "center",
      opacity: 1,
      transition: "opacity 0.2s",
      justifyContent: "center"
  },
  bream: {
      position: "absolute",
      bottom: 92,
      left: 573,
      display: "flex",
      flexDirection: "column"
  },
  carp: {
      position: "absolute",
      bottom: 101,
      left: 98,
      display: "flex",
      flexDirection: "column"
  },
  perch: {
      position: "absolute",
      bottom: 419,
      left: 596,
      display: "flex",
      flexDirection: "column"
  },
  pike: {
      position: "absolute",
      bottom: 420,
      left: 98,
      display: "flex",
      flexDirection: "column"
  },
  text: {
      fontSize: 42,
      lineHeight: "42px",
      marginTop: 15,
      marginLeft: 11
  },
  image: {
      margin: "auto"
  },
  breamImage: {
    margin: "auto",
    marginBottom: 35
  },
  breamText: {
    fontSize: 42,
    lineHeight: "42px",
    marginTop: 15,
    marginLeft: 11,
    marginBottom: 10
  }
}