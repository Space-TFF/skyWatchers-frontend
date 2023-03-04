import React, { Component } from 'react';


/**
 *! Text will essentially be the "Marker" for the map.
 */
class EventMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',

        }
    }
    render() {
        return (<div>{this.props.text}</div>);
    }
}

export default EventMap;