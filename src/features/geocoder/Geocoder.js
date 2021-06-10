import React from 'react';
import { TextInput } from 'grommet'
import { connect } from 'react-redux';

import {
  setLocation,
  setSearch
} from './geocoderSlice';
import { geocode } from '../../services/mapbox'
import './Geocoder.module.css';

class Geocoder extends React.Component {
  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)
    this.onSuggestionSelect = this.onSuggestionSelect.bind(this)

    this.state = {
      search: '',
      features: []
    }
  }

  formatFeatures (features) {
    return features
      .map(feature => ({
        label: feature.place_name,
        value: feature
      }))
  }

  async onChange (event) {
    const { onChange, setSearch } = this.props
    const search = event.target.value

    // Update state
    this.setState({ search })

    // Update store
    setSearch(search)

    // Emit event
    if (onChange) onChange(search)

    // If the input actually contains text
    if (search) {
      const { features } = await geocode(search)
      this.setState({ features })
    }
  }

  onSuggestionSelect (event) {
    const { setLocation, setSearch, onSuggestionSelect } = this.props
    const { label, value } = event.suggestion

    // Update state
    this.setState({ search: label })
    
    // Update store
    setLocation(value)
    setSearch(label)

    // Emit event
    if (onSuggestionSelect) onSuggestionSelect(event.suggestion)
  }

  render () {
    const { features, search } = this.state
    const suggestions = this.formatFeatures(features)

    return (
      <TextInput 
        id="search-input-id" 
        name="search"
        plain
        value={search}
        suggestions={suggestions}
        onChange={this.onChange}
        onSuggestionSelect={this.onSuggestionSelect} />

    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.geocoder.location,
    search: state.geocoder.search
  }
}

const mapDispatchToProps = {
  setLocation,
  setSearch
}

export default connect(mapStateToProps, mapDispatchToProps)(Geocoder);
