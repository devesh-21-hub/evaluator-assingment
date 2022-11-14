import "./PlaceHolderSign.css";
const PlaceHolderSign = (props) => {
  const handleCancleClick = () => {
    props.updateSign("");
  };
  return (
    <div className={`signholder ${props.class}`}>
      {props.text !== "" && (
        <span onClick={handleCancleClick} className="cancel">
          X
        </span>
      )}{" "}
      {props.text}
    </div>
  );
};

export default PlaceHolderSign;
