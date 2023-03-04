import React, { Component } from 'react';
import './EventMarker.css'


/**
 *! Text will essentially be the "Marker" for the map.
 */
class EventMap extends Component {

    render() {
        return (<div className='eventMarker'>{this.props.text}</div>);
    }
}

export default EventMap;