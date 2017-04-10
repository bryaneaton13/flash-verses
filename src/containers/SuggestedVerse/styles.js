
import { StyleSheet } from 'react-native';
import COLORS from '../../colors';

module.exports = StyleSheet.create({
  header: {
    height: 52,
    paddingTop: 15,
    paddingHorizontal: 20,
    backgroundColor: COLORS.BLUE,
    shadowColor: COLORS.BLACK,
    shadowOpacity: 0.8,
    shadowRadius: 3,
  },
  icon: {
    fontSize: 24,
    color: COLORS.WHITE,
  },
});
