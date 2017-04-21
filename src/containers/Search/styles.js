
import { StyleSheet } from 'react-native';
import COLORS from '../../colors';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  stepWrap: {
    paddingVertical: 5,
    marginHorizontal: -5,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.LIGHT_GREY,
    elevation: 2,
  },
  headerText: {
    paddingVertical: 10,
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    color: COLORS.LIGHT_GREY,
  },
  selectedText: {
    color: COLORS.BLACK,
  },
  activeText: {
    color: COLORS.SECONDARY,
  },
});
