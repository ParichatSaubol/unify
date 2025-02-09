/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FunctionComponent, useCallback, useState } from 'react';
import { useTheme } from '@/hooks';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { InputSelectionSize, InputSelectionVariant } from '@/model/options';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

interface Props {
  error?: boolean;
  helperText?: string;
  onChange?: (text: string) => void | undefined;
  option?: string[];
  placeholder?: string;
  size?: InputSelectionSize;
  startIcon?: JSX.Element;
  value?: string;
  variant?: InputSelectionVariant;
}

const InputSelection: FunctionComponent<Props> = ({
  error,
  helperText,
  onChange,
  option = [],
  placeholder,
  size,
  startIcon,
  value,
  variant,
}) => {
  // hooks
  const { Layout, Common, Images, Colors, Fonts } = useTheme();
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { t } = useTranslation('common');

  // variables
  const [visible, setVisible] = useState(false);
  const height =
    size === InputSelectionSize.small
      ? 40
      : size === InputSelectionSize.medium
        ? 50
        : 60;

  // callbacks
  const toggleDropdown = (): void => {
    setVisible(!visible);
  };

  const handleSheetChanges = (index: number) => {
    setVisible(false);
    if (index >= 0) {
      onChange && onChange(`${option[index]}`);
    }
  };

  const renderDropdown = useCallback(() => {
    const element: JSX.Element[] = [];
    option?.flatMap((item, index) => {
      element.push(
        <TouchableOpacity
          style={[styles.itemRow]}
          key={index}
          onPress={() => handleSheetChanges(index)}
        >
          <View style={[styles.itemContainer]}>
            <Text>{item}</Text>
          </View>
          {index !== option.length && <View style={[styles.divider]} />}
        </TouchableOpacity>,
      );
    });

    return element;
  }, []);

  return (
    <View style={[Layout.col]}>
      <TouchableOpacity onPress={toggleDropdown}>
        <View
          style={[
            Layout.fullWidth,
            Common.input.view,
            variant === InputSelectionVariant.outlined &&
              Common.input.outlineRounded,
            error && Common.input.error,
            { height: height },
          ]}
        >
          <View style={[Layout.row, Layout.alignItemsCenter, Layout.gap10]}>
            {startIcon && startIcon}
            <Text style={[Fonts.text18]}>
              {value === '' ? placeholder : value}
            </Text>
          </View>
          <View>
            <Images.icons.arrowDown color={Colors.gray600} />
          </View>
        </View>
      </TouchableOpacity>
      {helperText && (
        <Text style={[Fonts.text18, { color: Colors.error }]}>
          {helperText}
        </Text>
      )}
      {visible && <View style={styles.dropdown}>{renderDropdown()}</View>}
    </View>
  );
};

InputSelection.defaultProps = {
  error: false,
  helperText: undefined,
  onChange: () => {},
  option: t('salutationOptions'),
  placeholder: '',
  size: InputSelectionSize.medium,
  startIcon: undefined,
  value: '',
  variant: InputSelectionVariant.standard,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  dropdown: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#A3A3A3',
    borderRadius: 5,
    flexDirection: 'column',
    width: '100%',
  },
  itemRow: {
    zIndex: 1000,
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  itemContainer: {
    width: '100%',
    padding: 12,
  },
  divider: {
    backgroundColor: '#ccc',
    height: 1,
  },
});

export default InputSelection;
