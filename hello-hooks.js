import React from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = React.useState("");

  return (
    <>
      <CounterInput setCounter={setCounter} />
      <CounterOutput counter={counter} />
    </>
  );
}

function CounterInput({ setCounter }) {
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

function CounterOutput({ counter }) {
  return (
    <p>
      Output: <br />
      {counter}
    </p>
  );
}
