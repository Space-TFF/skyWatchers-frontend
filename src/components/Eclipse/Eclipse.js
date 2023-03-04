import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Eclipse.css';
import EventMarker from '../EventMarker/EventMarker';
import { Container } from '@mui/material';
const MAP_KEY = process.env.REACT_APP_MAP_KEY;

//* default coords for the map to center on
//TODO: This will eventually be whatever the defautl location of our user is, so we will grab this from DB

const defaultProps = {
    center: {
        lat: 41.97111725808147,
        lng: -91.6563726642888,
    },
    zoom: 11
};
class Eclipse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultLocation: {
                lat: '',
                lon: '',
            }
        }
    }

    render() {

        return (
            <>
                <Container sx={{ width: '80vw', height: '80vh', pt: '5rem', }}>

                    <GoogleMapReact
                        bootstrapURLKeys={{ key: MAP_KEY }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                        yesIWantToUseGoogleMapApiInternals
                    >

                        <EventMarker
                            lat={41.98892477299115}
                            lng={-91.65726894724021}
                            text="Coe College"
                        />
                        <EventMarker
                            lat={41.971187159763886}
                            lng={-91.6559992135134}
                            text="DeltaV Code School"
                        />
                    </GoogleMapReact>
                </Container>
            </>
        );
    }
}

export default Eclipse;