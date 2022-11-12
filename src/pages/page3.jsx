import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { Axe } from './p-3/Axe';
import { Fork } from './p-3/Fork';
import { Sickle } from './p-3/Sickle';
import './index.css';
import img from "./p-3.jpg";
import hay from "./p-3/hay.png";
import wood from "./p-3/wood.png";
import wheat from "./p-3/wheat.png";
import wheatDone from "./p-3/wheatDone.png";

export const Page3 = () => {
  const [woodHandler, setWood] = useState(wood);
  const [hayHandler, setHay] = useState(hay);
  const [wheatHandler, setWheat] = useState(wheat);
  const [showAxe, setShowAxe] = useState(false);
  const [error, setError] = useState(false);

  const [woodCollected, woodRef] = useDrop(() => ({
    accept: ['axe', 'fork', 'sickle'],
    drop(item) {
      if (item.id === 0) {
        setWood(wheatDone);
      } else {setError(1);}
    }
  }));
  const [hayCollected, hayRef] = useDrop(() => ({
    accept: ['axe', 'fork', 'sickle'],
    drop(item) {
      if (item.id === 2) {
        setHay(wheatDone);
      } else {setError(2);}
    }
  }));
  const [wheatCollected, wheatRef] = useDrop(() => ({
    accept: ['axe', 'fork', 'sickle'],
    drop(item) {
      if (item.id === 1) {
        setWheat(wheatDone);
      } else {setError(3);}
    }
  }));

  return (
    <div className="page">
      <img style={styles.hay} src={hayHandler} ref={hayRef} alt=""/>
      <img className="wood" style={styles.wood} src={woodHandler} ref={woodRef} alt=""/>
      <img className="wheat" style={styles.wheat} src={wheatHandler} ref={wheatRef} alt=""/>
      {showAxe === wheatDone ? null : <Axe setShowAxe={setShowAxe} />}
      {hayHandler === wheatDone ? null : <Fork />}
      {wheatHandler === wheatDone ? null : <Sickle />}
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
  }
}