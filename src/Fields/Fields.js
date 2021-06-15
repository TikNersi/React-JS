import React from "react";
import "./fields.css"
import { Form, Button, } from "react-bootstrap";



 class Fields extends React.Component {

constructor(props) {
    super(props)



    this.state = {
        name: "",
        summary: "",
        date: new Date()
    }
    
 
}
componentDidUpdate(prevProps) {
    if (this.props.editableProject !== prevProps.editableProject) {
this.setState({
                ...this.state,
                ...this.props.editableProject
            })
        
    }
}

changeProjectName = (e) => {

    this.setState({ ...this.state, name: e.target.value});
}

changeProjectSummary = (e) => {

        this.setState({...this.state,  summary: e.target.value})
    
}


dataSender = (e) => {
    e.preventDefault()
    const {name, summary, date,} = this.state;
    const data = { name,  summary,  date,} 
    this.props.dataReceiver(data)
    this.setState({
        name: "",
        summary: "",
        date: new Date(),
    })

}

    editableProject = (e) => {
        e.preventDefault()
        this.props.editSingleProject(this.state)
    }


render() {
    return (
        <div className="fields">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Project Name</Form.Label>
            <Form.Control type="text" onChange={this.changeProjectName} value={this.state.name} placeholder="Name" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Short summary</Form.Label>
            <Form.Control type="text" onChange={this.changeProjectSummary} value={this.state.summary} placeholder="Type Short summary" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.dataSender}>
             Add Project
        </Button>
        <Button style = { {margin: "1rem"} } variant="primary" type="submit" onClick={this.editableProject}>
           Edit Project
        </Button>
</Form>
</div>
    )}
}


export default Fields;