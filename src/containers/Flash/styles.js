
import { StyleSheet } from 'react-native';
import COLORS from '../../colors';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
  },
  header: {
    height: 50,
    backgroundColor: COLORS.BLUE,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
});
