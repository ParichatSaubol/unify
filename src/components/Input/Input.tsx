import React, { FunctionComponent } from 'react';
import { useTheme } from '@/hooks';
import { View, TextInput, KeyboardTypeOptions, Text } from 'react-native';
import { InputSize, InputVariant } from '@/model/options';

interface Props {
  disabled?: boolean;
  endIcon?: JSX.Element;
  error?: boolean;
  helperText?: string;
  keyboardType?: KeyboardTypeOptions;
  onChange?: (text: string) => void | undefined;
  placeholder?: string;
  secureTextEntry?: boolean;
  size?: InputSize;
  startIcon?: JSX.Element;
  value?: string;
  variant?: InputVariant;
  numberOfLines?: number;
}

const Input: FunctionComponent<Props> = ({
  disabled,
  endIcon,
  error,
  helperText,
  keyboardType,
  onChange,
  placeholder,
  secureTextEntry,
  size,
  startIcon,
  value,
  variant,
  numberOfLines = 1,
}) => {
  const { Layout, Common, Fonts, Colors } = useTheme();

  const height =
    size === InputSize.small
      ? 40 * numberOfLines
      : size === InputSize.medium
      ? 50 * numberOfLines
      : 60 * numberOfLines;

  return (
    <View style={[Layout.col]}>
      <View
        style={[
          Layout.fullWidth,
          Common.input.view,
          variant === InputVariant.outlined && Common.input.outlineRounded,
          error && Common.input.error,
          disabled && Common.input.disabled,
          { height: height },
        ]}
      >
        {startIcon && <View>{startIcon}</View>}
        <View style={[Layout.fill, { paddingTop: 2 }]}>
          {!disabled ? (
            <TextInput
              style={[Layout.fullWidth, Common.input.base]}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              keyboardType={keyboardType}
              secureTextEntry={secureTextEntry}
            />
          ) : (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={[{ marginLeft: 4, marginBottom: 4 }]}>
              <Text style={[Fonts.text18]}>{placeholder}</Text>
            </View>
          )}
        </View>
        {endIcon && <View>{endIcon}</View>}
      </View>
      {helperText && (
        <Text style={[Fonts.text18, { color: Colors.error }]}>
          {helperText}
        </Text>
      )}
    </View>
  );
};

Input.defaultProps = {
  disabled: false,
  endIcon: undefined,
  error: false,
  helperText: undefined,
  keyboardType: 'default',
  numberOfLines: 1,
  onChange: () => {},
  placeholder: '',
  secureTextEntry: false,
  size: InputSize.medium,
  startIcon: undefined,
  value: '',
  variant: InputVariant.standard,
};

export default Input;
