import img from "./axe.png";
import { useDrag } from 'react-dnd'

export const Axe = () => {
    const [collected, drag] = useDrag(() => ({
        type: 'axe',
        item: { id: 0 }
    }));
    return (
        <img style={styles.style} src={img} alt="" ref={drag} {...collected}/>
    );
}

const styles ={
    style: {
        position: "absolute",
        bottom: 678,
        left: 1304
    }
};