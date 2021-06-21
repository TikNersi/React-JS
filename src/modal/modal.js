import React,{useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { withStyles } from '@material-ui/core/styles';

import "./modal.css"

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

const StyledButtonAdd = withStyles({
  root: {
    background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
    borderRadius: 5,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [fieldsState, setFieldsState] = useState({
    projectName: "",
    projectSummary: "",
    date: new Date(),
});


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const dataSender = (e) => {
    e.preventDefault()
    
    const {name, summary, date,} = fieldsState;
    const data = {name,  summary,  date,} 
    props.addProject(data)
    
    console.log(props)
    // this.setState({
    //     name: "",
    //     summary: "",
    //     date: new Date(),
    // })

}
const changeProjectName = (e) => {
  
  setFieldsState({
    ...fieldsState,
    name: e
  })

} 
const changeProjectSummary = (e) => {
  
  setFieldsState({
    ...fieldsState,
    summary: e
  })

} 


  
  return (
    <div className="container-modal">
      <StyledButton variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Project
      </StyledButton> 
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Project  <AssignmentIcon /> </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={fieldsState.name}
            onChange={event => changeProjectName(event.target.value)}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Summary"
            type="text"
            value={fieldsState.summary}
            onChange={event => changeProjectSummary(event.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <StyledButtonAdd onClick={dataSender} type ='submit' color="primary">
            Add Project
          </StyledButtonAdd>
        </DialogActions>
      </Dialog>
    </div>
  );
}
