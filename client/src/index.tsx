import * as React from "react";
import * as ReactDOM from "react-dom";

interface ProjectProps {
  name: string;
  contact: string;
  description: string;
}

function Project(props: ProjectProps) {
  return <div className="project">
    <h3>{ props.name }</h3>
    <address>{ props.contact }</address>
    <div className="body">
      { props.description }
    </div>
  </div>;
}

ReactDOM.render(
  <Project name="project name here" contact="person to contact"
    description="some body text" />,
  document.getElementById("example")
);
