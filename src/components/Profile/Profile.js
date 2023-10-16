import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';
// import MediaCard from "../Eclipse/SelectEventCard";
import './Profile.css';
import axios from 'axios';
import EventList from '../EventList/EventList';
const Profile = () => {
	const [events, setEvents] = useState([]);

	const getUserEvents = async (user) => {
		let response = await axios.get(
			`${process.env.REACT_APP_SERVER}/events`
		);

		setEvents([...response.data]);
		console.log('Events from server', response.data);
	};

	useEffect(() => {
		getUserEvents();
		// this.setState({ publicEvents: response.data }
	}, []);

	const { user, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <div>Loading ...</div>;
	}

	return (
		isAuthenticated && (
			<>
				<div className='wrapped'>
					<div className='user'>
						<img
							src={user.picture}
							alt={user.name}
						/>
						<div className='userInfo'>
							<h2>{user.name}</h2>
							<p>{user.email}</p>
						</div>
					</div>
					<div className='eventDiv'>
						<h2>My Events:</h2>
						<EventList events={events} />
						{/* <MediaCard /> */}
					</div>
				</div>
				<div className='profileBackground'></div>
			</>
		)
	);
};

export default Profile;
