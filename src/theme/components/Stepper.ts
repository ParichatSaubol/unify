import { StyleSheet } from 'react-native';
import { type CommonParams } from 'types/theme';

export default function <C>({}: CommonParams<C>) {
  return StyleSheet.create({
    root: {},
    current: {
      width: 27,
      height: 9,
      borderRadius: 100,
      backgroundColor: '#0038FF',
    },
    dog: {
      width: 9,
      height: 9,
      borderRadius: 100,
      backgroundColor: '#EAECF0',
    },
  });
}
