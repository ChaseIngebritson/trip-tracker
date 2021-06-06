import React from 'react';
import { Box, FormField, Form, Button } from 'grommet'
import GeocoderStandalone from '../../features/geocoder-standalone/GeocoderStandalone'
import { withRouter } from "react-router-dom";

import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      search: '',
      searchRef: null
    }
  }

  onSubmit (event) {
    const { history } = this.props

    history.push('/viewer')
  }

  onChange (event) {
    console.log(event)
  }

  onSuggestionSelect (event) {
    console.log(event)
  }

  render () {
    return (
      <Box fill align="center" justify="center" background="background-back">
        <Box width="medium">
          <Form onSubmit={this.onSubmit}>
            <FormField name="search" htmlFor="search-input-id" label="Search for your location">
              <GeocoderStandalone onChange={this.onChange} onSuggestionSelect={this.onSuggestionSelect} />
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

export default withRouter(Home);
