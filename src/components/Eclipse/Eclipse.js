import React, { Component } from 'react';
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow
} from '@react-google-maps/api';
import { MapConfig } from './MapConfig';
import SelectEventCard from './SelectEventCard';
import AddEvent from './AddEvent';
import { KmlLayer } from '@react-google-maps/api';
import './Eclipse.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import eclipseBandW2 from '../../img/eclipseBandW2.jpg';
import EventList from '../EventList/EventList';
import { Container } from '@mui/material';

const containerStyle = {
	width: '70vw',
	height: '80vh',
	margin: '1.5rem'
};

class Eclipse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentLocation: {
				lat: 41.969093639498986,
				lng: -91.68121337301862
			},
			selectedEvent: {},
			publicEvents: []
		};
	}

	/**
	 * @param {obj} position - this is the object returned from the geolocation API
	 * * Once permission is given, pass the obj to state so we can pin it on the map.
	 */
	success = (position) => {
		const currentLocation = {
			lat: position.coords.latitude,
			lng: position.coords.longitude
		};
		this.setState({ currentLocation: currentLocation });
		localStorage.setItem(
			'lastKnownLocation',
			JSON.stringify(currentLocation)
		);
	};

	/**
	 * Grab user's location when the page reloads
	 * * This uses the javascript geolocation api: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
	 */
	componentDidMount() {
		let lastKnownLocation = JSON.parse(
			localStorage.getItem('lastKnownLocation')
		); // check Local Storage

		if (!lastKnownLocation) {
			navigator.geolocation.getCurrentPosition(this.success); // if local storage is empty, ask for location
		}

		this.setState({ currentLocation: lastKnownLocation });

		//TODO: add error handling if the user denies access to their location
		//TODO: Or just add a default lmfao
		if (this.props.auth0.isAuthenticated)
			this.setState({ email: this.props.auth0.user.email });
	}

	getAllEvents = async () => {
		let cachedEvents = JSON.parse(localStorage.getItem('cachedEvents'));

		if (!cachedEvents) {
			let response = await axios.get(
				`${process.env.REACT_APP_SERVER}/events`
			);
			console.log('getAllEvents():', response.data);
			this.setState({ publicEvents: response.data });
			localStorage.setItem('cachedEvents', JSON.stringify(response.data)); // put events in local storage
		} else {
			this.setState({ publicEvents: cachedEvents });
		}
	};

	render() {
		return (
			<>
				{/* <img
					src={eclipseBandW2}
					alt='eclipseBandW2'
					className='eclipseBandW2'
				/>
				<h3 className='mapTitle'>
					Path of Solar Eclipse, April 8, 2024
				</h3> */}

				{/* <AddEvent
					name='Event Name'
					description='Description'
					city='City'
					state='State'
					email='email'
					open={this.state.openAdd}
					handleClickClose={this.handleClickClose}
				/> */}
				<Container
					sx={{
						display: 'flex',
						flexGrow: '1',
						padding: '0px'
					}}>
					<LoadScript
						googleMapsApiKey={process.env.REACT_APP_MAP_KEY}
						libraries={['places', 'geometry']}>
						<GoogleMap
							mapContainerStyle={containerStyle}
							center={this.state.currentLocation}
							zoom={10}
							onLoad={this.getAllEvents}
							options={{ styles: MapConfig.stylesArray }}>
							{/* Child components, such as markers, info windows, etc. */}
							<>
								<Marker position={this.state.currentLocation} />
								{this.state.publicEvents.map((event) => {
									return (
										<Marker
											key={event.name}
											// icon='https://www.svgrepo.com/show/320718/eclipse.svg'
											position={{
												lat: event.lat,
												lng: event.lng
											}}
											onClick={() =>
												this.setState({
													selectedEvent: event
												})
											}
										/>
									);
								})}

								{this.state.publicEvents.map((publicEvent) => {
									return (
										<Marker
											key={[publicEvent].name}
											// icon='https://www.svgrepo.com/show/320718/eclipse.svg'
											position={{
												lat: publicEvent.lat,
												lng: publicEvent.lng
											}}
											onClick={() =>
												this.setState({
													selectedEvent: publicEvent
												})
											}
										/>
									);
								})}

								{this.state.selectedEvent.name ? (
									<InfoWindow
										position={{
											lat: this.state.selectedEvent.lat,
											lng: this.state.selectedEvent.lng
										}}
										clickable={true}
										onCloseClick={() =>
											this.setState({ selectedEvent: {} })
										}>
										<SelectEventCard
											name={this.state.selectedEvent.name}
											description={
												this.state.selectedEvent
													.description
											}
											image={
												this.state.selectedEvent.image
											}
										/>
									</InfoWindow>
								) : null}

								<KmlLayer
									url='https://raw.githubusercontent.com/Space-TFF/space-explorer-frontend/dev/src/components/Eclipse/Totality.kml'
									options={{ preserveViewport: true }}
								/>
							</>
						</GoogleMap>
					</LoadScript>
					<EventList events={this.state.publicEvents} />
				</Container>
			</>
		);
	}
}

export default withAuth0(Eclipse);
