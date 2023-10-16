import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react';
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

					{/* Events I want to go to: */}
					<div className='eventDiv'>
						<h2>Events I'm Hosting:</h2>
						<EventList events={events} />
						{/* Events I am hosting: */}
						<h2>Events I want to attend:</h2>
						<EventList events={events} />
					</div>
				</div>
				<div className='profileBackground'></div>
			</>
		)
	);
};

export default Profile;
