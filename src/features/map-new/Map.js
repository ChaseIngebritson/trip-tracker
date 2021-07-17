import React, { createRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'
import { connect } from 'react-redux';
import MapGL, { Source, Layer } from 'react-map-gl';

import {
  setIdle,
  setViewport
} from './mapSlice';
import styles from './Map.module.css';
import { skyLayer } from './layers.js'

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.mapContainer = createRef()

    this.onViewportChange = this.onViewportChange.bind(this)

    this.state = {
      map: null,
      ready: false
    }
  }

  //   map.on('load', () => {
  //     // Begin adding 3D terrain
  //     map.addSource('mapbox-dem', {
  //       'type': 'raster-dem',
  //       'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
  //       'tileSize': 512,
  //       'maxzoom': 14
  //     })
  
  //     // add the DEM source as a terrain layer with exaggerated height
  //     map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 })
       
  //     // add a sky layer that will show when the map is highly pitched
  //     map.addLayer({
  //       'id': 'sky',
  //       'type': 'sky',
  //       'paint': {
  //         'sky-type': 'atmosphere',
  //         'sky-atmosphere-sun': [0.0, 0.0],
  //         'sky-atmosphere-sun-intensity': 15
  //       }
  //     })

  //     // Insert the layer beneath any symbol layer.
  //     var layers = map.getStyle().layers;
 
  //     var labelLayerId;
  //     for (var i = 0; i < layers.length; i++) {
  //       if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
  //         labelLayerId = layers[i].id;
  //         break;
  //       }
  //     }
 
  //     map.addLayer({
  //       'id': '3d-buildings',
  //       'source': 'composite',
  //       'source-layer': 'building',
  //       'filter': ['==', 'extrude', 'true'],
  //       'type': 'fill-extrusion',
  //       'minzoom': 15,
  //       'paint': {
  //         'fill-extrusion-color': '#aaa',
      
  //         // use an 'interpolate' expression to add a smooth transition effect to the
  //         // buildings as the user zooms in
  //         'fill-extrusion-height': [
  //           'interpolate',
  //           ['linear'],
  //           ['zoom'],
  //           15,
  //           0,
  //           15.05,
  //           ['get', 'height']
  //         ],
  //         'fill-extrusion-base': [
  //           'interpolate',
  //           ['linear'],
  //           ['zoom'],
  //           15,
  //           0,
  //           15.05,
  //           ['get', 'min_height']
  //         ],
  //         'fill-extrusion-opacity': 0.6
  //       }
  //     }, labelLayerId);

  //     this.setState({ ready: true })
  //     if (onReady) onReady(map)
  //   })
  // }

  onViewportChange (nextViewport) {
    const { setViewport } = this.props
    const { 
      altitude,
      bearing,
      latitude,
      longitude,
      pitch,
      zoom
    } = nextViewport

    console.log(nextViewport.isPanning)

    setViewport({
      altitude,
      bearing,
      latitude,
      longitude,
      pitch,
      zoom
    })
  }

  render () {
    const { viewport } = this.props

    return(
      <MapGL
        width="100%"
        height="100%"
        mapStyle='mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y'
        {...viewport}
        onViewportChange={nextViewport => this.onViewportChange(nextViewport)}
      >
        <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />

        <Layer {...skyLayer} />
      </MapGL>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    viewport: state.map.viewport
  }
}

const mapDispatchToProps = {
  setIdle,
  setViewport
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)