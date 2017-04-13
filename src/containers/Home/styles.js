
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
    alignItems: 'center',
    paddingBottom: 104,
  },
  button: {
    position: 'absolute',
    bottom: 22,
    right: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BLUE,
    borderRadius: 30,
    height: 60,
    width: 60,
    elevation: 5,
  },
  buttonIcon: {
    color: COLORS.WHITE,
    fontSize: 26,
  },
});
