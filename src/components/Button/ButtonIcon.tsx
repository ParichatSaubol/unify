import React, { FunctionComponent } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { useTheme } from '@/hooks';
import {
  ButtonIconColors,
  ButtonIconSize,
  ButtonIconVariant,
} from '@/model/options';


interface Props {
  disabled?: boolean;
  icon?: JSX.Element;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: ButtonIconVariant;
  colors?: ButtonIconColors;
  size?: ButtonIconSize;
  fullHeight?: boolean;
  isNotify?: boolean;
  isBorder?: boolean;
}

// ปุ่ม icon
const ButtonIcon: FunctionComponent<Props> = ({
  onPress,
  disabled,
  icon,
  variant,
  colors,
  fullHeight,
  isNotify,
  size,
  isBorder,
}) => {
  const { Common, Layout } = useTheme();
  // สร้าง style สำหรับปุ่ม
  const renderStyle = () => {
    const style: StyleProp<ViewStyle>[] = [];

    switch (size) {
      case ButtonIconSize.large:
        style.push({ minHeight: 53, paddingHorizontal: 21 });
        break;
      case ButtonIconSize.medium:
        style.push({ minHeight: 40, paddingHorizontal: 14 });
        break;
      case ButtonIconSize.small:
        style.push({ minHeight: 32, paddingHorizontal: 8 });
        break;
    }

    switch (colors) {
      case ButtonIconColors.none:
        break;

      default:
        switch (variant) {
          case ButtonIconVariant.box:
            style.push(Common.button.box);
            break;
          case ButtonIconVariant.circle:
            style.push(Common.button.circle);
            style.push(styles.circle);
            break;
        }

        switch (colors) {
          case ButtonIconColors.transparent:
            style.push(Common.button.transparent);
            break;
          case ButtonIconColors.white:
            style.push(Common.button.white);
            break;
          case ButtonIconColors.primary:
            style.push(Common.button.primary);
            break;
          case ButtonIconColors.solid:
            style.push(styles.solid);
            break;
          default:
            break;
        }
        break;
    }

    fullHeight && style.push({ height: '100%' });
    return style;
  };

  // สร้าง style สำหรับ container
  const renderContainer = () => {
    const style: StyleProp<ViewStyle>[] = [];

    switch (colors) {
      case ButtonIconColors.none:
        break;
      default:
        variant === ButtonIconVariant.box && style.push(styles.container);
        break;
    }

    return style;
  };

  return (
    <TouchableOpacity
      onPress={onPress && onPress}
      disabled={disabled}
      style={[...renderContainer(), isBorder && styles.border]}
    >
      <View style={[...renderStyle(), Layout.center]}>
        {icon && <View>{icon}</View>}
      </View>
      {isNotify && <View style={styles.notify} />}
    </TouchableOpacity>
  );
};

// ค่า default ของ props
ButtonIcon.defaultProps = {
  icon: undefined,
  disabled: false,
  onPress: () => {},
  colors: ButtonIconColors.none,
  variant: ButtonIconVariant.box,
  fullHeight: false,
  isNotify: false,
  size: ButtonIconSize.medium,
  isBorder: false,
};

// สร้าง style
const styles = StyleSheet.create({
  border: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  circle: {
    minHeight: 53,
    maxWidth: 53,
    borderWidth: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {},
  solid: {
    backgroundColor: '#F2F4F7',
  },
  container: {
    borderRadius: 5,
    elevation: 0.5,
  },
  notify: {
    width: 13,
    height: 13,
    backgroundColor: '#FF0000',
    borderRadius: 13,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});

export default ButtonIcon;
