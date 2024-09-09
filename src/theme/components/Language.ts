import { StyleSheet } from 'react-native';
import { type CommonParams } from 'types/theme';

export default function <C>({ Colors, Gutters, Layout }: CommonParams<C>) {
  const base = {
    ...Layout.rowCenter,
    ...Gutters.tinyHPadding,
    height: 34,
    backgroundColor: 'rgba(0, 0, 0, 0.20)',
    borderRadius: 10,
    gap: 10,
  };

  return StyleSheet.create({
    base,
    text: {
      textAlign: 'center',
      color: Colors.white,
    },
    dropdown: {
      zIndex: 1,
      position: 'absolute',
      backgroundColor: '#fff',
      top: 50,
      borderRadius: 20,
      padding: 20,
      flexDirection: 'column',
      gap: 20,
    },
  });
}
