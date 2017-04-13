
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

import { openDrawerAction } from '../../actions/drawer';
import { goToAction } from '../../actions/navigation';

class HeaderHome extends Component { // eslint-disable-line

  constructor(props) {
    super(props);

    this.openDrawer = this.openDrawer.bind(this);
    this.handleAction = this.handleAction.bind(this);
  }

  openDrawer() {
    this.props.dispatch(openDrawerAction());
  }

  handleAction() {
    this.props.dispatch(goToAction('flash'));
  }

  render() {
    return (
      <Icon.ToolbarAndroid
        title="Home"
        style={styles.header}
        titleColor="white"
        navIconName="menu"
        onIconClicked={this.openDrawer}
        actions={[
          { title: 'Flash Card', iconName: 'view-carousel', iconSize: 30, show: 'always' },
        ]}
        onActionSelected={this.handleAction}
      />
    );
  }
}

HeaderHome.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
  // mine: PropTypes.array.isRequired, // Redux
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = ({ verses }) => ({
  mine: verses.mine,
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome);
