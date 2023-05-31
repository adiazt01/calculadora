import { useState, useRef } from "react";
import DigitButton from "./components/buttons/DigitButton";
import OperationButton from "./components/buttons/OperationButton";
import "/src/styles/App.css";
import "/src/styles/Buttons.css";
import "/src/styles/input.css";
import { evaluate } from "mathjs";

function App() {
  const [input, setinput] = useState("");
  const [result, setresult] = useState("");
  const inputDigit = useRef(null);

  function operacion() {
    const inputDigitValue = inputDigit.current.value;
    try {
      setresult(evaluate(inputDigitValue));
      setinput("");
    } catch {
      setinput("");
      setresult("Syntax error");
    }
  }

  return (
    <main className="app">
      <div className="calculadora">
        <div className="container__input">
          <input className="container__input entry" type="text" value={input} ref={inputDigit} disabled />
          <input className="container__input result" type="text" value={result} disabled />
        </div>
        <div className="container__digit">
          <div className="container__columna">
            <DigitButton digit={7} input={input} setinput={setinput} />
            <DigitButton digit={4} input={input} setinput={setinput} />
            <DigitButton digit={1} input={input} setinput={setinput} />
            <DigitButton digit={0} input={input} setinput={setinput} />
          </div>
          <div className="container__columna">
            <DigitButton digit={8} input={input} setinput={setinput} />
            <DigitButton digit={5} input={input} setinput={setinput} />
            <DigitButton digit={2} input={input} setinput={setinput} />
            <OperationButton digit={"."} input={input} setinput={setinput} />
          </div>
          <div className="container__columna">
            <DigitButton digit={9} input={input} setinput={setinput} />
            <DigitButton digit={6} input={input} setinput={setinput} />
            <DigitButton digit={3} input={input} setinput={setinput} />
            <button className="button resultB" onClick={operacion}>=</button>
          </div>
          <div className="container__columna">
            <OperationButton digit={"/"} input={input} setinput={setinput} />
            <OperationButton digit={"-"} input={input} setinput={setinput} />
            <OperationButton digit={"+"} input={input} setinput={setinput} />
            <OperationButton digit={"*"} input={input} setinput={setinput} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
