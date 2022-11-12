import img from "./fork.png";
import { useDrag, DragSource, DragPreviewImage, connectDragPreview } from 'react-dnd';
import { Preview } from 'react-dnd-preview';

export const Fork = () => {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'fork',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        item: { id: 2 }
    }));

    const generatePreview2 = ({itemType, item, style}) => {
        return <img style={style} src={img} alt="" />
    };
    
    return (
        <>
            <Preview generator={generatePreview2} />
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