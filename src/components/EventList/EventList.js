import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Paper, Typography } from '@mui/material';

export default function EventList(props) {
	return (
		<List
			sx={{
				maxHeight: '80vh',
				maxWidth: 'auto',
				overflow: 'auto',
				padding: '0',
				margin: '1rem'
			}}>
			{props.events.map((event) => (
				<ListItem
					sx={{
						textAlign: 'left'
					}}>
					<Paper
						elevation={10}
						square={false}
						sx={{
							width: '600px',
							height: '150px',
							backgroundColor: '#C2FBEF9',
							padding: '.5em'
						}}>
						<ListItemText
							primary={event.name}
							secondary={event.address}
						/>
						<Divider
							sx={{
								borderColor: 'black'
							}}
						/>

						<ListItemText primary={event.description} />
					</Paper>
				</ListItem>
			))}
		</List>
	);
}
