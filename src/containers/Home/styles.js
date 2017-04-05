
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
  verses: {
    alignSelf: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLORS.GREY,
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 7,
  },
  book: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
  },
  translation: {
    fontSize: 13,
    color: COLORS.LIGHT_GREY,
  },
});
