import React from "react";
import Fields from "../Fields/Fields";
import { idGenerator } from "../helpers/idGenerator";
import "./project.css";
import FormDialog from "../modal/modal";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      removableProjectId: "",
      editableProject: null,
      projects: [
        {
          name: "First Project",
          summary: "First Summary",
          id: idGenerator(),
          date: new Date(),
        },
        {
          name: "Second Project",
          summary: "Second Summary",
          id: idGenerator(),
          date: new Date(),
        },
        {
          name: "Third Project",
          id: idGenerator(),
          summary: "Third Summary",
          date: new Date(),
        },
      ],
    };
  }

  addProject = (data) => {
    const projects = [...this.state.projects];
    projects.push({ id: idGenerator(), ...data });
    console.log(projects);

    this.setState({ ...this.state, projects });
  };

  cleanProject = (item) => {
    const projects = [...this.state.projects];
    const filteredProjects = projects.filter(
      (project) => project.id !== item.id
    );

    this.setState({
      ...this.state,
      projects: filteredProjects,
    });
  };

  editProject = (project) => {
    this.setState({
      editableProject: project,
    });
  };

  editSingleProject = (project) => {
    const projects = [...this.state.projects];
    const projectIndex = projects.findIndex((item) => item.id === project.id);
    projects[projectIndex] = project;

    this.setState({
      projects,
    });
  };

  render() {
    return (
      <>
        {" "}
        <div className="projects-form-container">
          <FormDialog addProject={this.addProject} />
          <Fields
            editableProject={this.state.editableProject}
            editSingleProject={this.editSingleProject}
            addProject={this.addProject}
          />

          <div className="projects-container">
            {this.state.projects.map((item) => {
              return (
                <Card key={item.id} className="card" style={{ display: "flex" }}>
                  <div className="edit-trash-container">
                    <DeleteIcon
                      onClick={() => this.cleanProject(item)}
                      id="delete-edit-icons"
                    />
                    <EditIcon
                      onClick={() => this.editSingleProject(item)}
                      id="delete-edit-icons"
                    />
                  </div>
                  <div className={{ display: "flex", flexDirection: "column" }}>
                    <CardContent className={{ flex: "1 0 auto" }}>
                      <Typography component="h5" variant="h5">
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {item.summary}
                      </Typography>
                    </CardContent>
                    <p>Date: {item.date.toLocaleString()}</p>
                    <div
                      className={{ display: "flex", alignItems: "center" }}
                    ></div>
                  </div>
                  <CardMedia
                    className={{ width: 151 }}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                  />
                </Card>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}
export default Project;
