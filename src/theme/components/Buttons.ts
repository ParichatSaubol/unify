import { StyleSheet, ViewStyle } from 'react-native';
import { type CommonParams } from 'types/theme';

export default function <C>({ Colors, Gutters, Layout }: CommonParams<C>) {
  const base = {
    ...Layout.rowCenter,
    ...Gutters.smallHPadding,
    padding: 5,
    borderRadius: 5,
  };
  const rounded = {
    borderRadius: 10,
  };
  const circle = {
    borderRadius: 50,
  };
  const box = {
    ...Layout.center,
    borderRadius: 5,
    backgroundColor: Colors.circleButtonBackground,
    color: Colors.circleButtonColor,
  };

  // Colors
  const transparent: ViewStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
  };

  const white: ViewStyle = {
    backgroundColor: '#FFF',
  };
  // Type
  const primary = {
    backgroundColor: Colors.primary,
  };
  const solid = {
    backgroundColor: '#F2F4F7',
  };
  const secondary = {
    backgroundColor: '#344054',
  };
  const disabled = {
    backgroundColor: '#98A2B3',
  };
  const text = {
    ...Layout.row,
    ...Layout.alignItemsCenter,
    borderRadius: 5,
  };
  const font = {
    flex: 1,
    textAlign: 'center',
    color: Colors.white,
  };
  const outlined = {
    backgroundColor: '#FFFFFF',
  };
  const outlinedPrimary = {
    backgroundColor: '#E6EEFF',
  };

  return StyleSheet.create({
    base,
    primary,
    solid,
    secondary,
    disabled,
    text,
    font,
    rounded,
    circle,
    box,
    transparent,
    white,
    outlined,
    outlinedPrimary,
    none: {
      borderRadius: 5,
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  });
}
