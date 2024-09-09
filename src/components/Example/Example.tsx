import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  title?: string;
}

const Example: FunctionComponent<Props> = ({ title }) => {
  const { Layout, Fonts } = useTheme();

  return (
    <View style={[Layout.row, styles.container]}>
      <View style={Layout.fill}>
        <Text style={Fonts.text18}>{title}</Text>
      </View>
      <View style={Layout.fill}>
        <Text style={Fonts.text18}>{title}</Text>
      </View>
    </View>
  );
};

Example.defaultProps = {
  title: 'Press me',
};

const styles = StyleSheet.create({
  container: {},
});

export default Example;
