import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "",
  description:"" ,
  city:"",
  state:"",
  email:"", 
  open:false}
}



  // [open, setOpen] = React.useState(false);

  handleClickOpen = () => {
    this.setState({open:true});
  };

  handleClose = () => {
    this.setState({open:false});
  };

  render() {
    const {open}=this.state;
  return(
    <div>
      <Button variant="outlined" onClick={this.handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={this.handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To add an event to this location, please fill out the following information.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={this.props.name}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label={this.props.description}
            type="text"
            multiline
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            margin="dense"
            id="city"
            label={this.props.city}
            type="text"
            fullWidth
            variant="standard"
          />
                    <TextField
            autoFocus
            margin="dense"
            id="state"
            label={this.props.state}
            type="text"
            fullWidth
            variant="standard"
          />

                    <TextField
            autoFocus
            margin="dense"
            id="email"
            label={this.props.email}
            type="email"
            fullWidth
            variant="standard"
          />
              <FormGroup>

      <FormControlLabel control={<Checkbox />} label="Make Public" />
    </FormGroup>

        </DialogContent>
        <DialogActions>
          

          <Button onClick={this.handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}}

export default AddEvent;
