import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Eclipse.css';
import EventMap from '../EventMap/EventMap';
const MAP_KEY = process.env.REACT_APP_MAP_KEY;

//* default coords for the map to center on
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
            text: 'My Marker',
        }
    }

    render() {

        return (
            <>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: MAP_KEY }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <EventMap
                            lat={defaultProps.lat}
                            lng={defaultProps.lng}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </>
        );
    }
}

export default Eclipse;