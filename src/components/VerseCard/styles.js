
import { StyleSheet } from 'react-native';
import COLORS from '../../colors';

module.exports = StyleSheet.create({
  verse: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: COLORS.WHITE,
    marginTop: 10,
    marginHorizontal: 15,
    borderRadius: 7,
    elevation: 2,
  },
  suggested: {
    backgroundColor: 'rgba(135, 170, 235, 0.3)',
  },
  topWrap: {
    marginBottom: 3,
  },
  book: {
    flex: 1,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    marginBottom: 7,
  },
  icon: {
    fontSize: 25,
  },
  translation: {
    fontSize: 13,
    color: COLORS.LIGHT_GREY,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: COLORS.TRANSPARENT,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'normal',
  },
  removeButton: {
    color: COLORS.RED,
  },
  addButton: {
    color: COLORS.GREEN,
  },
  skipButton: {
    color: COLORS.PURPLE,
    marginHorizontal: 7,
  },
});
