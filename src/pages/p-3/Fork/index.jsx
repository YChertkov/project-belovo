import img from "./fork.png";
import { useDrag } from 'react-dnd';

export const Fork = () => {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'fork',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        item: { id: 2 }
    }));
    
    return (
        <>
            <img style={Object.assign({}, styles.fork, { opacity: isDragging ? 0 : 1})} src={img} ref={drag} alt=""/>
        </>
    );
}


const styles ={
    fork: {
        position: "absolute",
        bottom: 658,
        right: 455
    },
};