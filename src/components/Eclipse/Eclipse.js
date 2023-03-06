import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Container } from '@mui/material';

const containerStyle = {
  width: '50vw',
  height: '80vh'
};

const center = {
  lat: 41.97111725808147,
  lng: -91.6563726642888,
};

class Eclipse extends Component {
  render() {
    return (
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_MAP_KEY}
      >
        <Container>

          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            { /* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        </Container>
      </LoadScript>
    )
  }
}

export default Eclipse