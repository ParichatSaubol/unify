import { StyleSheet } from 'react-native';
import { type CommonParams } from 'types/theme';

export default function <C>({ Colors, Gutters, Layout }: CommonParams<C>) {
  const base = {
    ...Layout.center,
    ...Gutters.regularHPadding,
    height: 40,
    backgroundColor: Colors.primary,
  };

  return StyleSheet.create({
    base,
  });
}
