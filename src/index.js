import React from "react";
import ReactDom from "react-dom";
import Test from "./components/test";

function App() {
  return (
    <div>
      <Test />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById("app"));
