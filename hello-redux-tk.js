import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

const store = configureStore({ reducer: counterSlice.reducer });

export default function App() {
  return (
    <Provider store={store}>
      <CounterInput />
      <CounterOutput />
    </Provider>
  );
}

function CounterInput() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(counterSlice.actions.setValue(event.target.value));
  };

  return (
    <label>
      Input: <br />
      <input type="number" onChange={handleChange} />
    </label>
  );
}

function CounterOutput() {
  const counter = useSelector((state) => state.value);

  return (
    <p>
      Output: <br />
      {counter}
    </p>
  );
}
