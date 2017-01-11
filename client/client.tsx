interface Project {
  id: string;
  name: string;
  contact: string;
  description: string;
}

function ProjectDetail(props: Project) {
  return <div className="project">
    <h3>{ props.name }</h3>
    <address>{ props.contact }</address>
    <div className="body">
      { props.description }
    </div>
  </div>;
}

class ProjectList extends React.Component<{}, { projects: Project[] }> {
  render() {
    if (this.state && this.state.projects) {
      console.log("state is", this.state);
      let projs = this.state.projects.map((props) => ProjectDetail(props));
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
  <ProjectList />,
  document.getElementById("projects")
);
