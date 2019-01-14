import React from "react";
import ReactDOM from "react-dom";
import "reference-tooltip";

const App = () => {
  return (
    <div>
      <h1>reference-tooltip-react-sample</h1>
      <p style={{ textAlign: "left" }}>
        left foo <referenced-word rwid="la">Los Angeles</referenced-word> bar
      </p>
      <p style={{ textAlign: "right" }}>
        right foo <referenced-word rwid="la">Los Angeles</referenced-word> bar
      </p>
      <p style={{ position: "absolute", bottom: "40px" }}>
        bottom foo <referenced-word rwid="la">Los Angeles</referenced-word> bar
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
