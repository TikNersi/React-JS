import React from 'react'
import Fields from '../Fields/Fields';
import { Card } from 'react-bootstrap';
import { idGenerator } from '../helpers/idGenerator';
import "./project.css"
import { VscTrash } from 'react-icons/vsc'
import {FiEdit3} from "react-icons/fi"

class Project extends React.Component {

    constructor(props) {
        super(props)    
        
        this.state = {
          removableProjectId: "",
          editableProject: null,
           projects: [
               { name: "First Project",
                 summary: "First Summary",
                 id: idGenerator(),
                 date: new Date()
               },
               {
                name: "Second Project",
                summary: "Second Summary",
                id: idGenerator(),
                date: new Date()
               },
               {
                name: "Third Project",
                id: idGenerator(),
                summary: "Third Summary",
                date: new Date()
               }
           ] 

        }
        this.dataReceiver = this.dataReceiver.bind(this)

    }

    dataReceiver = (data) => {
        const projects = [...this.state.projects]
        projects.push({id:idGenerator(),...data})
        this.setState({...this.state,  projects})
    }

    cleanProject = (item) => {
      
      const projects  = [ ...this.state.projects ];
      const filteredProjects = projects.filter(project => project.id !== item.id) 
     
      this.setState({
        ...this.state,
        projects: filteredProjects,
      })
    }




    editProject = (project) => {
      
        this.setState({
          
          editableProject: project
        })
  
    }

    editSingleProject = (project) => {
      
      const projects = [ ...this.state.projects ]
      const projectIndex = projects.findIndex(item => item.id === project.id)
      projects[projectIndex] = project
   

        this.setState({
          
          projects
        })
  
    }

    


    render() {
            return(
                  <div className='projects-form-container'>
                      <Fields editableProject={this.state.editableProject} editSingleProject={this.editSingleProject} dataReceiver={this.dataReceiver} />
                <div className = "projects-container"> 
                   {this.state.projects.map(item => {
                           
                 return  <Card key={item.id} border="secondary" style={{ width: '18rem', margin: "1rem" }}>
                <span className="trash"><FiEdit3 onClick={() => this.editProject(item)} /> <VscTrash onClick={() => this.cleanProject(item)} /></span>
                   
                    <Card.Header>{item.name}</Card.Header>
                    <Card.Body>
                      <Card.Title>{item.summary}</Card.Title>
                      <Card.Text>
                      {item.date.toLocaleString()}
                      </Card.Text>
                    </Card.Body>
                  </Card> 
                   })}
                </div>
                </div>
            )

    }

}

export default Project
