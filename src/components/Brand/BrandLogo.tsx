import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  title?: string;
  description?: string;
  logo?: JSX.Element;
}

// โลโก้แบรนด์
const BrandLogo: FunctionComponent<Props> = ({ title, description, logo }) => {
  const { Layout, Fonts } = useTheme();

  return (
    <View style={[Layout.col, Layout.center, Layout.gap10]}>
      {logo && <View style={styles.logo}>{logo}</View>}
      <View style={Layout.fill}>
        <Text style={[Fonts.text24Med, Fonts.textBlack]}>{title}</Text>
      </View>
      <View style={Layout.fill}>
        <Text style={Fonts.text16}>{description}</Text>
      </View>
    </View>
  );
};

BrandLogo.defaultProps = {
  title: 'HITACHI',
  description: '',
  logo: undefined,
};

const styles = StyleSheet.create({
  logo: {
    width: 96,
    height: 96,
    elevation: 5,
    padding: 5,
    borderRadius: 96 / 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: { position: 'absolute', height: 384 },
  header: { paddingBottom: 0 },
});

export default BrandLogo;
