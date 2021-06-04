import React from 'react';

import Map from './features/map/Map';
import { Geocoder } from './features/geocoder/Geocoder'
import './App.css';

function App() {
  function onMapClick (e) {
    console.log(e)
  }

  return (
    <div className="App">
      <Map onClick={onMapClick}>
        <Geocoder />
      </Map>
    </div>
  );
}

export default App;
