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

        }
    }

    render() {

        return (
            <>
                <div style={{ height: '50vh', width: '50vw' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: MAP_KEY }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >

                        <EventMap
                            lat={41.98892477299115}
                            lng={-91.65726894724021}
                            text="Coe College"
                        />
                        <EventMap
                            lat={41.971187159763886}
                            lng={-91.6559992135134}
                            text="DeltaV Code School"
                        />
                    </GoogleMapReact>
                </div>
            </>
        );
    }
}

export default Eclipse;