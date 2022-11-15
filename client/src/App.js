import "./App.css";
import Button from "./components/UI/Button/Button";
import Alphabets from "./components/UI/Tiles/Alphabets/Alphabets";
import Operators from "./components/UI/Tiles/Operators/Operators";
import Sign from "./components/UI/Tiles/Signs/Sign";
import Integer from "./components/UI/Tiles/Integer/Integer";
import PlaceHolderAlphabets from "./components/UI/PlaceHolderTiles/Alphabets/PlaceHolderAlphabets";
import PlaceHolderInteger from "./components/UI/PlaceHolderTiles/Integer/PlaceHolderInteger";
import PlaceHolderOperators from "./components/UI/PlaceHolderTiles/Operators/PlaceHolderOperators";
import PlaceHolderSign from "./components/UI/PlaceHolderTiles/Signs/PlaceHolderSign";
import { useState, useEffect } from "react";
const App = () => {
  const [clickCount, setClickCount] = useState(1);
  const [firstClick, setFirstClick] = useState(1);
  const [variableOne, setVariableOne] = useState({
    letter: "",
    value: undefined,
  });
  const [variableTwo, setVariableTwo] = useState({
    letter: "",
    value: undefined,
  });
  const [operator, setOperator] = useState("");
  const [sign, setSign] = useState("");
  const [integer, setInteger] = useState(undefined);

  useEffect(() => {
    const fetchFirstData = async (query) => {
      const response = await fetch(
        `https://my-evaluator-app-21.herokuapp.com/value/${query}`
      );
      const data = await response.json();

      setVariableOne((prevValue) => {
        return { letter: prevValue.letter, value: data.value };
      });
    };
    if (variableOne.letter !== "") {
      fetchFirstData(variableOne.letter);
    }
  }, [variableOne.letter]);

  useEffect(() => {
    const fetchSecondData = async (query) => {
      const response = await fetch(
        `https://my-evaluator-app-21.herokuapp.com/value/${query}`
      );
      const data = await response.json();

      setVariableTwo((prevValue) => {
        return { letter: prevValue.letter, value: data.value };
      });
    };

    if (variableTwo.letter !== "") {
      fetchSecondData(variableTwo.letter);
    }
  }, [variableTwo.letter]);

  const handleButtonClick = (e) => {
    setClickCount(clickCount + 1);

    if (clickCount === 1) {
      setFirstClick(Date.now());
    }

    if (clickCount === 2) {
      if (Date.now() - firstClick <= 300) {
        if (e.target.innerHTML === "&gt;") setSign(">");
        if (e.target.innerHTML === "&lt;") setSign("<");
        if (e.target.innerHTML === "=") setSign("=");
      } else {
        setClickCount(1);
        setFirstClick(Date.now());
      }
      setClickCount(1);
    }
  };

  const handlIntegerClick = (e) => {
    const integerValue = prompt("Please enter the value of Integer!");
    setInteger(integerValue);
  };

  const dragStart = (e) => {
    e.dataTransfer.setData("letter", e.target.innerHTML);
  };

  const drop = (e) => {
    const thingBeingDragged = e.dataTransfer.getData("letter");
    if (thingBeingDragged && variableOne.letter === "" && operator === "") {
      setVariableOne({ letter: thingBeingDragged, value: 0 });
    }

    if (thingBeingDragged && variableOne.letter !== "" && operator !== "") {
      setVariableTwo({ letter: thingBeingDragged, value: 0 });
    }

    if (
      thingBeingDragged === "+" ||
      thingBeingDragged === "-" ||
      thingBeingDragged === "/" ||
      thingBeingDragged === "*"
    ) {
      if (variableOne.letter !== "") setOperator(thingBeingDragged);
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  const evaluate = (e) => {
    e.preventDefault();
    let result;
    let a = variableOne.value;
    let b = variableTwo.value;
    let c;
    let i = parseInt(integer);

    if (operator === "+") c = a + b;
    if (operator === "-") c = a - b;
    if (operator === "*") c = a * b;
    if (operator === "/") c = a / b;

    if (sign === "=") result = c === i ? true : false;
    if (sign === "<") result = c < i ? true : false;
    if (sign === ">") result = c > i ? true : false;

    alert(`The expression is ${result}!`);
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="title">
        <h2>Evaluator</h2>
      </div>
      <section className="alphabets">
        <Alphabets startDrag={dragStart} isDraggable={true} text={"A"} />
        <Alphabets startDrag={dragStart} isDraggable={true} text={"B"} />
        <Alphabets startDrag={dragStart} isDraggable={true} text={"C"} />
        <Alphabets startDrag={dragStart} isDraggable={true} text={"D"} />
        <Alphabets startDrag={dragStart} isDraggable={true} text={"E"} />
      </section>
      <section className="signs">
        <Operators startDrag={dragStart} isDraggable={true} text={"+"} />
        <Operators startDrag={dragStart} isDraggable={true} text={"-"} />
        <Operators startDrag={dragStart} isDraggable={true} text={"*"} />
        <Operators startDrag={dragStart} isDraggable={true} text={"/"} />

        <Sign handleSignClick={handleButtonClick} text={"="} />
        <Sign handleSignClick={handleButtonClick} text={">"} />
        <Sign handleSignClick={handleButtonClick} text={"<"} />

        <Integer handleIntClick={handlIntegerClick} text={"RHS Integer"} />
      </section>
      <section className="expression">
        <PlaceHolderAlphabets
          updateAlphabetOne={setVariableOne}
          id={"1"}
          class={variableOne.letter !== "" ? "nofade" : "fade"}
          text={variableOne.letter}
          onDrop={drop}
          onDragOver={allowDrop}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
        />
        <PlaceHolderOperators
          updateOperator={setOperator}
          text={operator}
          class={operator !== "" ? "nofade" : "fade"}
          onDrop={variableOne.letter !== "" && drop}
          onDragOver={allowDrop}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
        />
        <PlaceHolderAlphabets
          updateAlphabetTwo={setVariableTwo}
          id={"2"}
          text={variableTwo.letter}
          class={variableTwo.letter !== "" ? "nofade" : "fade"}
          onDrop={operator !== "" && drop}
          onDragOver={allowDrop}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
        />
        <PlaceHolderSign
          updateSign={setSign}
          text={sign}
          class={sign !== "" ? "nofade" : "fade"}
        />
        <PlaceHolderInteger
          updateInteger={setInteger}
          text={integer}
          class={integer !== undefined ? "nofade" : "fade"}
        />
      </section>
      <div className="bottom">
        <Button onEvaluateClick={evaluate} text={"Evaluate"} />
      </div>
    </div>
  );
};

export default App;
