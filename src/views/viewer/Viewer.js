import React from 'react';

import Map from '../../features/map/Map';
import { Geocoder } from '../../features/geocoder/Geocoder'
import './Viewer.css';

function Viewer() {
  function onMapClick (e) {
    console.log(e)
  }

  return (
    <div className="Viewer">
      <Map onClick={onMapClick}>
        <Geocoder />
      </Map>
    </div>
  );
}

export default Viewer;
