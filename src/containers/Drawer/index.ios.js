
import { Component, PropTypes } from 'react';

class Drawer extends Component { // eslint-disable-line
  render() {
    return this.props.mainContent;
  }
}

Drawer.propTypes = {
  mainContent: PropTypes.element.isRequired,
};

export default Drawer;
