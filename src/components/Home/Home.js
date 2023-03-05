import React from 'react';
import SelectEventCard from "../Eclipse/SelectEventCard";
import TemporaryDrawer from "../Eclipse/SideDrawer.js";
import './Home.css';
import AddEvent from "../Eclipse/AddEvent.js"

class Home extends React.Component {
  render() {
    return (
      <>
        <div>
          <SelectEventCard
            name="Event Name"
            description=" Join us for this amazing event. Wide panoramic views. Live Music! Vendors include Red Bull and SpaceX." />
            <AddEvent
            name="Event Name"
            description="Description"
            city="City"
            state="State"
            email="email"
            />
          <TemporaryDrawer />
        </div>
        <p>This is the Home Page</p>
      </>
    );
  }
}

export default Home;