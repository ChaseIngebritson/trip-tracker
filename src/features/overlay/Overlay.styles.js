import styled from "styled-components";

// TODO: Enable `top` when nothing is set, but disable when `bottom` is set
export const StyledOverlayContainer = styled.div`
  z-index: 2;
  position: absolute;
  ${props => props.top && 'top: 15px;'}
  ${props => props.left && 'left: 15px;'}
  ${props => props.bottom && 'bottom: 15px;'}
  ${props => props.right && 'right: 15px;'}
`

export const StyledOverlay = styled.div`

`