/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react';
import { useTheme } from '@/hooks';
import { View, TextInput, Text, StyleSheet } from 'react-native';

interface Props {
  onChange?: (text: string) => void | undefined;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
}

const InputSearchBrand: FunctionComponent<Props> = ({
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  const { Layout, Fonts, Colors, Images } = useTheme();

  return (
    <View style={[styles.container, Layout.gap10]}>
      <View style={[styles.icon]}>
        <Images.icons.search color={Colors.gray600} />
      </View>
      <View>
        {!disabled ? (
          <TextInput
            numberOfLines={1}
            multiline={false}
            style={[Fonts.text16, styles.input]}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
          />
        ) : (
          <View style={[styles.input]}>
            <Text style={[Fonts.text18, { marginBottom: 6, marginLeft: 4 }]}>
              {placeholder}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

InputSearchBrand.defaultProps = {
  onChange: () => {},
  value: '',
  placeholder: '',
  disabled: false,
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    elevation: 1,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    flexDirection: 'row',
    backgroundColor: '#F2F4F7',
    paddingLeft: 10,
    paddingRight: 60,
  },
  input: {
    padding: 0,
    borderRadius: 5,
    fontFamily: '',
    height: '100%',
  },
  icon: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discount: {
    backgroundColor: '#FC1B13',
    borderRadius: 2,
    paddingHorizontal: 4,
  },
});

export default InputSearchBrand;
