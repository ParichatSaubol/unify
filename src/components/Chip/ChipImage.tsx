import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';

export interface ChipImageProps {
  title?: string;
  logo?: JSX.Element;
  onPress?: () => void;
}
// แสดง Chip
const ChipImage: FunctionComponent<ChipImageProps> = ({
  title,
  logo,
  onPress,
}) => {
  const { Fonts, Layout } = useTheme();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <View style={[Layout.col, Layout.gap10, Layout.center]}>
        {logo && <View style={styles.logo}>{logo}</View>}
        {title != null && <Text style={[Fonts.text16]}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

ChipImage.defaultProps = {
  title: '',
  logo: undefined,
  onPress: undefined,
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 8 },
  logo: {},
});

export default ChipImage;
