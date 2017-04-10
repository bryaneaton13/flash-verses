
import { Component, PropTypes } from 'react';

class Drawer extends Component { // eslint-disable-line
  render() {
    return this.props.renderMainContent();
  }
}

Drawer.propTypes = {
  renderMainContent: PropTypes.func.isRequired,
};

export default Drawer;
