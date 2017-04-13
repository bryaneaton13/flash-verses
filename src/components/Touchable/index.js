import React from 'react';
import {
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';

function TouchableIOS(props) {
  return (
    <TouchableHighlight
      accessibilityTraits="button"
      underlayColor="#3C5EAE"
      {...props}
    />
  );
}

function TouchableAndroid(props) {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple('rgba(180, 180, 190, 0.5)', false)}
      {...props}
    />
  );
}

const F8Touchable = Platform.OS === 'android' ? TouchableAndroid : TouchableIOS;

module.exports = F8Touchable;
