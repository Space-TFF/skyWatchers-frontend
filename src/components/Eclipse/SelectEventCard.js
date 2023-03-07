import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class SelectEventCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "",
  description:"" }
}
handleAddEvent =  async (event) => {
  event.preventDefault();
  console.log('handleAddEvent');

  this.props.handleClickCloseAdd();
}
handleLearn =  async (event) => {
  event.preventDefault();
  console.log('handleLearn');

  this.props.handleClickClose();

}
  render() {
  return(
    <Card sx = {{ maxWidth: 345 }} open = {this.props.open}>
      <><CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="Eclipse Event" /><CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {this.props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {this.props.description}
          </Typography>
        </CardContent><CardActions>
          <Button size="small"onClick={this.handleAddEvent} >Add to My Events</Button>
          <Button size="small"onClick={this.handleLearn} >Learn More</Button>
        </CardActions></>
    </Card >
  );
}
}
export default SelectEventCard;