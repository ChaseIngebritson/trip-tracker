import React from 'react';
import mapboxgl from 'mapbox-gl'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

class Geocoder extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    })

    this.props.map.addControl(geocoder)
  }

  render () {
    return null
  }
}

export { Geocoder }