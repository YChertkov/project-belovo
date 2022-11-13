import { useDrop } from 'react-dnd';
import './index.css';
import img from "./p-11.jpg";
import train from "./p-3/Axe/axe.png";
import obj from "./p-3/hay.png";
import { useDrag} from 'react-dnd';
import { usePreview } from 'react-dnd-preview';

export const Train = () => {
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
      </>
  );
}

const MyPreview = () => {
  const {display, itemType, item, style} = usePreview()
  if (!display) {
    return null
  }
  if (item.id === 0) {
    return  <img src={train} style={style} alt="" />
  }
}

export const Page11 = () => {
  const [woodCollected, objRef] = useDrop(() => ({
    accept: ['axe', 'fork', 'sickle'],
    drop(item) {
      console.log(1)
    },
    hover(item, monitor) {
      console.log(item, monitor)
    }
  }));
  return (
  <div className="page">
    <img style={styles.obj} src={obj} alt="" ref={objRef}/>
    <MyPreview />
    <Train />
    <img src={img} style={{width: "2160px", height: "1920px"}} /> 
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