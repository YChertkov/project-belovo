import { useDrag} from 'react-dnd';
import { usePreview } from 'react-dnd-preview';
import { useDrop } from 'react-dnd';
import img from "./bg.jpg";
import scene from "./scene.png";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";
import { useState } from 'react';
import { useEffect } from 'react';

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

export const Second = () => {
  const [{ isDragging }, secondRef, preview] = useDrag(() => ({
      type: 'second',
      collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
      }),
      item: { id: 2 }
  }));
  return (
      <>
        <img style={Object.assign({}, styles.second, { opacity: isDragging ? 0 : 1})} src={second} ref={secondRef} alt=""/>
      </>
  );
}

export const Third = () => {
  const [{ isDragging }, thirdRef, preview] = useDrag(() => ({
      type: 'third',
      collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
      }),
      item: { id: 3 }
  }));
  return (
      <>
        <img className='lol' style={Object.assign({}, styles.third, { opacity: isDragging ? 0 : 1})} src={third} ref={thirdRef} alt=""/>
      </>
  );
}

const MyPreview = ({setTranslate}) => {
  const {display, itemType, item, style, ref, monitor} = usePreview()
  // console.log(style?.left, style?.top);
  console.log(style);
  useEffect(() => {
    if (!style) return;
    setTranslate(style)
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
  const [woodCollected, sceneRef] = useDrop(() => ({
    accept: ['first', 'second', 'third'],
    drop(item, monitor) {
      if (item.id === 3) {
        console.log(1);
      }}
  }));
  return (
    <div className="page">
      <img src={scene} style={styles.scene} ref={sceneRef} alt="" />
      <MyPreview setTranslate={setTranslate} />
      <First translate={translate} />
      <Second />
      <Third />
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
    left: 1234
  },
  second: {
    position: "absolute",
    right: 427,
    bottom: 721
  },
  third: {
    position: "absolute",
    right: 194,
    bottom: 660
  }
}