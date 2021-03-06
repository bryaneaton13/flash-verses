import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import COLORS from '../../colors';

class MyText extends Component {
  setNativeProps(nativeProps) {
    this._text.setNativeProps(nativeProps);
  }
  render() {
    const { children, style, ...rest } = this.props;
    return (
      <Text ref={(c) => this._text = c} {...rest} style={[styles.text, style]}>
        {children}
      </Text>
    );
  }
}

MyText.propTypes = Text.propTypes;
MyText.defaultProps = Text.defaultProps;

const styles = StyleSheet.create({
  text: {
    // fontFamily: 'Lato',
    color: COLORS.BLACK,
  },
});

export default MyText;
