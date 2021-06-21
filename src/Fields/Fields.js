import React from "react";
import "./fields.css"



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
    this.props.addProject(data)
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
       
</div>
    )}
}


export default Fields;