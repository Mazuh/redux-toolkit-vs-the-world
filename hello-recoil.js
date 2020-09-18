import React from "react";
import { RecoilRoot, atom, useRecoilState } from "recoil";

const counterAtom = atom({
  key: "counter",
  default: 0
});

export default function App() {
  return (
    <RecoilRoot>
      <CounterInput />
      <CounterOutput />
    </RecoilRoot>
  );
}

function CounterInput() {
  const [, setCounter] = useRecoilState(counterAtom);

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
  const [counter] = useRecoilState(counterAtom);

  return (
    <p>
      Output: <br />
      {counter}
    </p>
  );
}
