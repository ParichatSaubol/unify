import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '@/hooks';
import { ChipColor } from '@/model/options';

interface Props {
  title?: string;
  startIcon?: JSX.Element;
  color?: ChipColor;
  onPress?: () => void;
}
// แสดง Chip
const Chip: FunctionComponent<Props> = ({
  title,
  startIcon,
  color,
  onPress,
}) => {
  const { Fonts } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        color === ChipColor.default && styles.default,
        color === ChipColor.primary && styles.primary,
        color === ChipColor.secondary && styles.secondary,
        color === ChipColor.success && styles.success,
        color === ChipColor.warning && styles.warning,
        color === ChipColor.error && styles.error,
      ]}
      onPress={onPress}
    >
      {startIcon && startIcon}
      <Text
        style={[
          Fonts.text18,
          color === ChipColor.primary && Fonts.textWhite,
          color === ChipColor.success && Fonts.textWhite,
          color === ChipColor.warning && Fonts.textWhite,
          color === ChipColor.error && Fonts.textRed,
        ]}
        numberOfLines={1}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

Chip.defaultProps = {
  color: ChipColor.default,
  title: 'Press me',
  startIcon: undefined,
  onPress: undefined,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    paddingHorizontal: 8,
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  default: {
    backgroundColor: '#F6F6F6',
  },
  primary: {
    backgroundColor: '#0057FF',
  },
  secondary: {
    backgroundColor: '#F6F6F6',
  },
  success: {
    backgroundColor: '#00D504',
  },
  warning: {
    backgroundColor: '#FF9811',
  },
  error: {
    backgroundColor: '#FFFFFF',
  },
});

export default Chip;
