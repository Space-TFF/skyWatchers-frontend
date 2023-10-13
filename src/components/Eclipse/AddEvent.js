import * as React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
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
import { Autocomplete } from '@react-google-maps/api';
import dayjs from 'dayjs';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';

class AddEvent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '', //event props
			description: '',
			address: '',
			email: undefined, // this will be from auth0
			isPublic: false,
			lat: '',
			lng: '',
			time: '',
			open: false, // non-event related props start here
			error: false,
			errorMessage: '',
		};

		this.autocomplete = null;
		this.onLoad = this.onLoad.bind(this);
		this.onPlaceChanged = this.onPlaceChanged.bind(this);
	}

	handleClickOpen = () => {
		this.setState({ open: true });
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	handleNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	handleDescriptionChange = (event) => {
		this.setState({ description: event.target.value });
	};

	handleCityChange = (event) => {
		this.setState({ city: event.target.value });
	};

	handleStateChange = (event) => {
		this.setState({ state: event.target.value });
	};

	handleEmailChange = (event) => {
		this.setState({ email: event.target.value });
	};

	handleCheckbox = (event) => {
		this.setState({ isPublic: event.target.checked });
	};

	componentDidMount() {
		if (this.props.auth0.isAuthenticated)
			this.setState({ email: this.props.auth0.user.email });
	}

	//!when "submit" is clicked on "add event" form MUST BE LOGGED IN
	handleAddEvent = async (event) => {
		event.preventDefault();
		console.log('handleAddEvent' + this.state.name);

		this.handleClose();

		try {
			// form information being sent to server
			const reqBody = {
				name: this.state.name,
				description: this.state.description,
				address: this.state.address,
				// time: this.state.time,
				email: this.props.auth0.user.email,
				lat: this.state.lat,
				lng: this.state.lng,
				isPublic: this.state.isPublic,
			};
			console.log('POST reqBody', reqBody);

			if (this.props.auth0.isAuthenticated) {
				const res = await this.props.auth0.getIdTokenClaims();
				const jwt = res.__raw;
				console.log('token: ', jwt);

				const config = {
					method: 'post',
					baseURL: process.env.REACT_APP_SERVER,
					url: '/events',
					headers: { Authorization: `Bearer ${jwt}` },
					data: reqBody,
				};
				console.log('YO', config);

				let axiosData = await axios(config).then((res) => {
					console.log('yoyoyo', res.data);
				});

				console.log(axiosData);
			}
		} catch (error) {
			this.setState({
				error: true,
				errorMessage: `An error occurred: ${error}`,
			});
			console.log('post error' + error);
		}
	};

	onLoad(autocomplete) {
		console.log('autocomplete: ', autocomplete);

		this.autocomplete = autocomplete;
	}

	onPlaceChanged() {
		if (this.autocomplete !== null) {
			console.log(this.autocomplete.getPlace());
			let query = this.autocomplete.getPlace();
			this.setState({ 
				address: query.formatted_address,
				lat: query.geometry.location.lat(),
				lng: query.geometry.location.lng(),
			});
		} else {
			console.log('Autocomplete is not loaded yet!');
		}
	}
	render() {
		const { open } = this.state;
		return (
			<div>
				<Button
					variant='contained'
					onClick={this.handleClickOpen}>
					Create your own event!
				</Button>
				<Dialog
					open={open}
					onClose={this.handleClose}>
					<DialogTitle>Add Event</DialogTitle>
					<DialogContent>
						<DialogContentText>
							To add an event to this location, please fill out
							the following information.
						</DialogContentText>
						<TextField
							autoFocus
							margin='dense'
							id='name'
							label={this.props.name}
							type='text'
							fullWidth
							variant='standard'
							onChange={this.handleNameChange}
						/>
						<TextField
							autoFocus
							margin='dense'
							id='description'
							label={this.props.description}
							type='text'
							multiline
							fullWidth
							variant='standard'
							onChange={this.handleDescriptionChange}
						/>

						<LocalizationProvider dateAdapter={AdapterDayjs}>
							<TimeField
								label='Time'
								fullWidth
								multiline
								margin='dense'
								variant='standard'
								defaultValue={dayjs()}
								onChange={(newValue) =>
									this.setState({ time: newValue })
								}
							/>
						</LocalizationProvider>

						<Autocomplete
							onLoad={this.onLoad}
							onPlaceChanged={this.onPlaceChanged}>
							<TextField
								autoFocus
								margin='normal'
								type='text'
								fullWidth
								variant='standard'
							/>
						</Autocomplete>

						<FormGroup>
							<FormControlLabel
								control={<Checkbox />}
								label='Make Public'
								onChange={this.handleCheckbox}
							/>
						</FormGroup>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleAddEvent}>Submit</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default withAuth0(AddEvent);
