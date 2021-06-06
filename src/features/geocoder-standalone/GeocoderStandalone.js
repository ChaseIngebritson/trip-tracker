import React from 'react';
import { TextInput } from 'grommet'
import { geocode } from '../../services/mapbox'

import './GeocoderStandalone.module.css';

class GeocoderStandalone extends React.Component {
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
      .map(({ place_name, id }) => ({
        label: place_name,
        value: id
      }));
  }

  async onChange (event) {
    const { onChange } = this.props

    const search = event.target.value
    this.setState({ search })
    if (onChange) onChange(search)

    // If the input actually contains text
    if (search) {
      const { features } = await geocode(search)
      this.setState({ features })
    }
  }

  onSuggestionSelect (event) {
    const { onSuggestionSelect } = this.props

    const search = event.suggestion.label
    this.setState({ search })

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

export default GeocoderStandalone;
