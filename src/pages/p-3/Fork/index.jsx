import img from "./fork.png";
import { useDrag } from 'react-dnd'

export const Fork = () => {
    const [collected, drag] = useDrag(() => ({
        type: 'fork',
        item: { id: 2 }
    }));
    return (
        <img style={styles.fork} src={img} alt="" ref={drag} {...collected}/>
    );
}

const styles ={
    fork: {
        position: "absolute",
        bottom: 658,
        right: 455
    },
};