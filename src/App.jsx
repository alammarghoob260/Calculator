import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleButtonClick = (buttonValue) => {
    setValue((prevValue) => prevValue + buttonValue);
  };

  const convertToString = (value) => {
    return value.toString();
  };

  const handleEqualsto = () => {
    try {
      setValue(eval(convertToString(value)));
    } catch (error) {
      setValue("Error");
    }
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <div>
      <input className="display" value={value} type="text" readOnly />
      <div className="buttons-container">
        <div>
          <button
            onClick={handleClear}
            style={{ background: "red", color: "white" }}
          >
            C
          </button>
          <button
            onClick={() => handleButtonClick("+/-")}
            style={{ background: "black", color: "white" }}
          >
            +/-
          </button>
          <button
            onClick={() => handleButtonClick("%")}
            style={{ background: "black", color: "white" }}
          >
            %
          </button>
          <button
            onClick={() => handleButtonClick("/")}
            style={{ background: "black", color: "white" }}
          >
            /
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button
            onClick={() => handleButtonClick("*")}
            style={{ background: "black", color: "white" }}
          >
            *
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button
            onClick={() => handleButtonClick("-")}
            style={{ background: "black", color: "white" }}
          >
            -
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button
            onClick={() => handleButtonClick("+")}
            style={{ background: "black", color: "white" }}
          >
            +
          </button>
        </div>
        <div>
          <button onClick={() => handleButtonClick("0")}>0</button>
          <button
            onClick={() => handleButtonClick(".")}
            style={{ background: "black", color: "white" }}
          >
            .
          </button>
          <button
            onClick={handleEqualsto}
            style={{ background: "green", color: "white" }}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
