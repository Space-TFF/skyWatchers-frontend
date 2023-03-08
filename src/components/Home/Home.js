import React from 'react';
import SelectEventCard from '../Eclipse/SelectEventCard';
import SideDrawer from '../Eclipse/SideDrawer.js';
import CountdownTimer from './CountdownTimer.js';
import './Home.css';
import AddEvent from '../Eclipse/AddEvent.js';
import Button from '@mui/material/Button';
import Autocomplete from 'react-google-autocomplete';
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			openAdd: false,
			openEvent: false,
			openDrawer: false,
			name: 'Event Name',
			description:
				' Join us for this amazing event. Wide panoramic views. Live Music! Vendors include Red Bull and SpaceX.',
			city: '',
			state: '',
			additionalInfo: '',
		};
	}

	handleClickOpen = () => {
		this.setState({ openAdd: true });
	};
	handleClickClose = () => {
		this.setState({ openAdd: false });
	};

	openSelectEvent = () => {
		this.setState({ openEvent: !this.state.openEvent });
	};

	closeSelectEvent = () => {
		this.setState({ openEvent: false });
		this.setState({ openDrawer: true });
	};

	closeSelectEventAdd = () => {
		this.setState({ openEvent: false });
	};

	openDrawerEvent = () => {
		this.setState({ openDrawer: true });
	};
	closeDrawerEvent = () => {
		this.setState({ openDrawer: false });
	};

	render() {
		return (
			<>
				<div>
					<div className='eclipseBackground'>
						<div className='timer'>
							<p>Solar Eclipse begins in:</p>
							<CountdownTimer targetDate='04/08/2024' />
						</div>
					</div>
					{/* <Button variant='outlined' onClick={this.openDrawerEvent}>
						Drawer
					</Button>
					<SideDrawer
						name={this.state.name}
						description={this.state.description}
						city='City'
						state='State'
						additionalInfo='Additional Info'
						openNow={this.state.openDrawer}
						handleClickClose={this.closeDrawerEvent}
					/> */}
				</div>
			</>
		);
	}
}

export default Home;
