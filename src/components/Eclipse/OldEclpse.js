// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import './Eclipse.css';
// import EventMarker from '../EventMarker/EventMarker';
// import { Button, Container, TextField } from '@mui/material';
// const MAP_KEY = process.env.REACT_APP_MAP_KEY;

// //* default coords for the map to center on
// //TODO: This will eventually be whatever the defautl location of our user is, so we will grab this from DB

// const defaultProps = {
//     center: {
//         lat: 41.97111725808147,
//         lng: -91.6563726642888,
//     },
//     zoom: 11
// };

// const mapOptions =

//     [
//         {
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#1d2c4d"
//                 }
//             ]
//         },
//         {
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#8ec3b9"
//                 }
//             ]
//         },
//         {
//             "elementType": "labels.text.stroke",
//             "stylers": [
//                 {
//                     "color": "#1a3646"
//                 }
//             ]
//         },
//         {
//             "featureType": "administrative.country",
//             "elementType": "geometry.stroke",
//             "stylers": [
//                 {
//                     "color": "#4b6878"
//                 }
//             ]
//         },
//         {
//             "featureType": "administrative.land_parcel",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#64779e"
//                 }
//             ]
//         },
//         {
//             "featureType": "administrative.province",
//             "elementType": "geometry.stroke",
//             "stylers": [
//                 {
//                     "color": "#4b6878"
//                 }
//             ]
//         },
//         {
//             "featureType": "landscape.man_made",
//             "elementType": "geometry.stroke",
//             "stylers": [
//                 {
//                     "color": "#334e87"
//                 }
//             ]
//         },
//         {
//             "featureType": "landscape.natural",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#023e58"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#283d6a"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#6f9ba5"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi",
//             "elementType": "labels.text.stroke",
//             "stylers": [
//                 {
//                     "color": "#1d2c4d"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi.park",
//             "elementType": "geometry.fill",
//             "stylers": [
//                 {
//                     "color": "#023e58"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi.park",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#3C7680"
//                 }
//             ]
//         },
//         {
//             "featureType": "road",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#304a7d"
//                 }
//             ]
//         },
//         {
//             "featureType": "road",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#98a5be"
//                 }
//             ]
//         },
//         {
//             "featureType": "road",
//             "elementType": "labels.text.stroke",
//             "stylers": [
//                 {
//                     "color": "#1d2c4d"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#2c6675"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "geometry.stroke",
//             "stylers": [
//                 {
//                     "color": "#255763"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#b0d5ce"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "labels.text.stroke",
//             "stylers": [
//                 {
//                     "color": "#023e58"
//                 }
//             ]
//         },
//         {
//             "featureType": "transit",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#98a5be"
//                 }
//             ]
//         },
//         {
//             "featureType": "transit",
//             "elementType": "labels.text.stroke",
//             "stylers": [
//                 {
//                     "color": "#1d2c4d"
//                 }
//             ]
//         },
//         {
//             "featureType": "transit.line",
//             "elementType": "geometry.fill",
//             "stylers": [
//                 {
//                     "color": "#283d6a"
//                 }
//             ]
//         },
//         {
//             "featureType": "transit.station",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#3a4762"
//                 }
//             ]
//         },
//         {
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#0e1626"
//                 }
//             ]
//         },
//         {
//             "featureType": "water",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#4e6d70"
//                 }
//             ]
//         }
//     ]




// // const createMapOptions = () => {
// //     styles: [mapOptions];
// //     }

// class Eclipse extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             defaultLocation: {
//                 lat: '',
//                 lon: '',
//             },
//             searchQuery: '',

//         }
//     }

//     setSearch = async (searchString) => {
//         console.log(searchString);
//         this.setState({ searchQuery: searchString })
//     }

//     searchLocation = async () => {
//         console.log(`Searching for: ${this.state.searchQuery}`);
//         //! maps api logic goes here
//         let request = {
//             query: 'searchQuery',
//             fields: ['name']
//         }


//     }

//     render() {

//         return (
//             <>
//                 <TextField id='outlined-basic' label='search' variant='outlined' value={this.state.searchQuery} onChange={(e) => {
//                     this.setSearch(e.target.value)

//                 }} />
//                 <Button onClick={this.searchLocation} variant='contained'>Search</Button>
//                 <Container sx={{ width: '80vw', height: '80vh', pt: '5rem', }}>

//                     <GoogleMapReact
//                         bootstrapURLKeys={{ key: MAP_KEY, libraries: ['places', 'geometry', 'drawing', 'visualization'] }}
//                         defaultCenter={defaultProps.center}
//                         defaultZoom={defaultProps.zoom}
//                         yesIWantToUseGoogleMapApiInternals
//                         options={{ styles: [...mapOptions] }}
//                     >

//                         <EventMarker
//                             lat={41.98892477299115}
//                             lng={-91.65726894724021}
//                             text="Coe College"
//                         />
//                         <EventMarker
//                             lat={41.971187159763886}
//                             lng={-91.6559992135134}
//                             text="DeltaV Code School"
//                         />
//                     </GoogleMapReact>
//                 </Container>
//             </>
//         );
//     }
// }

// export default Eclipse;

