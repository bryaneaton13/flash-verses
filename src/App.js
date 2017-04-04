
import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './AppNavigator';
import configureStore from './configureStore';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <Provider store={this.state.store}>
        <View style={{ flex: 1 }}>
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

export default App;
