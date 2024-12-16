/* eslint-disable react-native/no-inline-styles */
import React, { FunctionComponent } from 'react';
import { useTheme } from '@/hooks';
import { View, TextInput, Text } from 'react-native';
import { InputSearchColor, InputSearchVariant } from '@/model/options';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';

interface Props {
  onChange?: (text: string) => void | undefined;
  value?: string;
  placeholder?: string;
  variant?: InputSearchVariant;
  disabled?: boolean;
  backgroundColor?: InputSearchColor;
  onSubmitEditing?: () => void;
  onCartClick? : () => void;
}

const InputSearchProduct: FunctionComponent<Props> = ({
  value,
  onChange,
  placeholder,
  variant,
  disabled,
  backgroundColor,
  onSubmitEditing,
  // onCartClick,
}) => {
  const navigation = useNavigation<NavigationProp<ApplicationStackParamList>>();
  const { Layout, Common, Fonts, Colors, Images } = useTheme();
  return (
    <View style={[Layout.col]}>
      <View
        style={[
          Common.search.view,
          variant === InputSearchVariant.outlined &&
            Common.search.outlineRounded,
          disabled && Common.input.disabled,
          backgroundColor === InputSearchColor.gray && {
            backgroundColor: Colors.gray50,
          },
        ]}
      >
        <View>
          <Images.icons.search color={Colors.gray600} />
        </View>
        <View style={[Layout.fill]}>
          {!disabled ? (
            <TextInput
              style={[Layout.fullWidth, Common.search.base]}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              onSubmitEditing={() => {
                onSubmitEditing && onSubmitEditing();
              }}
            />
          ) : (
            <View style={[Common.search.base, { justifyContent: 'center' }]}>
              <Text style={[Fonts.text18, { marginBottom: 6, marginLeft: 4 }]}>
                {placeholder}
              </Text>
            </View>
          )}
        </View>
      </View>
      <View style={[Common.search.rightIcon]}>
        <Images.icons.cart color={Colors.white}
        onPress = {() => {
          navigation.navigate('CartIndex' as any);
        }} 
        />
      </View>
    </View>
  );
};

InputSearchProduct.defaultProps = {
  onChange: () => {},
  onSubmitEditing: () => {},
  onCartClick: () => {},
  value: '',
  placeholder: '',
  variant: InputSearchVariant.standard,
  disabled: false,
  backgroundColor: InputSearchColor.white,
};

export default InputSearchProduct;
