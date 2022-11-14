import "./Alphabets.css";
const Alphabets = (props) => {
  return (
    <div
      onDragStart={props.startDrag}
      draggable={props.isDraggable}
      className={`alphabet ${props.class}`}
    >
      {props.text}
    </div>
  );
};

export default Alphabets;
