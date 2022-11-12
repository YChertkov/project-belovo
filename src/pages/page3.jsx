import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { Axe } from './p-3/Axe';
import { Fork } from './p-3/Fork';
import { Sickle } from './p-3/Sickle';
import { usePreview } from 'react-dnd-preview';
import './index.css';
import img from "./p-3.jpg";
import hay from "./p-3/hay.png";
import wood from "./p-3/wood.png";
import wheat from "./p-3/wheat.png";
import wheatDone from "./p-3/wheatDone.png";
import axe from "./p-3/Axe/axe.png";
import fork from "./p-3/Fork/fork.png";
import sickle from "./p-3/Sickle/sickle.png";

export const Page3 = () => {
  const [woodHandler, setWood] = useState(wood);
  const [hayHandler, setHay] = useState(hay);
  const [wheatHandler, setWheat] = useState(wheat);
  const [error, setError] = useState(false);
  const [woodAnimation, setWoodAnimation] = useState(styles.wood);
  const [wheatAnimation, setWheatAnimation] = useState(styles.wheat);
  const [hayAnimation, setHayAnimation] = useState(styles.hay);

  const [woodCollected, woodRef] = useDrop(() => ({
    accept: ['axe', 'fork', 'sickle'],
    drop(item) {
      if (item.id === 0) {
        setWood(wheatDone);
      } else {
        setWoodAnimation(styles.wood2);
        setTimeout(function() { setWoodAnimation(styles.wood3) }.bind(this), 69);
        setTimeout(function() { setWoodAnimation(styles.wood2) }.bind(this), 139);
        setTimeout(function() { setWoodAnimation(styles.wood) }.bind(this), 209);
      }
    }
  }));
  const [hayCollected, hayRef] = useDrop(() => ({
    accept: ['axe', 'fork', 'sickle'],
    drop(item) {
      if (item.id === 2) {
        setHay(wheatDone);
      } else {
        setHayAnimation(styles.hay2);
        setTimeout(function() { setHayAnimation(styles.hay3) }.bind(this), 69);
        setTimeout(function() { setHayAnimation(styles.hay2) }.bind(this), 139);
        setTimeout(function() { setHayAnimation(styles.hay) }.bind(this), 209);
      }
    }
  }));
  const [wheatCollected, wheatRef] = useDrop(() => ({
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
      <img className='hay' style={hayAnimation} src={hayHandler} ref={hayRef} alt=""/>
      <img className="wood" style={woodAnimation} src={woodHandler} ref={woodRef} alt=""/>
      <img className="wheat" style={wheatAnimation} src={wheatHandler} ref={wheatRef} alt=""/>
      <div>
        <MyPreview />
        {woodHandler === wheatDone ? null : <Axe />}
        {hayHandler === wheatDone ? null : <Fork />}
        {wheatHandler === wheatDone ? null : <Sickle />}
      </div>
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
  hay2: {
    position: "absolute",
    top: 542,
    right: 695,
    transform: "translateX(20px)",
    transitionDuration: "70ms"
  },
  hay3: {
    position: "absolute",
    top: 542,
    right: 695,
    transform: "translateX(-20px)",
    transitionDuration: "70ms"
  },
  wood: {
    position: "absolute",
    top: 542,
    right: 357
  },
  wood2: {
    position: "absolute",
    top: 542,
    right: 357,
    transform: "translateX(20px)",
    transitionDuration: "70ms"
  },
  wood3: {
    position: "absolute",
    top: 542,
    right: 357,
    transform: "translateX(-20px)",
    transitionDuration: "70ms"
  },
  wheat: {
    position: "absolute",
    top: 542,
    right: 18
  },
  wheat2: {
    position: "absolute",
    top: 542,
    right: 18,
    transform: "translateX(20px)",
    transitionDuration: "70ms"
  },
  wheat3: {
    position: "absolute",
    top: 542,
    right: 18,
    transform: "translateX(-20px)",
    transitionDuration: "70ms"
  }
}