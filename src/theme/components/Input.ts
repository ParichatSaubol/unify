import { StyleSheet, ViewStyle } from 'react-native';
import { type CommonParams } from 'types/theme';

export default function <C>({
  Colors,
  Gutters,
  Layout,
  Fonts,
}: CommonParams<C>) {
  const view = {
    ...Gutters.smallHPadding,
    ...Layout.row,
    ...Layout.alignItemsCenter,
    ...Layout.justifyContentBetween,
    ...Layout.gap10,
    backgroundColor: Colors.inputBackground,
    borderRadius: 10,
  };
  const base = {
    ...Fonts.text18,
  };
  const rounded = {
    ...base,
    borderRadius: 8,
  };
  const circle = {
    ...Layout.center,
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: Colors.circleButtonBackground,
    color: Colors.circleButtonColor,
    fill: Colors.circleButtonColor,
  };
  const error: ViewStyle = {
    borderWidth: 1,
    borderColor: Colors.error,
  };

  const disabled: ViewStyle = {
    backgroundColor: '#F2F4F7',
  };

  return StyleSheet.create({
    view,
    base,
    rounded,
    circle,
    error,
    outline: {
      ...base,
      backgroundColor: Colors.transparent,
      borderWidth: 1,
      borderColor: Colors.gray800,
    },
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 1,
      borderColor: Colors.gray800,
    },
    disabled,
  });
}
