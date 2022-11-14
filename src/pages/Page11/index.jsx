import { useDrop } from 'react-dnd';
import { useState } from 'react';
import img from "./bg.jpg";
import train from "../Page3/Axe/axe.png";
import obj from "../Page3/hay/hay.png";
import { useDrag} from 'react-dnd';
import { usePreview } from 'react-dnd-preview';

export const Train = ({setTest}) => {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
      type: 'axe',
      collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
      }),
      item: { id: 0 }
  }));
  return (
      <>
        <img style={Object.assign({}, styles.train, { opacity: isDragging ? 0 : 1})} src={train} ref={drag} alt=""/>
        {isDragging ? null : setTest(train)}
      </>
  );
}

const MyPreview = ({test}) => {
  const {display, itemType, item, style} = usePreview()
  if (!display) {
    return null
  }
  if (item.id === 0) {
    return  <img src={test} style={style} alt="" />
  }
}

export const Page11 = () => {
  const [test, setTest] = useState(train);
  const [woodCollected, objRef] = useDrop(() => ({
    accept: ['axe', 'fork', 'sickle'],
    drop(item) {
      console.log(1)
    },
    hover(item, monitor) {
      setTest(obj)
    }
  }));
  return (
  <div className="page">
    <img style={styles.obj} src={obj} alt="" ref={objRef}/>
    <MyPreview test={test} />
    <Train setTest={setTest} />
    <img src={img} style={{width: "2160px", height: "1920px"}} alt=""/> 
  </div>
)};



const styles = {
  train: {
      position: "absolute",
      bottom: 100,
      right: 850
  },
  obj: {
    position: "absolute",
    width: 500,
    height: 500,
    top: 500,
    right: 500,
    zIndex: 0
  }
}