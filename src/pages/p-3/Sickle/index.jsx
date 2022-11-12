import img from "./sickle.png";
import { useDrag } from 'react-dnd'

export const Sickle = () => {
    const [collected, drag] = useDrag(() => ({
        type: 'sickle',
        item: { id: 1 }
    }));
    return (
        <img style={styles.sickle} src={img} alt="" ref={drag} {...collected}/>
    );
}

const styles ={
    sickle: {
        position: "absolute",
        bottom: 678,
        right: 235
    }
};