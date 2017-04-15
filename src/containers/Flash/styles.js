
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
    paddingTop: 15,
  },
  finishedContent: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 25,
  },
  card: {
    elevation: 4,
    backgroundColor: COLORS.WHITE,
    borderRadius: 7,
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 5,
  },
  verseCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // position: 'relative',
  },
  verseCardScroll: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  locationCard: {
    height: 60,
  },
  translation: {
  },
  book: {
    fontSize: 26,
    color: COLORS.BLACK,
    textAlign: 'center',
  },
  text: {
    flex: 1,
    fontSize: 20,
    color: COLORS.BLACK,
    textAlign: 'center',
    lineHeight: 36,
    textShadowColor: COLORS.RED,
    textShadowRadius: 10,
  },
  invisible: {
    color: '#bbc',
    fontSize: 24,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(230, 230, 230, 0.6)',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 7,
  },
  overlayText: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    color: COLORS.DARK_GREY,
    // backgroundColor: 'blue',
    backgroundColor: 'rgba(240, 240, 240, 0.7)',
    padding: 25,
    borderRadius: 7,
  },
  buttonWrap: {
    margin: 10,
  },
  back: {
    backgroundColor: COLORS.RED,
  },
  next: {
    backgroundColor: COLORS.GREEN,
  },
  restart: {
    backgroundColor: COLORS.BLUE,
  },
});
