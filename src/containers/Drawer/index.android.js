
import React, { Component, PropTypes } from 'react';
import { View, DrawerLayoutAndroid } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

import { openDrawerAction, closeDrawerAction } from '../../actions/drawer';
import { goToAction } from '../../actions/navigation';

import { Text, Flex, Icon, Touchable } from '../../components/common';

class Drawer extends Component { // eslint-disable-line

  constructor(props) {
    super(props);

    this.renderNav = this.renderNav.bind(this);
    this.openDrawer = this.openDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.goTo = this.goTo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isOpen !== this.props.isOpen) {
      nextProps.isOpen ? this.openDrawer() : this.closeDrawer();
    }
  }

  openDrawer() {
    this.drawer && this.drawer.openDrawer();
  }

  closeDrawer() {
    this.drawer && this.drawer.closeDrawer();
  }

  goTo(location) {
    this.props.dispatch(goToAction(location));
    this.closeDrawer();
  }

  renderNav() {
    return (
      <Flex value={1} align="center">
        <Text style={styles.logo}>Some Logo goes here</Text>
        <Touchable onPress={() => this.goTo('flash')}>
          <View style={styles.link}>
            <Icon name="view-carousel" style={styles.linkIcon} />
            <Text style={styles.linkText}>Flash Card</Text>
          </View>
        </Touchable>
        <Touchable onPress={() => this.goTo('settings')}>
          <View style={styles.link}>
            <Icon name="settings" style={styles.linkIcon} />
            <Text style={styles.linkText}>Settings</Text>
          </View>
        </Touchable>
        <Flex value={1} />
        <Flex direction="column" align="center" justify="center" style={styles.buildInfo}>
          <Text style={styles.madeBy}>
            Thanks for using Flash Verses!
            {'\n\n'}
            Made by Bryan Eaton
            {'\n'}
          </Text>
          <Text style={styles.smallLinkText} onPress={() => console.warn('go somewhere')}>Attributions</Text>
        </Flex>
      </Flex>
    );
  }

  render() {
    const { mainContent, isOpen, dispatch } = this.props;
    return (
      <DrawerLayoutAndroid
        ref={(c) => this.drawer = c}
        drawerWidth={275}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={this.renderNav}
        onDrawerClose={() => isOpen && dispatch(closeDrawerAction())}
        onDrawerOpen={() => !isOpen && dispatch(openDrawerAction())}
      >
        { mainContent }
      </DrawerLayoutAndroid>
    );
  }
}

Drawer.propTypes = {
  dispatch: PropTypes.func.isRequired, // Redux
  isOpen: PropTypes.bool.isRequired, // Redux
  mainContent: PropTypes.element.isRequired,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = ({ drawer }) => ({
  isOpen: drawer.open,
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
