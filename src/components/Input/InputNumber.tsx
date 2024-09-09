import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  value?: number;
  onChange?: (value: number) => void;
  isActive?: boolean;
}

const InputNumber: FunctionComponent<Props> = ({
  value,
  onChange,
  isActive,
}) => {
  const { Layout, Fonts, Images } = useTheme();

  const handleAdd = () => {
    onChange && onChange((value || 0) + 1);
  };

  const handleRemove = () => {
    const newValue = (value || 0) - 1;
    onChange && newValue > 0 && onChange(newValue);
  };

  return (
    <View
      style={[
        Layout.row,
        styles.container,
        Layout.center,
        isActive ? styles.active : styles.inactive,
      ]}
    >
      <TouchableOpacity onPress={() => handleRemove()}>
        <View style={[styles.button]}>
          <Images.icons.remove color="#344054" />
        </View>
      </TouchableOpacity>
      <View style={[styles.value]}>
        <Text style={[Fonts.text21, Fonts.textCenter, Fonts.textPrimary]}>
          {value}
        </Text>
      </View>
      <TouchableOpacity onPress={() => handleAdd()}>
        <View style={[styles.button]}>
          <Images.icons.add color="#344054" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

InputNumber.defaultProps = {
  value: 1,
  onChange: () => {},
  isActive: false,
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  container: {
    borderRadius: 4,
  },
  value: {
    width: 40,
  },
  active: {
    backgroundColor: '#F2F4F7',
  },
  inactive: {
    backgroundColor: '#FFF',
  },
});

export default InputNumber;
