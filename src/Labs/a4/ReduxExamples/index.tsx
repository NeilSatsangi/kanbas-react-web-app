import React from "react";
import HelloRedux from "./HelloRedux";
import CounterReducer from "./CounterRedux";
import AddRedux from "./AddRedux";

const ReduxExamples = () => {
  return(
    <div>
      <h2>Redux Examples</h2>
      <HelloRedux/>
      <CounterReducer/>
      <AddRedux/>
    </div>
  );
};

export default ReduxExamples;