
import { StyleSheet } from 'react-native';
import COLORS from '../../colors';

module.exports = StyleSheet.create({
  logo: {
    height: 100,
  },
  link: {
    height: 52,
    alignSelf: 'stretch',
    flexDirection: 'row',
    paddingLeft: 16,
    alignItems: 'center',
  },
  linkIcon: {
    fontSize: 26,
    color: COLORS.BLACK,
    paddingRight: 28,
  },
  linkText: {
    color: COLORS.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buildInfo: {
    marginVertical: 25,
  },
  madeBy: {
    color: COLORS.BLACK,
    fontSize: 12,
    textAlign: 'center',
  },
  smallLinkText: {
    color: COLORS.GREY,
    fontSize: 12,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});
