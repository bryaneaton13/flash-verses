
import React, { Component, PropTypes } from 'react';
import { BackAndroid, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import COLORS from './colors';

import Home from './containers/Home/';
import Flash from './containers/Flash/';
import Settings from './containers/Settings/';
import Search from './containers/Search/';

import Drawer from './containers/Drawer/';

class AppNavigator extends Component {

  constructor(props) {
    super(props);

    this.androidBackEvent = this.androidBackEvent.bind(this);
    this.renderScreen = this.renderScreen.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.androidBackEvent);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.androidBackEvent);
  }

  androidBackEvent() {
    return false;
  }

  renderScreen() {
    switch (this.props.location) {
      case 'flash':
        return <Flash />;
      case 'settings':
        return <Settings />;
      case 'search':
        return <Search />;
      default:
        return <Home />;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={COLORS.STATUS_BAR} />
        <Drawer mainContent={this.renderScreen()} />
      </View>
    );
  }
}

AppNavigator.propTypes = {
  // dispatch: PropTypes.func.isRequired, // Redux
  location: PropTypes.string.isRequired, // Redux
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = ({ navigation }) => ({
  location: navigation.location,
});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
