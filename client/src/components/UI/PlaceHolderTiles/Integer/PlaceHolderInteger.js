import "./PlaceHolderInteger.css";
const PlaceHolderInteger = (props) => {
  const handleCancleClick = () => {
    props.updateInteger(undefined);
  };

  return (
    <div className={`integerholder ${props.class}`}>
      {props.text !== undefined && (
        <span onClick={handleCancleClick} className="cancel">
          X
        </span>
      )}

      {props.text}
    </div>
  );
};

export default PlaceHolderInteger;
