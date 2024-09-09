import React, { FunctionComponent } from 'react';
import { GestureResponderEvent, Image, StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  image?: JSX.Element;
  right?: JSX.Element;
}

const ServiceAppBar: FunctionComponent<Props> = ({ image, right }) => {
  const { Layout, Images } = useTheme();

  return (
    <View
      style={[
        Layout.row,
        Layout.gap20,
        Layout.alignItemsCenter,
        // Layout.justifyContentBetween,
        styles.container,
      ]}
    >
      <Image source={Images.service.logo} />
      {image && <View style={styles.image}>{image}</View>}
      {right && <View style={Layout.fill}>{right}</View>}
    </View>
  );
};

ServiceAppBar.defaultProps = {
  onPress: () => {},
  image: undefined,
  right: undefined,
};

const styles = StyleSheet.create({
  container: {
    height: 36,
  },
  image: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default ServiceAppBar;
