import {Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const COLORS = {
  white: '#ffffff',
  blue: '#00A9FF',
  red: '#FF1E1E',
  yelow: '#FFFF00',
  black: '#000000',
};
const SIZES = {
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 30,
  width,
  height,
};
const FONTS = {
  small: {
    fontFamily: 'YourSmallFontFamily',
    fontSize: SIZES.small,
    fontWeight: '400',
  },
  medium: {
    fontFamily: 'YourMediumFontFamily',
    fontSize: SIZES.medium,
    fontWeight: '600',
  },
  large: {
    fontFamily: 'YourLargeFontFamily',
    fontSize: SIZES.large,
    fontWeight: '700',
  },
  xLarge: {
    fontFamily: 'YourXLargeFontFamily',
    fontSize: SIZES.xLarge,
    fontWeight: '800',
  },
};

export {COLORS, SIZES, FONTS};
