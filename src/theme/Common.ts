/**
 * This file defines the base application styles.
 *
 * Use it to define generic component styles (e.g. the default text styles, default button styles...).
 */
import { StyleSheet } from 'react-native';
import buttonStyles from './components/Buttons';
import languageStyles from './components/Language';
import stepperStyles from './components/Stepper';
import inputStyles from './components/Input';
import inputSearch from './components/Search';
import dividersStyles from './components/Dividers';
import linkStyles from './components/Link';
import { type CommonParams } from 'types/theme';

export default function <C>({ Colors, ...args }: CommonParams<C>) {
  return {
    button: buttonStyles({ Colors, ...args }),
    language: languageStyles({ Colors, ...args }),
    stepper: stepperStyles({ Colors, ...args }),
    input: inputStyles({ Colors, ...args }),
    search: inputSearch({ Colors, ...args }),
    dividers: dividersStyles({ Colors, ...args }),
    link: linkStyles({ Colors, ...args }),
    ...StyleSheet.create({
      backgroundPrimary: {
        backgroundColor: Colors.primary,
      },
      backgroundReset: {
        backgroundColor: Colors.transparent,
      },
      textInput: {
        backgroundColor: Colors.inputBackground,
        color: Colors.gray400,
        height: 45,
        borderRadius: 10,
        paddingStart: 20,
      },
    }),
  };
}
