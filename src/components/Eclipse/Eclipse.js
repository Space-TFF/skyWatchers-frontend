import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { MapConfig } from './MapConfig';

const containerStyle = {
  width: '80vw',
  height: '80vh',
  margin: '4em auto'
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

        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          options={{ styles: MapConfig.stylesArray }}
        >
          { /* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default Eclipse