import React from 'react';
import mapboxgl from 'mapbox-gl'

class Marker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount () {
    const marker = new mapboxgl.Marker()

    marker
      .setLatLng(this.props.coordinates)
      .addTo(this.props.map)
  }

  render () {
    return null
  }
}

export { Marker }