
import { StyleSheet } from 'react-native';
import COLORS from '../../colors';

const SIZE = 60;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingHorizontal: 7,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZE,
    height: SIZE,
    marginRight: 3,
    marginBottom: 3,
    backgroundColor: COLORS.OFF_WHITE,
    borderRadius: SIZE / 2,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});
