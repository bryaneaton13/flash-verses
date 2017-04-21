
import { StyleSheet } from 'react-native';
import COLORS from '../../colors';

const SIZE = 60;

module.exports = StyleSheet.create({
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    marginHorizontal: 3,
    marginBottom: 6,
    backgroundColor: COLORS.OFF_WHITE,
    borderRadius: SIZE / 2,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  selected: {
    backgroundColor: COLORS.SECONDARY,
  },
  selectedText: {
    color: COLORS.WHITE,
  },
});
