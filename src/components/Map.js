import React, { Component } from 'react';
import {Alert} from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
  marginTop: '-2.25%'
};

export class MapContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      lat1: 47.549644799999996,
      long1: -122.3753728,
    };

    this.getLocation = this.getLocation.bind(this);
  }



 getLocation() {
  navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude);
   console.log(position.coords.longitude);
    });
  }
 
  componentDidMount() {
    this.getLocation();
  }



  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat:  this.state.lat1, 
            lng: this.state.long1
          }
        }
      />

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAALPkTXSuGd3itt4jWaOzql_40hsprT7Q'
})(MapContainer);

