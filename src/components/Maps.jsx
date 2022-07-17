import React from 'react';

import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';

const mapStyles = {
  
};


export class Maps extends Component {
  render() {
    return (
      <div className='container1'>
        <Map style={"position:absolute; width:60%; height:100%;"}
          google={this.props.google}
          zoom={6}
          style={mapStyles}
          initialCenter={{
            lat: 9,
            lng: 39
        }} />
        <div className='projects_sidebar'>
        projects
        </div>
      </div>);

  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAniSzdehDYrZ0E95aMIh_X1Ctxm9lW0OA'
})(Maps);
