import * as React from "react";
import * as ReactDOM from "react-dom";

interface ProjectProps {
  id: string;
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

interface ProjectsState {
  projects: ProjectProps[];
}

class Projects extends React.Component<{}, ProjectsState> {
  render() {
    if (this.state && this.state.projects) {
      console.log("state is", this.state);
      let projs = this.state.projects.map((props) => Project(props));
      return <div>{ projs }</div>;
    } else {
      return <span>loading</span>;
    }
  }

  async componentDidMount() {
    let response = await fetch('/data/projects');
    let data = await response.json();
    this.setState({projects: data});
  }
}

ReactDOM.render(
  <Projects />,
  document.getElementById("projects")
);
