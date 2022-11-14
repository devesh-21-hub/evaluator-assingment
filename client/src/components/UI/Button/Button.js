import "./Button.css";
const Button = (props) => {
  return (
    <button onClick={props.onEvaluateClick} className="btn">
      {props.text}
    </button>
  );
};

export default Button;
