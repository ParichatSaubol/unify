import { StyleSheet } from 'react-native';
import { type CommonParams } from 'types/theme';

export default function <C>({ Colors }: CommonParams<C>) {
  return StyleSheet.create({
    base: {},
    text: {
      color: Colors.gray600,
    },
    textDecorationLine: {
      textDecorationLine: 'underline',
    },
  });
}
