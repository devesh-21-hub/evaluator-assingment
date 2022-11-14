import "./PlaceHolderOperators.css";
const PlaceHolderOperators = (props) => {
  const handleCancleClick = () => {
    props.updateOperator("");
  };
  return (
    <div
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
      onDragEnter={props.onDragEnter}
      onDragLeave={props.dragLeave}
      draggable={props.isDraggable}
      className={`operatorholder ${props.class}`}
    >
      {props.text !== "" && (
        <span onClick={handleCancleClick} className="cancel">
          X
        </span>
      )}
      {props.text}
    </div>
  );
};

export default PlaceHolderOperators;
