import "./Operators.css";
const Operators = (props) => {
  return (
    <div
      onDragStart={props.startDrag}
      draggable={props.isDraggable}
      className={`operator ${props.class}`}
    >
      {props.text}
    </div>
  );
};

export default Operators;
