import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

class SideDrawer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  left: false, }
  }
    toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        this.setState({ [anchor]: open });
    };

    list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={this.toggleDrawer(anchor, false)}
            onKeyDown={this.toggleDrawer(anchor, false)}
        >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/cards/contemplative-reptile.jpg"
                    title={"Eclipse Event"}
                />
                <CardContent>
                    <Typography id="name" gutterBottom variant="h5" component="div">
                    {this.props.name}
                    </Typography>
                    <Typography id="description" variant="body2" color="text.secondary">
{this.props.description}
                    </Typography>

                    <Typography id="city" gutterBottom variant="subtitle2" component="div">
                        {this.props.city}
                    </Typography>
                    <Typography id="state" gutterBottom variant="subtitle2" component="div">
                        {this.props.state}
                    </Typography>
                    <Typography id="additionalInfo" variant="body2" color="text.secondary">
                        {this.props.additionalInfo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={this.props.handleClickClose}>Add to My Events</Button>

                </CardActions>
            </Card>


        </Box>
    );
    render() {
    return (
        <div>
            {['left'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Drawer
                        anchor={anchor}
                        open={this.state[anchor] ||this.props.open} 
                        onClose={this.toggleDrawer(anchor, false)}
                    >
                        {this.list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
    }
}

export default SideDrawer;