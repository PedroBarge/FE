import { useState } from "react";
import Button from "./components/Button/button";
import Numbers from "./components/Numbers/number";
function App() {
  const [total, setTotal] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const numberClick = (number) => {
    setInputValue(inputValue + number);
    console.log(number);
  };

  const operationClick = (operation) => {
    setInputValue(inputValue + operation);
  };

  const clearClick = () => {
    setInputValue("");
    setTotal(0);
  };

  return (
    <>
      <h1>Calculator with React</h1>
      <div>
        <input type="text" readOnly value={inputValue}></input>
        <Button text="C" handleClick={clearClick} />
      </div>
      <Button text="+" handleClick={() => operationClick("+")} />
      <Button text="-" handleClick={() => operationClick("-")} />
      <Button text="*" handleClick={() => operationClick("*")} />
      <Button text="/" handleClick={() => operationClick("/")} />
      <Button text="="/>
      <Numbers handleClick={numberClick} />
      <div>
        <h2>Total: {total}</h2>
      </div>
    </>
  );
}

export default App;
