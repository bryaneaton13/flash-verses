
import { StyleSheet } from 'react-native';
import COLORS from '../../colors';

module.exports = StyleSheet.create({
  row: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    backgroundColor: COLORS.WHITE,
  },
  bookText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
  section: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS.DARK_GREY,
  },
  sectionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});
