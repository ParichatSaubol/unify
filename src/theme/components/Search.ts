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
    borderRadius: 100,
  };
  const base = {
    ...Fonts.text18,
    marginTop: 4,
    height: 40,
  };
  const rounded = {
    ...base,
    borderRadius: 8,
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
    error,
    outlineRounded: {
      ...rounded,
      backgroundColor: Colors.transparent,
      borderWidth: 1,
      borderColor: Colors.gray800,
    },
    rightIcon: {
      backgroundColor: Colors.primary,
      position: 'absolute',
      right: 0,
      height: '100%',
      width: 60,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    disabled,
  });
}
