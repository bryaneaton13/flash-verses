
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './styles';

import Flex from '../../components/Flex';
import Icon from '../../components/Icon';

class Header extends Component { // eslint-disable-line

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Flex direction="row" self="stretch" align="center" style={styles.header}>
        <Icon name="menu" style={styles.icon} />
        <Flex direction="row" align="center" justify="end" value={1}>
          <Icon name="view-carousel" style={styles.icon} />
        </Flex>
      </Flex>
    );
  }
}

Header.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
  // mine: PropTypes.array.isRequired, // Redux
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = ({ verses }) => ({
  mine: verses.mine,
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
