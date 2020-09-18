import React from "react";
import { observable } from "mobx";
import { Provider, inject, observer } from "mobx-react";

const counter = observable({ value: 0 });

export default function App() {
  return (
    <Provider counter={counter}>
      <CounterInput />
      <CounterOutput />
    </Provider>
  );
}

const CounterInput = () => {
  const handleChange = (event) => {
    counter.value = event.target.value;
  };

  return (
    <label>
      Input: <br />
      <input type="number" onChange={handleChange} />
    </label>
  );
};

const CounterOutput = inject("counter")(
  observer(({ counter }) => {
    return (
      <p>
        Output: <br />
        {counter.value}
      </p>
    );
  })
);
