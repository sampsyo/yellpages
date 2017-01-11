import * as React from "react";
import * as ReactDOM from "react-dom";

function Hello(props: { compiler: string; framework: string; }) {
  return <h1>Hello from {props.compiler} and {props.framework}!</h1>;
}

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
