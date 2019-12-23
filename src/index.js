import React from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Tab />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
