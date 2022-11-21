import { useDrag } from 'react-dnd';
import { useDrop } from 'react-dnd';
import { usePreview } from 'react-dnd-preview';
import { useState } from 'react';
import img from "./bg.jpg";
import bomb from "./media/bomb.png";
import mortar from "./media/mortar.png";
import plane from "./media/plane.png";
import radio from "./media/radio.png";
import scope from "./media/scope.png";
import tank from "./media/tank.png";
import right from "../../media/right.png";

export const Scope = () => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
      type: 'scope',
      collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
      }),
      item: { id: 0 }
  }));

  return (
      <div style={styles.scope}>
          <img width={200} height={191} style={{...styles.scope1, ...{ opacity: isDragging ? 0 : 1}}} src={scope} ref={drag} alt=""/>
          <span style={{...styles.text, ...(isDragging ? styles.opacityDown : styles.opacityUp), ...styles.scopeText}}>Прицел</span>
      </div>
  );
}
export const Radio = () => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
      type: 'radio',
      collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
      }),
      item: { id: 1 }
  }));

  return (
      <div style={styles.radio}>
          <img width={224} height={191} style={Object.assign({}, styles.scope1, { opacity: isDragging ? 0 : 1}, {marginLeft: 9})} src={radio} ref={drag} alt=""/>
          <span style={{...styles.text, ...(isDragging ? styles.opacityDown : styles.opacityUp), ...styles.radioText}}>Радиостанция "Малютка"</span>
      </div>
  );
}
export const Bomb = () => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
      type: 'bomb',
      collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
      }),
      item: { id: 2 }
  }));

  return (
      <div style={styles.bomb}>
          <img width={214} height={210} style={Object.assign({}, styles.scope1, { opacity: isDragging ? 0 : 1})} src={bomb} ref={drag} alt=""/>
          <span style={{...styles.text, ...(isDragging ? styles.opacityDown : styles.opacityUp), ...styles.bombText}}>Взрыватель для авиабомб</span>
      </div>
  );
}


export const Page13 = () => {
  const [tankHandler, setTank] = useState(null);
  const [planeHandler, setPlane] = useState(null);
  const [mortarHandler, setMortar] = useState(null);
  const [tankAnimation, setTankAnimation] = useState(styles.tank);
  const [mortarAnimation, setMortarAnimation] = useState(styles.mortar);
  const [planeAnimation, setPlaneAnimation] = useState(styles.plane);
  const MyPreview = () => {
    const {display, itemType, item, style, ref, monitor} = usePreview()
      if (!display) {
        return null
      }
      if (item.id === 0) {
        return  <img src={scope} style={style} alt="" />
      }
      if (item.id === 1) {
        return  <img src={radio} style={style} alt="" />
      }
      if (item.id === 2) {
        return  <img src={bomb} style={style} alt="" />
      }
    };

  const [, tankRef] = useDrop(() => ({
    accept: ['bomb', 'scope', 'radio'],
    drop(item) {
      if (item.id === 1) {
        setTank(styles.opacityUp);
      } else {
        setTankAnimation(styles.tank2);
        setTimeout(function() { setTankAnimation(styles.tank3) }.bind(this), 69);
        setTimeout(function() { setTankAnimation(styles.tank2) }.bind(this), 139);
        setTimeout(function() { setTankAnimation(styles.tank) }.bind(this), 209);
      }
    }
  }));
  const [, planeRef] = useDrop(() => ({
    accept: ['bomb', 'scope', 'radio'],
    drop(item) {
      if (item.id === 2) {
        setPlane(styles.opacityUp);
      } else {
        setPlaneAnimation(styles.plane2);
        setTimeout(function() { setPlaneAnimation(styles.plane3) }.bind(this), 69);
        setTimeout(function() { setPlaneAnimation(styles.plane2) }.bind(this), 139);
        setTimeout(function() { setPlaneAnimation(styles.plane) }.bind(this), 209);
      }
    }
  }));
  const [, mortarRef] = useDrop(() => ({
    accept: ['bomb', 'scope', 'radio'],
    drop(item) {
      if (item.id === 0) {
        setMortar(styles.opacityUp);
      } else {
        setMortarAnimation(styles.mortar2);
        setTimeout(function() { setMortarAnimation(styles.mortar3) }.bind(this), 69);
        setTimeout(function() { setMortarAnimation(styles.mortar2) }.bind(this), 139);
        setTimeout(function() { setMortarAnimation(styles.mortar) }.bind(this), 209);
      }
    }
  }));
  return (
    <div className="page">
      <img src={right} style={{...styles.right1, ...tankHandler}} alt="" />
      <img src={right} style={{...styles.right2, ...planeHandler}} alt="" />
      <img src={right} style={{...styles.right3, ...mortarHandler}} alt="" />
      <img className='plane' style={planeAnimation} src={plane} ref={planeRef} alt=""/>
      <img className="tank" style={tankAnimation} src={tank} ref={tankRef} alt=""/>
      <img className="mortar" style={mortarAnimation} src={mortar} ref={mortarRef} alt=""/>
      <MyPreview />
      {mortarHandler === styles.opacityUp ? null : <Scope />}
      {tankHandler === styles.opacityUp ? null : <Radio />}
      {planeHandler === styles.opacityUp ? null : <Bomb />}
      <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/> 
    </div>
  )
};

const styles = {
  scope: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    right: 735,
    top: 785
  },
  radio: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    right: 428,
    top: 785
  },
  bomb: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    right: 107,
    top: 775
  },
  bombText: {
    marginTop: 25
  },
  radioText: {
    left: 16,
    position: "absolute",
    top: 191
  },
  text: {
    marginTop: 35,
    fontFamily: "B52",
    fontSize: 32,
    lineHeight: "24px",
    textAlign: "center",
    width: 217
  },
  opacityDown: {
    opacity: 0,
    transition: "opacity 0.3s"
  },
  opacityUp: {
    opacity: 1,
    transition: "opacity 0.3s"
  },
  plane: {
    position: "absolute",
    top: 268,
    right: 416
  },
  plane2: {
    position: "absolute",
    top: 268,
    right: 416,
    transform: "translateX(20px)",
    transitionDuration: "70ms"
  },
  plane3: {
    position: "absolute",
    top: 268,
    right: 416,
    transform: "translateX(-20px)",
    transitionDuration: "70ms"
  },
  tank: {
    position: "absolute",
    top: 268,
    right: 736
  },
  tank2: {
    position: "absolute",
    top: 268,
    right: 736,
    transform: "translateX(20px)",
    transitionDuration: "70ms"
  },
  tank3: {
    position: "absolute",
    top: 268,
    right: 736,
    transform: "translateX(-20px)",
    transitionDuration: "70ms"
  },
  mortar: {
    position: "absolute",
    top: 290,
    right: 86
  },
  mortar2: {
    position: "absolute",
    top: 290,
    right: 86,
    transform: "translateX(20px)",
    transitionDuration: "70ms"
  },
  mortar3: {
    position: "absolute",
    top: 290,
    right: 86,
    transform: "translateX(-20px)",
    transitionDuration: "70ms"
  },
  right1: {
    position: "absolute",
    top: 350,
    right: 850,
    opacity: 0
  },
  right2: {
    position: "absolute",
    right: 500,
    top: 350,
    opacity: 0
  },
  right3: {
    position: "absolute",
    top: 350,
    right: 180,
    opacity: 0
  },
  opacityUp: {
    opacity: 1,
    transition: "opacity 0.6s"
  }
}