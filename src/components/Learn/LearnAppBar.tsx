import React, { FunctionComponent } from 'react';
import { GestureResponderEvent, Image, StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  image?: JSX.Element;
  right?: JSX.Element;
}

const LearnAppBar: FunctionComponent<Props> = ({ image, right }) => {
  const { Layout, Images } = useTheme();

  return (
    <View
      style={[
        Layout.row,
        Layout.gap20,
        Layout.alignItemsCenter,
        styles.container,
      ]}
    >
      <Image source={Images.learn.logo} />
      {image && <View style={styles.image}>{image}</View>}
      {right && <View style={Layout.fill}>{right}</View>}
    </View>
  );
};

LearnAppBar.defaultProps = {
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

export default LearnAppBar;
