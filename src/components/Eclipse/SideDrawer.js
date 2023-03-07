import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ClickAwayListener from '@mui/base/ClickAwayListener';

class SideDrawer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  left: false, }
  }
    toggleDrawer = (anchor, open) => (event) => {
        console.log("toggleDrawer "+ open);
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        if(!open  && this.props.openNow)
        {
            this.props.handleClickClose();
        }

        this.setState({ [anchor]: open });

        if(!open  && this.props.openNow)
        {
            this.setState({ [anchor]: !open });
        }
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
                          <ClickAwayListener onClickAway={this.toggleDrawer(anchor, false)}>
                    <Drawer
                        anchor={anchor}
                        open={this.state[anchor]|| this.props.openNow } 
                        onClose={this.toggleDrawer(anchor, false)}
                    >
                        {this.list(anchor)}
                    </Drawer>
                    </ClickAwayListener>
                </React.Fragment>
            ))}
        </div>
    );
    }
}

export default SideDrawer;