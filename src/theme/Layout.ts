import { Platform, StyleSheet } from 'react-native';
import { type ThemeVariables } from 'types/theme';
import { Colors } from './Variables';

const Layout = ({}: ThemeVariables) => {
  return StyleSheet.create({
    firstBox: {
      paddingTop: Platform.OS === 'ios' ? 36 : 0,
    },
    absolute: {
      position: 'absolute',
    },
    alignItemsCenter: {
      alignItems: 'center',
    },
    alignItemsEnd: {
      alignItems: 'flex-end',
    },
    alignItemsStart: {
      alignItems: 'flex-start',
    },
    alignItemsStretch: {
      alignItems: 'stretch',
    },
    bg: {
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    bgGrey50: {
      backgroundColor: Colors.gray50,
    },
    bgGrey100: {
      backgroundColor: Colors.gray100,
      paddingVertical: 30,
    },
    bgPrimary: {
      backgroundColor: Colors.primary,
    },
    bgWhite: {
      backgroundColor: Colors.white,
    },
    bottom0: {
      bottom: 0,
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    col: {
      flexDirection: 'column',
    },
    colCenter: {
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    colHCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    },
    colReverse: {
      flexDirection: 'column-reverse',
    },
    colVCenter: {
      alignItems: 'center',
      flexDirection: 'column',
    },
    fill: {
      flex: 1,
    },
    flexGrow: {
      flexGrow: 1,
    },
    fullHeight: {
      height: '100%',
    },
    fullSize: {
      height: '100%',
      width: '100%',
    },
    fullWidth: {
      width: '100%',
    },
    gap5: {
      columnGap: 5,
      gap: 5,
      rowGap: 5,
    },
    gap10: {
      columnGap: 10,
      gap: 10,
      rowGap: 10,
    },
    gap20: {
      columnGap: 20,
      gap: 20,
      rowGap: 20,
    },
    gap40: {
      columnGap: 40,
      gap: 40,
      rowGap: 40,
    },
    halfWidth: {
      width: '50%',
    },
    justifyContentAround: {
      justifyContent: 'space-around',
    },
    justifyContentBetween: {
      justifyContent: 'space-between',
    },
    justifyContentCenter: {
      justifyContent: 'center',
    },
    justifyContentEnd: {
      justifyContent: 'flex-end',
    },
    justifyContentStart: {
      justifyContent: 'flex-start',
    },
    left0: {
      left: 0,
    },
    main: {
      padding: 13,
    },
    mb20: {
      marginBottom: 20,
    },
    mirror: {
      transform: [
        {
          scaleX: -1,
        },
      ],
    },
    mt50: {
      marginTop: 50,
    },
    mt89: {
      marginTop: 89,
    },
    mt118: {
      marginTop: 118,
    },
    mt141: {
      marginTop: 141,
    },
    p12: {
      padding: 12,
    },
    radius5: {
      borderRadius: 5,
    },
    radius10: {
      borderRadius: 10,
    },
    radiusBg: {
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
    },
    relative: {
      position: 'relative',
    },
    right0: {
      right: 0,
    },
    rotate90: {
      transform: [
        {
          rotate: '90deg',
        },
      ],
    },
    rotate90Inverse: {
      transform: [
        {
          rotate: '-90deg',
        },
      ],
    },
    row: {
      flexDirection: 'row',
    },
    rowCenter: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    rowHCenter: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    rowReverse: {
      flexDirection: 'row-reverse',
    },
    rowVCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    scrollSpaceAround: {
      flexGrow: 1,
      justifyContent: 'space-around',
    },
    scrollSpaceBetween: {
      flexGrow: 1,
      justifyContent: 'space-between',
    },
    selfStretch: {
      alignSelf: 'stretch',
    },
    top0: {
      top: 0,
    },
    topunder25: {
      top: -25,
    },
  });
};

export default Layout;
