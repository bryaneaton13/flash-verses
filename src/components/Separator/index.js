import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import COLORS from '../../colors';

export default function Separator({ style, ...rest }) {
  return <View {...rest} style={[styles.separator, style]} />;
}

Separator.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
};

const styles = StyleSheet.create({
  separator: {
    height: 0.5,
    opacity: 0.25,
    backgroundColor: COLORS.GREY,
  },
});
