import React from 'react';
import GoogleMapReact from 'google-map-react';
import './Eclipse.css';
import EclipseMap from './EclipseMap';
const MAP_KEY = process.env.REACT_APP_MAP_KEY;


const defaultProps = {
    center: {
        lat: 10.99835602,
        lng: 77.01502627
    },
    zoom: 11
};
class Eclipse extends React.Component {

    render() {

        return (
            <>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: MAP_KEY }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <EclipseMap
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </>
        );
    }
}

export default Eclipse;