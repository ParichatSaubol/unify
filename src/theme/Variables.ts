/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { type ThemeNavigationColors } from 'types/theme';

/**
 * Colors
 */
export const Colors = {
  black: '#000000',
  // ComponentColors
  circleButtonBackground: '#E1E1EF',
  circleButtonColor: '#44427D',
  error: '#dc3545',
  flash: '#FC1B13',
  gray50: '#F9FAFB',
  gray100: '#F2F4F7',
  gray200: '#A1A1A1',
  gray400: '#4D4D4D',
  gray500: '#667085',
  gray600: '#475467',
  // Typography
  gray800: '#909090',
  inputBackground: '#FFFFFF',
  primary: '#0047FF',
  skyblue: '#667085',
  success: '#28a745',
  transparent: 'rgba(0,0,0,0)',
  white: '#ffffff',
  blue: '#0057FF',
};

export const NavigationColors: Partial<ThemeNavigationColors> = {
  primary: Colors.primary,
  background: '#FFF',
  card: '#EFEFEF',
  text: '#fff',
};

/**
 * FontSize
 */
export const FontSize = {
  xxxs: 14,
  xxs: 16,
  xs: 18,
  sm: 21,
  md: 24,
  lg: 28,
  xl: 32,
  xxl: 40,
  xxxl: 48,
  xxxxl: 64,
  xxxxxl: 72,
  xxxxxxl: 80,
};

/**
 * Metrics Sizes
 */
const tiny = 8;
const small = tiny * 2; // 20
const regular = tiny * 3; // 30
const large = regular * 2; // 60
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
};

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
};
