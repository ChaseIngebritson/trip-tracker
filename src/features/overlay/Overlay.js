import React from 'react';
import { StyledOverlay, StyledOverlayContainer } from './Overlay.styles'

class Overlay extends React.Component {
  static defaultProps = {
    top: false,
    left: false,
    bottom: false,
    right: false
  }

  render () {
    const { children, top, left, bottom, right } = this.props
    
    return(
      <StyledOverlayContainer top={top} left={left} bottom={bottom} right={right}>
        <StyledOverlay>
          {children}
        </StyledOverlay>
      </StyledOverlayContainer>
    )
  }
}

export default Overlay