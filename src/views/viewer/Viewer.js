import React from 'react';
import { Main, Sidebar, Nav, DropButton, Box, Card, CardHeader } from 'grommet'
import { Search } from 'grommet-icons'
import { connect } from 'react-redux';

import Map from '../../features/map/Map';
import './Viewer.css';
import { setIdle, setCenter, setCenterFlag } from '../../features/map/mapSlice';
import Overlay from '../../features/overlay/Overlay'
import Geocoder from '../../features/geocoder/Geocoder'

class Viewer extends React.Component {
  ANIMATION_DURATION = 20000

  constructor(props) {
    super(props)

    this.onMapReady = this.onMapReady.bind(this)
    this.onMapIdle = this.onMapIdle.bind(this)
    this.onMapDrag = this.onMapDrag.bind(this)
    this.onGeocoderSelect = this.onGeocoderSelect.bind(this)
    this.animate = this.animate.bind(this)
    this.frame = this.frame.bind(this)

    this.state = {
      rotationStart: 0,
      map: null
    }
  }

  onMapReady (event) {
    this.setState({ map: event })
  }

  onMapIdle () {

  }

  onMapDrag () {

  }

  onGeocoderSelect (event) {
    const { setCenter, setCenterFlag } = this.props
    const { value: location } = event

    // setCenterFlag(true)
    setCenter(location.center)
  }

  animate () {
    window.requestAnimationFrame(this.frame)
  }

  frame (time) {
    const { rotationStart: start, map } = this.state

    if (!start) this.setState({ rotationStart: time })
    const animationPhase = (time - start) / this.ANIMATION_DURATION;
      if (animationPhase > 1) {
      return;
    }

    const rotation = 150 - animationPhase * 40.0;
    map.setBearing(rotation % 360);
    
    window.requestAnimationFrame(this.frame);
  }

  render () {
    const { idle } = this.props

    return (
      <Main>
        <Box fill>
          <Map
            onReady={this.onMapReady}
            onIdle={this.onMapIdle}
            onDrag={this.onMapDrag}
          />
        </Box>
        <Overlay top left>
          <Sidebar 
            round
            background="brand"
            animation={[
              { type: 'fadeIn', duration: 300 },
              { type: 'slideRight', size: 'xlarge', duration: 150 },
            ]}
          >
            <Nav>
              <DropButton 
                icon={<Search />} 
                hoverIndicator 
                alignSelf="center"
                dropAlign={{ left: "right" }}
                dropContent={
                  <Box width="small" fill="vertical" background="white" pad="small">
                    <Geocoder 
                      onSuggestionSelect={this.onGeocoderSelect}
                    />
                  </Box>
                }
              />
            </Nav>
          </Sidebar>
        </Overlay>
        <Overlay bottom left>
          <Card height="small" width="medium" background="brand">
            <CardHeader pad="medium">Stops</CardHeader>
          </Card>
        </Overlay>
      </Main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    idle: state.map.idle,
  }
}

const mapDispatchToProps = {
  setIdle,
  setCenter,
  setCenterFlag
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
