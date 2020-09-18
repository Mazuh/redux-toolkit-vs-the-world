import React from "react";
import "./styles.css";

const CounterContext = React.createContext();

export default function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      <CounterInput />
      <CounterOutput />
    </CounterContext.Provider>
  );
}

function CounterInput() {
  const { setCounter } = React.useContext(CounterContext);

  const handleChange = (event) => {
    setCounter(event.target.value);
  };

  return (
    <label>
      Input: <br />
      <input type="number" onChange={handleChange} />
    </label>
  );
}

function CounterOutput() {
  const { counter } = React.useContext(CounterContext);

  return (
    <p>
      Output: <br />
      {counter}
    </p>
  );
}
