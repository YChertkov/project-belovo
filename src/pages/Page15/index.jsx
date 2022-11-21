import { useDrag } from 'react-dnd';
import { usePreview } from 'react-dnd-preview';
import { useDrop } from 'react-dnd';
import { useState } from 'react';
import { useEffect } from 'react';
import img from "./bg.jpg";
import scene from "./scene.png";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";

export const First = ({translate}) => {
  const [{ isDragging }, firstRef, preview] = useDrag(() => ({
      type: 'first',
      collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
      }),
      item: { id: 1 }
  }));
  return (
      <>
        <img style={{
          ...styles.first, 
          opacity: isDragging ? 0 : 1,
          ...translate
        }} src={first} ref={firstRef} alt=""/>
      </>
  );
}

export const Second = ({translate}) => {
  const [{ isDragging }, secondRef, preview] = useDrag(() => ({
      type: 'second',
      collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
      }),
      item: { id: 2 }
  }));
  return (
    <>
      <img style={{
        ...styles.second, 
        opacity: isDragging ? 0 : 1,
        ...translate
      }} src={second} ref={secondRef} alt=""/>
    </>
  );
}

export const Third = ({translate}) => {
  const [{ isDragging }, thirdRef, preview] = useDrag(() => ({
      type: 'third',
      collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
      }),
      item: { id: 3 }
  }));
  return (
    <>
      <img style={{
        ...styles.third, 
        opacity: isDragging ? 0 : 1,
        ...translate
      }} src={third} ref={thirdRef} alt=""/>
    </>
  );
}

const MyPreview = ({setTranslate, setTranslate2, setTranslate3}) => {
  const {display, itemType, item, style, ref, monitor} = usePreview()
  useEffect(() => {
    if (!style) return;
    if (item.id === 1 && style?.transform.substr(20,5) <= 600 && style?.transform.substr(20,5) >= 200) {
      setTranslate({...style, pointerEvents: "all"})
    }
    if (item.id === 2 && style?.transform.substr(20,5) <= 600 && style?.transform.substr(20,5) >= 200) {
      setTranslate2({...style, pointerEvents: "all"})
    }
    if (item.id === 3 && style?.transform.substr(20,5) <= 600 && style?.transform.substr(20,5) >= 200) {
      setTranslate3({...style, pointerEvents: "all"})
    }
  }, [style]); 
  if (!display) {
    return null
  }
  if (item.id === 1) {
    return  <img src={first} style={style} alt="" />
  }
  if (item.id === 2) {
    return  <img src={second} style={style} alt="" />
  }
  if (item.id === 3) {
    return  <img src={third} style={style} alt="" />
  }
}

export const Page15 = () => {
  const [translate, setTranslate] = useState({});
  const [translate2, setTranslate2] = useState({});
  const [translate3, setTranslate3] = useState({});
  const [woodCollected, sceneRef] = useDrop(() => ({
    accept: ['first', 'second', 'third']
  }));
  return (
    <div className="page">
      {/* <img src={scene} style={styles.scene} ref={sceneRef} alt="" />
      <MyPreview setTranslate={setTranslate} setTranslate2={setTranslate2} setTranslate3={setTranslate3} />
      <First translate={translate} />
      <Second translate={translate2}/>
      <Third translate={translate3} /> */}
      <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/> 
    </div>
  )
};

const styles ={
  scene: {
    position: "absolute",
    top: 284,
    right: 75
  },
  first: {
    position: "absolute",
    top: 931,
    left: 1300
  },
  second: {
    position: "absolute",
    left: 1550,
    top: 1000
  },
  third: {
    position: "absolute",
    left: 1880,
    top: 920
  }
}