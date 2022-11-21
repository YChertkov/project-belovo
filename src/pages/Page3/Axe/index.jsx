import img1 from "./axe.png";
import { useDrag} from 'react-dnd';

export const Axe = () => {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'axe',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        item: { id: 0 }
    }));

    return (
        <>
            <img style={{...styles.style, ...{ opacity: isDragging ? 0 : 1}}} src={img1} ref={drag} alt=""/>
        </>
    );
}

const styles ={
    style: {
        position: "absolute",
        bottom: 658,
        right: 686
    },
    size: {
        width: 200,
        heigth: 200
    }
};