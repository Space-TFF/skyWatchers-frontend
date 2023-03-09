import React, { Component } from 'react';
import {
	GoogleMap,
	LoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import { MapConfig } from './MapConfig';
import SelectEventCard from './SelectedEventCard';
import AddEvent from './AddEvent';
import { KmlLayer } from '@react-google-maps/api';
import './Eclipse.css';
import axios from 'axios';

const containerStyle = {
	width: '80vw',
	height: '80vh',
	margin: '4em auto',
};

//TODO: These will come from the DB as user created events (or private marked locations)
const locations = [
	{
		name: 'DeltaV Code School',
		location: {
			lat: 41.971187159763886,
			lng: -91.6559992135134,
		},
	},
	{
		name: 'Palisades-Kepler State Park',
		location: {
			lat: 41.92751487030226,
			lng: -91.5055285794566,
		},
	},
	{
		name: 'Custom Event Location!',
		location: {
			lat: 41.95690820284285,
			lng: -91.68765411996654,
		},
	},
];

class Eclipse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentLocation: {},
			selectedEvent: {},
			publicEvents: [],
		};
	}

	/**
	 * @param {obj} position - this is the object returned from the geolocation API
	 * * Once permission is given, pass the obj to state so we can pin it on the map.
	 */
	success = (position) => {
		const currentLocation = {
			lat: position.coords.latitude,
			lng: position.coords.longitude,
		};
		this.setState({ currentLocation: currentLocation });
	};

	/**
	 * Grab user's location when the page reloads
	 * * This uses the javascript geolocation api: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
	 */
	componentDidMount() {
		navigator.geolocation.getCurrentPosition(this.success);
		//TODO: add error handling if the user denies access to their location
	}

	getAllEvents = async () => {
		let response = await axios.get(
			`${process.env.REACT_APP_SERVER}/events`
		);
		console.log(response.data);
		this.setState({publicEvents: response.data})
	};

	render() {
		return (
			<>
				<AddEvent
					name='Event Name'
					description='Description'
					city='City'
					state='State'
					email='email'
					open={this.state.openAdd}
					handleClickClose={this.handleClickClose}
				/>

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
										position={{lat: event.lat, lng: event.lng}}
										onClick={() =>
											this.setState({
												selectedEvent: event,
											})
										}
									/>
								);
							})}
							{this.state.selectedEvent.name ? (
								<InfoWindow
									position={{lat: this.state.selectedEvent.lat, lng: this.state.selectedEvent.lng }}
									clickable={true}
									onCloseClick={() =>
										this.setState({ selectedEvent: {} })
									}>
									<SelectEventCard
										name={this.state.selectedEvent.name}
									/>
								</InfoWindow>
							) : null}
							<KmlLayer
								url='https://raw.githubusercontent.com/Space-TFF/space-explorer-frontend/profile/src/components/Eclipse/Space-Explorer.kml'
								options={{ preserveViewport: true }}
							/>
						</>
					</GoogleMap>
				</LoadScript>
			</>
		);
	}
}

export default Eclipse;
