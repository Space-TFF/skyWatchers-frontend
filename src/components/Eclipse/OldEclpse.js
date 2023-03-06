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

