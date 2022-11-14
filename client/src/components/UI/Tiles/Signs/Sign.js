import "./Sign.css";
const Sign = (props) => {
  return (
    <div onClick={props.handleSignClick} className={`sign ${props.class}`}>
      {props.text}
    </div>
  );
};

export default Sign;
