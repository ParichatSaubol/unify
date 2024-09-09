import React, { FunctionComponent } from 'react';
import { GestureResponderEvent, Text, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  title?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
  children?: React.ReactNode;
  close?: JSX.Element;
}

// แสดง Card
const Card: FunctionComponent<Props> = ({ title, children, close }) => {
  const { Layout, Fonts, Colors, Gutters } = useTheme();

  return (
    <View
      style={[
        Layout.col,
        Layout.gap10,
        Layout.bgWhite,
        Layout.radius5,
        Gutters.smallPadding,
      ]}
    >
      <View style={[Layout.row, Layout.justifyContentBetween]}>
        <Text style={[Fonts.text24Med, { color: Colors.black }]}>{title}</Text>
        {close && close}
      </View>
      {children && (
        <View style={[Layout.col, Layout.gap10, Gutters.tinyTMargin]}>
          {children}
        </View>
      )}
    </View>
  );
};

Card.defaultProps = {
  title: undefined,
  onPress: () => {},
  disabled: false,
  children: null,
  close: undefined,
};

export default Card;
