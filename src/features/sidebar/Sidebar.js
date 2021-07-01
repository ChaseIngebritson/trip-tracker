import React from 'react';
import { Sidebar as GrommetSidebar, Nav, Button } from 'grommet'
import { Search } from 'grommet-icons'
import { connect } from 'react-redux';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hovered: false
    }
  }

  render () {
    const { onHover } = this.props

    return (
      <GrommetSidebar 
        background="brand"
        onHover={onHover}>
        <Nav>
          <Button icon={<Search />} hoverIndicator alignSelf="center"/>
        </Nav>
      </GrommetSidebar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
 
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
