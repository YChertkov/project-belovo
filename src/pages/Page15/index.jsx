import { useDrag} from 'react-dnd';
import { usePreview } from 'react-dnd-preview';
import { useDrop } from 'react-dnd';
import img from "./bg.jpg";
import scene from "./scene.png";
import first from "./first.png";
import second from "./second.png";
import third from "./third.png";

export const First = () => {
  const [{ isDragging }, firstRef, preview] = useDrag(() => ({
      type: 'first',
      collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
      }),
      item: { id: 1 }
  }));
  return (
      <>
        <img style={Object.assign({}, styles.first, { opacity: isDragging ? 0 : 1})} src={first} ref={firstRef} alt=""/>
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
        <img style={Object.assign({}, styles.third, { opacity: isDragging ? 0 : 1})} src={third} ref={thirdRef} alt=""/>
      </>
  );
}

const MyPreview = () => {
  const {display, itemType, item, style} = usePreview()
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
  const [woodCollected, sceneRef] = useDrop(() => ({
    accept: ['first', 'second', 'third'],
    drop(item) {
      console.log(item)
    }
  }));
  return (
    <div className="page">
      <img src={scene} style={styles.scene} ref={sceneRef} alt="" />
      <MyPreview />
      <First />
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
      bottom: 662,
      right: 786
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