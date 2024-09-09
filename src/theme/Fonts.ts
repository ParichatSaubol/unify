/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native';
import { type ThemeVariables } from 'types/theme';

const Fonts = ({ FontSize, Colors }: ThemeVariables) => {
  return StyleSheet.create({
    lineThrough: {
      textDecorationLine: 'line-through',
    },
    text14: {
      fontFamily: 'DBHeavent',
      fontSize: FontSize.xxxs,
    },
    text14Bold: {
      fontFamily: 'DBHeavent-Bold',
      fontSize: FontSize.xxxs,
    },
    text16: {
      fontFamily: 'DBHeavent',
      fontSize: FontSize.xxs,
    },
    text16Bold: {
      fontFamily: 'DBHeavent-Bold',
      fontSize: FontSize.xxs,
    },
    text16Med: {
      fontFamily: 'DBHeavent-Med',
      fontSize: FontSize.xxs,
      fontWeight: '500',
    },
    text18: {
      fontFamily: 'DBHeavent',
      fontSize: FontSize.xs,
      fontWeight: '300',
    },
    text18Bold: {
      fontFamily: 'DBHeavent-Bold',
      fontSize: FontSize.xs,
    },
    text18Med: {
      fontFamily: 'DBHeavent-Med',
      fontSize: FontSize.xs,
      fontWeight: '500',
    },
    text21: {
      fontFamily: 'DBHeavent',
      fontSize: FontSize.sm,
      fontWeight: '300',
    },
    text21Bold: {
      fontFamily: 'DBHeavent-Bold',
      fontSize: FontSize.sm,
    },
    text21Med: {
      fontFamily: 'DBHeavent-Med',
      fontSize: FontSize.sm,
      fontWeight: '500',
    },
    text24Med: {
      fontFamily: 'DBHeavent-Med',
      fontSize: FontSize.md,
      fontWeight: '500',
    },
    text28Bold: {
      fontFamily: 'DBHeavent-Bold',
      fontSize: FontSize.lg,
      fontWeight: '300',
    },
    text28Light: {
      fontFamily: 'DBHeavent',
      fontSize: FontSize.lg,
      fontWeight: '300',
    },
    text32Light: {
      fontFamily: 'DBHeavent',
      fontSize: FontSize.xl,
      fontWeight: '300',
    },
    text32Med: {
      fontFamily: 'DBHeavent-Med',
      fontSize: FontSize.xxl,
      fontWeight: '500',
    },
    text34Med: {
      fontFamily: 'DBHeavent-Med',
      fontSize: FontSize.xl,
      fontWeight: '500',
    },
    text40Med: {
      fontFamily: 'DBHeavent-Med',
      fontSize: FontSize.xxl,
      fontWeight: '500',
    },
    text48Med: {
      fontFamily: 'DBHeavent-Med',
      fontSize: FontSize.xxxl,
      fontWeight: '500',
    },
    textBlack: {
      color: Colors.black,
    },
    textBlue: {
      color: Colors.blue,
    },
    textBold: {
      fontWeight: 'bold',
    },
    textCenter: {
      textAlign: 'center',
    },
    textError: {
      color: Colors.error,
    },
    textGrey: {
      color: Colors.gray500,
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLarge: {
      color: Colors.gray400,
      fontSize: FontSize.lg,
    },
    textLeft: {
      textAlign: 'left',
    },
    textLight: {
      color: Colors.gray200,
    },
    textPrimary: {
      color: Colors.primary,
    },
    textRed: {
      color: Colors.flash,
    },
    textRegular: {
      color: Colors.gray400,
      fontFamily: 'DBHeavent',
      fontSize: FontSize.md,
    },
    textRight: {
      textAlign: 'right',
    },
    textSky: {
      color: Colors.skyblue,
    },
    textSmall: {
      color: Colors.gray400,
      fontFamily: 'DBHeavent',
      fontSize: FontSize.xs,
    },
    textSuccess: {
      color: Colors.success,
    },
    textTiny: {
      color: Colors.gray400,
      fontFamily: 'DBHeavent',
      fontSize: FontSize.xxs,
    },
    textUppercase: {
      textTransform: 'uppercase',
    },
    textWhite: {
      color: Colors.white,
    },
    titleLarge: {
      color: Colors.gray800,
      fontSize: FontSize.lg * 2,
      fontWeight: 'bold',
    },
    titleRegular: {
      color: Colors.gray800,
      fontSize: FontSize.md * 2,
      fontWeight: 'bold',
    },
    titleSmall: {
      color: Colors.gray800,
      fontSize: FontSize.xs * 1.5,
      fontWeight: 'bold',
    },
  });
};
export default Fonts;
