import { useDrop } from 'react-dnd';
import { useState, useEffect } from 'react';
import { usePreview } from 'react-dnd-preview';
import { Axe } from './Axe';
import { Fork } from './Fork';
import { Sickle } from './Sickle';
import img from "./bg.jpg";
import hay from "./hay/hay.png";
import hayDone from "./hay/hayDone.png";
import wood from "./wood/wood.png";
import woodDone from "./wood/woodDone.png";
import wheat from "./wheat/wheat.png";
import wheatDone from "./wheat/wheatDone.png";
import axe from "./Axe/axe.png";
import fork from "./Fork/fork.png";
import sickle from "./Sickle/sickle.png";

export const Page3 = () => {
  const [woodHandler, setWood] = useState(wood);
  const [hayHandler, setHay] = useState(hay);
  const [wheatHandler, setWheat] = useState(wheat);
  const [woodAnimation, setWoodAnimation] = useState(styles.wood);
  const [wheatAnimation, setWheatAnimation] = useState(styles.wheat);
  const [hayAnimation, setHayAnimation] = useState(styles.hay);
  const [opacity, setOpacity] = useState(styles.opacityDown);

  useEffect(() => {
    setTimeout(() => setOpacity(styles.opacityUp), 6600);
  }, []);

  const [, woodRef] = useDrop(() => ({
    accept: ['axe', 'fork', 'sickle'],
    drop(item) {
      if (item.id === 0) {
        setWood(woodDone);
      } else {
        setWoodAnimation(styles.wood2);
        setTimeout(function() { setWoodAnimation(styles.wood3) }.bind(this), 69);
        setTimeout(function() { setWoodAnimation(styles.wood2) }.bind(this), 139);
        setTimeout(function() { setWoodAnimation(styles.wood) }.bind(this), 209);
      }
    }
  }));
  const [, hayRef] = useDrop(() => ({
    accept: ['axe', 'fork', 'sickle'],
    drop(item) {
      if (item.id === 2) {
        setHay(hayDone);
      } else {
        setHayAnimation(styles.hay2);
        setTimeout(function() { setHayAnimation(styles.hay3) }.bind(this), 69);
        setTimeout(function() { setHayAnimation(styles.hay2) }.bind(this), 139);
        setTimeout(function() { setHayAnimation(styles.hay) }.bind(this), 209);
      }
    }
  }));
  const [, wheatRef] = useDrop(() => ({
    accept: ['axe', 'fork', 'sickle'],
    drop(item) {
      if (item.id === 1) {
        setWheat(wheatDone);
      } else {
        setWheatAnimation(styles.wheat2);
        setTimeout(function() { setWheatAnimation(styles.wheat3) }.bind(this), 69);
        setTimeout(function() { setWheatAnimation(styles.wheat2) }.bind(this), 139);
        setTimeout(function() { setWheatAnimation(styles.wheat) }.bind(this), 209);
      }
    }
  }));

  const MyPreview = () => {
    const {display, itemType, item, style} = usePreview()
    if (!display) {
      return null
    }
    if (item.id === 0) {
      return <img src={axe} style={style} alt="" />
    }
    if (item.id === 1) {
      return <img src={sickle} style={style} alt="" />
    }
    if (item.id === 2) {
      return <img src={fork} style={style} alt="" />
    }
  }

  return (
    <div className="page">
      <img className='hay' style={{...hayAnimation, ...(hayHandler === hayDone ? styles.hay : null), ...opacity}} src={hayHandler} ref={hayRef} alt=""/>
      <img className="wood" style={{...woodAnimation, ...opacity}} src={woodHandler} ref={woodRef} alt=""/>
      <img className="wheat" style={{...wheatAnimation, ...opacity}} src={wheatHandler} ref={wheatRef} alt=""/>
      <div style={opacity}>
        <MyPreview />
        {woodHandler === woodDone ? null : <Axe />}
        {hayHandler === hayDone ? null : <Fork />}
        {wheatHandler === wheatDone ? null : <Sickle />}
      </div>
      <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/>  
    </div>
  );
}

const styles = {
  hay: {
    position: "absolute",
    bottom: 1176,
    right: 756
  },
  hay2: {
    position: "absolute",
    bottom: 1176,
    right: 756,
    transform: "translateX(20px)",
    transitionDuration: "70ms"
  },
  hay3: {
    position: "absolute",
    bottom: 1176,
    right: 756,
    transform: "translateX(-20px)",
    transitionDuration: "70ms"
  },
  hayDone: {
    right: 690
  },
  wood: {
    position: "absolute",
    bottom: 1211,
    right: 395
  },
  wood2: {
    position: "absolute",
    bottom: 1211,
    right: 395,
    transform: "translateX(20px)",
    transitionDuration: "70ms"
  },
  wood3: {
    position: "absolute",
    bottom: 1211,
    right: 395,
    transform: "translateX(-20px)",
    transitionDuration: "70ms"
  },
  woodDone: {
    bottom: 1175,
    right: 420
  },
  wheat: {
    position: "absolute",
    bottom: 1170,
    right: 78
  },
  wheat2: {
    position: "absolute",
    bottom: 1170,
    right: 78,
    transform: "translateX(20px)",
    transitionDuration: "70ms"
  },
  wheat3: {
    position: "absolute",
    bottom: 1170,
    right: 78,
    transform: "translateX(-20px)",
    transitionDuration: "70ms"
  },
  opacityDown: {
    opacity: 0,
  },
  opacityUp: {
    opacity: 1,
  },
}