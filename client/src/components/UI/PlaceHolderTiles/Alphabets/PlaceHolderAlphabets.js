import "./PlaceHolderAlphabets.css";
const PlaceHolderAlphabets = (props) => {
  const handleCancleClick = () => {
    if (props.id === "1")
      props.updateAlphabetOne({ letter: "", value: undefined });
    if (props.id === "2")
      props.updateAlphabetTwo({ letter: "", value: undefined });
  };
  return (
    <div
      onDrop={props.onDrop}
      onDragOver={props.onDragOver}
      onDragEnter={props.onDragEnter}
      onDragLeave={props.dragLeave}
      draggable={props.isDraggable}
      className={`alphabetholder ${props.class}`}
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

export default PlaceHolderAlphabets;
