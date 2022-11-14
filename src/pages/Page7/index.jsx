import img from "./bg.jpg";
import coal from "./resourses/coal.png";
import iron from "./resourses/iron.png";
import lime from "./resourses/limestone.png";
import zinc from "./resourses/zinc.png";
import error from "../error.png";
import right from "../right.png";
import { useState } from 'react';

export function Page7() {
  const [coalHandler, setCoalHandl] = useState(styles.hide);
  const [ironHandler, setIronHandl] = useState(styles.hide);
  const [limeHandler, setLimeHandl] = useState(styles.hide);
  const [zincHandler, setZincHandl] = useState(styles.hide);
  return (
    <div className="page">
        <div onClick={() => setIronHandl(styles.show)} style={styles.iron}>
            <img width={356} style={styles.image} src={iron} alt=""/>
            <div style={ironHandler}>
                <img src={error} alt="" />
                <span style={styles.text}>Железная руда</span>
            </div>
        </div>
        <div onClick={() => setCoalHandl(styles.show)} style={styles.coal}>
            <img width={318} style={styles.image} src={coal} alt=""/>
            <div style={coalHandler}>
                <img src={error} alt="" />
                <span style={styles.text}>Каменный уголь</span>
            </div>
        </div>
        <div onClick={() => setZincHandl(styles.show)} style={styles.zinc}>
            <img width={356} style={styles.image} src={zinc} alt=""/>
            <div style={zincHandler}>
                <img src={right} alt="" />
                <span style={styles.text}>Цинковая руда</span>
            </div>
        </div>
        <div onClick={() => setLimeHandl(styles.show)} style={styles.lime}>
            <img width={356} style={styles.image} src={lime} alt=""/>
            <div style={limeHandler}>
                <img src={error} alt="" />
                <span style={styles.text}>Известняк</span>
            </div>
        </div>
        <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/>  
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
    iron: {
        position: "absolute",
        top: 408,
        left: 1220,
        display: "flex",
        flexDirection: "column"
    },
    coal: {
        position: "absolute",
        top: 408,
        left: 1668,
        display: "flex",
        flexDirection: "column"
    },
    zinc: {
        position: "absolute",
        top: 800,
        left: 1220,
        display: "flex",
        flexDirection: "column"
    },
    lime: {
        position: "absolute",
        top: 800,
        left: 1664,
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
    }
}