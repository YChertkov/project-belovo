import { useDrag, DragSource, DragPreviewImage, connectDragPreview } from 'react-dnd';
import { Preview } from 'react-dnd-preview';

export const Axe = ({id, img, type}) => {
    const [{ isDragging }, drag, preview] = useDrag(() => ({
        type: type,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
        item: id
    }));

    const generatePreview = ({itemType, item, style}) => {
        return <img style={style} src={img} alt="" />
    };
    
    return (
        <>
            <Preview generator={generatePreview} />
            <img style={Object.assign({}, styles.style, { opacity: isDragging ? 0 : 1})} src={img} ref={drag} alt=""/>
        </>
    );
}

const styles ={
    style: {
        position: "absolute",
        bottom: 678,
        left: 1304
    },
    size: {
        width: 200,
        heigth: 200
    }
};