
import React, { Component, PropTypes } from 'react';
import { BackAndroid, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import COLORS from './colors';

import Home from './containers/Home/';

class AppNavigator extends Component {

  constructor(props) {
    super(props);

    this.androidBackEvent = this.androidBackEvent.bind(this);
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
    // if (this.props.isLoggedIn) return <Home />;
    // return <Login />;
    return <Home />;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={COLORS.STATUS_BAR}
          barStyle="default"
        />
        { this.renderScreen() }
      </View>
    );
  }
}

AppNavigator.propTypes = {
  dispatch: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
