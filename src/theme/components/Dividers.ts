import { StyleSheet } from 'react-native';
import { type CommonParams } from 'types/theme';

export default function <C>({ Layout, Fonts }: CommonParams<C>) {
  const base = { ...Layout.row, ...Layout.center, ...Layout.gap10 };
  const divider = {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  };
  const text = { ...Layout.center, ...Fonts.text24Med };

  return StyleSheet.create({
    base,
    divider,
    text,
  });
}
