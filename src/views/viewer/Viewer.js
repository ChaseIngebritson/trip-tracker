import React from 'react';
import { Main, Grid, Sidebar, Layer, Spinner, Box } from 'grommet'
import { connect } from 'react-redux';

import Map from '../../features/map/Map';
import './Viewer.css';
import { 
  setIdle 
} from '../../features/map/mapSlice';

class Viewer extends React.Component {
  ANIMATION_DURATION = 20000

  constructor(props) {
    super(props)

    this.onMapReady = this.onMapReady.bind(this)
    this.onMapIdle = this.onMapIdle.bind(this)
    this.onMapDrag = this.onMapDrag.bind(this)
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
        {!idle && (
          <Layer>
            <Box fill align="center" justify="center" pad="medium">
              <Spinner size="large" />
            </Box>
          </Layer>
        )}

        <Grid
          fill
          rows={['auto']}
          columns={['xsmall', 'auto']}
          areas={[
            { name: 'sidebar', start: [0, 0], end: [0, 0] },
            { name: 'main', start: [1, 0], end: [1, 0] },
          ]}
        >
          <Sidebar 
            gridArea="sidebar"
            background="brand"
          />

          <Map 
            gridArea="main"
            onReady={this.onMapReady}
            onIdle={this.onMapIdle}
            onDrag={this.onMapDrag}
          />
        </Grid>
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
  setIdle
}

export default connect(mapStateToProps, mapDispatchToProps)(Viewer);
