import React, { FunctionComponent } from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import {
  ButtonAlign,
  ButtonColor,
  ButtonSize,
  ButtonVariant,
} from '@/model/options';

interface Props {
  active?: boolean;
  align?: ButtonAlign;
  colors?: ButtonColor;
  disable?: boolean;
  endIcon?: JSX.Element;
  fullRadius?: boolean;
  fullWidth?: boolean;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  size?: ButtonSize;
  startIcon?: JSX.Element;
  title?: string;
  variant?: ButtonVariant;
}

const Button: FunctionComponent<Props> = ({
  active,
  align,
  colors,
  disable,
  endIcon,
  fullRadius,
  fullWidth,
  onPress,
  size,
  startIcon,
  title,
  variant,
}) => {
  const { Layout, Fonts, Common, Colors } = useTheme();

  // สร้าง style สำหรับ text ของปุ่ม
  const textStyle = (): any[] => {
    const style = [];

    switch (variant) {
      case ButtonVariant.contained:
        switch (colors) {
          case ButtonColor.primary:
            style.push(Fonts.textWhite);
            break;
          case ButtonColor.solid:
            style.push(Fonts.textSky);
            break;
          case ButtonColor.secondary:
            style.push(Fonts.textWhite);
            break;
          case ButtonColor.disabled:
            style.push(Fonts.textWhite);
            break;
          case ButtonColor.error:
            style.push(Fonts.textWhite);
            break;
        }
        break;
      case ButtonVariant.outlined:
        switch (colors) {
          case ButtonColor.primary:
            style.push(Fonts.textPrimary);
            break;
          case ButtonColor.secondary:
            style.push(Fonts.textTiny);
            break;
        }
        break;
      default:
        break;
    }

    switch (size) {
      case ButtonSize.regular:
        style.push(Fonts.text24Med);
        style.push({ paddingVertical: 14 });
        break;
      case ButtonSize.small:
        style.push(Fonts.text21);
        style.push({ paddingVertical: 12 });
        break;
      case ButtonSize.tiny:
        style.push(Fonts.text18);
        style.push({ paddingVertical: 10 });
        break;
      case ButtonSize.mini:
        style.push(Fonts.text14);
        style.push({ paddingVertical: 6 });
        break;
    }

    if (active) {
      switch (colors) {
        case ButtonColor.solid:
          style.push({ color: Colors.white });
          break;
        case ButtonColor.primary:
          style.push({ color: Colors.primary });
          break;
        default:
          style.push({ color: Colors.primary });
      }
    }

    return style;
  };

  // สร้าง style สำหรับ background ของปุ่ม
  const bgStyle = (): any[] => {
    const style = [];
    style.push({ borderRadius: 5 });

    switch (variant) {
      case ButtonVariant.contained:
        switch (colors) {
          case ButtonColor.primary:
            style.push(Common.button.primary);
            break;
          case ButtonColor.solid:
            style.push(Common.button.solid);
            break;
          case ButtonColor.secondary:
            style.push(Common.button.secondary);
            break;
          case ButtonColor.disabled:
            style.push(Common.button.disabled);
            break;
          case ButtonColor.text:
            style.push(Common.button.text);
            break;
          case ButtonColor.white:
            style.push(Common.button.white);
            break;
          case ButtonColor.error:
            style.push({ backgroundColor: '#FC1B13' });
            break;
        }
        break;
      case ButtonVariant.outlined:
        switch (colors) {
          case ButtonColor.primary:
            style.push(Common.button.primary);
            style.push(Common.button.outlined);
            style.push({ borderWidth: 1, borderColor: Colors.primary });
            break;
          case ButtonColor.secondary:
            style.push(Common.button.solid);
            style.push(Common.button.outlined);
            style.push({ borderWidth: 1, borderColor: Colors.gray50 });
            break;
          case ButtonColor.solid:
            style.push(Common.button.solid);
            style.push(Common.button.outlined);
            style.push({ borderWidth: 1, borderColor: Colors.gray200 });
            break;
        }
        break;
      default:
        break;
    }
    if (active) {
      switch (colors) {
        case ButtonColor.solid:
          style.push({ backgroundColor: Colors.error });
          break;
        default:
          // style.push(Common.button.outlinedPrimary);
          break;
      }
    }

    if (fullRadius) {
      style.push(styles.fullRadius);
    }

    if (disable) {
      style.push(styles.disable);
    }

    return style;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        Layout.row,
        align === ButtonAlign.center && Layout.justifyContentCenter,
        align === ButtonAlign.left && Layout.justifyContentStart,
        align === ButtonAlign.right && Layout.justifyContentEnd,
        align === ButtonAlign.between && Layout.justifyContentBetween,
        Layout.gap10,
        fullWidth && Layout.fullWidth,
        ...bgStyle(),
        Layout.alignItemsCenter,
        size === ButtonSize.mini ? styles.basicMini : styles.basic,
      ]}
      disabled={disable}
    >
      {startIcon && startIcon}
      {title && (
        <Text style={[...textStyle()]} numberOfLines={1}>
          {title}
        </Text>
      )}
      {endIcon && <View style={styles.endIcon}>{endIcon}</View>}
    </TouchableOpacity>
  );
};

// กำหนดค่า default ให้กับ props ที่ไม่ได้รับค่ามาจาก component แม่
Button.defaultProps = {
  title: undefined,
  variant: ButtonVariant.contained,
  colors: ButtonColor.primary,
  startIcon: undefined,
  endIcon: undefined,
  active: false,
  fullWidth: false,
  onPress: () => {},
  size: ButtonSize.regular,
  fullRadius: false,
  align: ButtonAlign.center,
  disable: false,
};

const styles = StyleSheet.create({
  endIcon: { marginTop: 2 },
  fullRadius: { borderRadius: 100 },
  basic: {
    paddingHorizontal: 18,
  },
  basicMini: {
    paddingHorizontal: 12,
  },
  disable: {
    opacity: 0.5,
  },
});

export default Button;
