import "./Integer.css";
const Integer = (props) => {
  return (
    <div onClick={props.handleIntClick} className={`integer ${props.class}`}>
      {props.text}
    </div>
  );
};

export default Integer;
