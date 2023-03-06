import React from 'react';
import SelectEventCard from "../Eclipse/SelectEventCard";
import SideDrawer from "../Eclipse/SideDrawer.js";
import './Home.css';
import AddEvent from "../Eclipse/AddEvent.js"
import Button from '@mui/material/Button';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
    }};

  handleClickOpen = () => {
    this.setState({open:true});
  };
  handleClickClose = () => {
    this.setState({open:false})
  };

  render() {
    return (
      <>
        <div>

          <SelectEventCard
            name="Event Name"
            description=" Join us for this amazing event. Wide panoramic views. Live Music! Vendors include Red Bull and SpaceX." />

<Button variant="outlined" onClick={this.handleClickOpen}>
        Open form dialog
      </Button>
            <AddEvent
            name="Event Name"
            description="Description"
            city="City"
            state="State"
            email="email"
            open={this.state.open}
            handleClickClose={this.handleClickClose}
            />
          <SideDrawer
          name="Event Name"
          description= " Join us for this amazing event. Wide panoramic views. Live Music! Vendors include Red Bull and SpaceX."
          city="City"
          state="State"
          additionalInfo="Additional Info"
          />
        </div>
        <p>This is the Home Page</p>
      </>
    );
  }
}

export default Home;