import React from 'react';
import { Box, FormField, Form, Button } from 'grommet'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import {
  setCenter
} from '../../features/map/mapSlice';
import Geocoder from '../../features/geocoder/Geocoder'
import './Home.css';
import lazyPreload from '../../utils/lazyPreload'

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.onGeocoderSelect = this.onGeocoderSelect.bind(this)

    const Viewer = lazyPreload(() => import("../viewer/Viewer"));
    Viewer.preload()

    this.state = {
      search: '',
      searchRef: null
    }
  }

  onSubmit () {
    const { history } = this.props
    history.push('/viewer')
  }

  onGeocoderSelect (event) {
    const { setCenter } = this.props
    const { value: location } = event

    setCenter(location.center)
  }

  render () {
    return (
      <Box fill align="center" justify="center" background="background-back">
        <Box width="medium">
          <Form onSubmit={this.onSubmit}>
            <FormField name="search" htmlFor="search-input-id" label="Search for your location">
              <Geocoder onChange={this.onGeocoderChange} onSuggestionSelect={this.onGeocoderSelect} />
            </FormField>
            <Box direction="row" gap="medium">
              <Button type="submit" primary label="Submit" />
            </Box>
          </Form>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = {
  setCenter
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Home)
);

