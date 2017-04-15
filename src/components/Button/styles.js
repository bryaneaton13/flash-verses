
import { StyleSheet } from 'react-native';
import COLORS from '../../colors';

module.exports = StyleSheet.create({
  button: {
    backgroundColor: COLORS.BLACK,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    color: COLORS.WHITE,
    fontSize: 24,
  },
});
