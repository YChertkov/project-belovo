import img from "./sickle.png";
import { useDrag } from 'react-dnd';

export const Sickle = () => {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'fork',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        item: { id: 1 }
    }));
    
    return (
        <>
            <img style={Object.assign({}, styles.sickle, { opacity: isDragging ? 0 : 1})} src={img} ref={drag} alt=""/>
        </>
    );
}

const styles ={
    sickle: {
        position: "absolute",
        bottom: 678,
        right: 235
    }
};