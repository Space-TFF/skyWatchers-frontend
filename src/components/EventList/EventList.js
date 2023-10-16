import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Paper } from '@mui/material';

export default function EventList(props) {
	return (
		<List
			sx={{
				maxHeight: '200px',
				overflow: 'auto'
			}}>
			{props.events.map((event) => (
				<ListItem>
						<Paper
							elevation={10}
							square={false}
							sx={{
								display: 'flex',
								flexWrap: 'wrap',
								width: '600px',
								height: '150px',
								bgcolor: 'gray',
								padding: '1em'
							}}>
							<ListItemText>{event.name}</ListItemText>
						</Paper>
				</ListItem>
			))}
		</List>
	);
}
