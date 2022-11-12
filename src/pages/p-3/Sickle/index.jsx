import img from "./sickle.png";
import { useDrag, DragSource, DragPreviewImage, connectDragPreview } from 'react-dnd';
import { Preview } from 'react-dnd-preview';

export const Sickle = () => {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: 'fork',
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        item: { id: 1 }
    }));

    const generatePreview2 = ({itemType, item, style}) => {
        return <img style={style} src={img} alt="" />
    };
    
    return (
        <>
            <Preview generator={generatePreview2} />
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