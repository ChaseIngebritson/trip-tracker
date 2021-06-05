import React, { createRef } from 'react';
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { connect } from 'react-redux';

import {
  setCenter,
  setZoom,
  setPitch,
  setBearing,
  setCenterFlag
} from './mapSlice';
import styles from './Map.module.css';
import handleEvents from './handleEvents'

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.mapContainer = createRef()

    this.state = {
      map: null,
      ready: false
    }
  }

  componentDidMount () {
    const { center, zoom, pitch, bearing } = this.props

    mapboxgl.accessToken = process.env.REACT_APP_MAPBOXGL_ACCESS_TOKEN

    const map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox-map-design/ckhqrf2tz0dt119ny6azh975y',
      zoom,
      center,
      pitch,
      bearing,
    })

    this.setState({ map })

    handleEvents(map, this.props)
  
    map.on('load', () => {
      map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
      })
  
      // add the DEM source as a terrain layer with exaggerated height
      map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 })
       
      // add a sky layer that will show when the map is highly pitched
      map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
          'sky-type': 'atmosphere',
          'sky-atmosphere-sun': [0.0, 0.0],
          'sky-atmosphere-sun-intensity': 15
        }
      })

      // Insert the layer beneath any symbol layer.
      var layers = map.getStyle().layers;
 
      var labelLayerId;
      for (var i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
          labelLayerId = layers[i].id;
          break;
        }
      }
 
      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
      
          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      }, labelLayerId);

      this.setState({ ready: true })
    })
  }

  render () {
    const { map, ready } = this.state
    const { children, centerFlag, center } = this.props

    if (centerFlag) {
      map.setCenter(center)
      setCenterFlag(false)
    }

    const renderChildren = React.Children.map(children, child => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { map })
      }

      return child
    })

    return(
      <div>
        <div 
          className={styles.mapContainer} 
          ref={this.mapContainer} 
        />

        {ready && renderChildren}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    center: state.map.center,
    zoom: state.map.zoom,
    pitch: state.map.pitch,
    bearing: state.map.bearing,
    centerFlag: state.map.centerFlag,
  }
}

const mapDispatchToProps = {
  setCenter,
  setZoom,
  setPitch,
  setBearing,
  setCenterFlag
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)