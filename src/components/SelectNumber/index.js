import React, { PropTypes } from 'react';
import { View } from 'react-native';

import styles from './styles';

import { Touchable, Text } from '../common';

export default function SelectNumber({ onSelect, number, isSelected }) {
  return (
    <Touchable onPress={() => onSelect(number)}>
      <View style={[styles.wrap, isSelected ? styles.selected : null]}>
        <Text style={[styles.text, isSelected ? styles.selectedText : null]}>{number.toString()}</Text>
      </View>
    </Touchable>
  );
}

SelectNumber.propTypes = {
  onSelect: PropTypes.func.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  isSelected: PropTypes.bool,
};
