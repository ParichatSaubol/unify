import React, { FunctionComponent } from 'react';
import { Animated, NativeModules, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  opacity?: Animated.AnimatedInterpolation<string | number>;
  children?: JSX.Element | JSX.Element[];
}

const StatusBar: FunctionComponent<Props> = ({ children, opacity }) => {
  const insets = useSafeAreaInsets();
  return (
    <Animated.View
      style={[styles.statusBar, { height: insets.top, opacity: opacity }]}
    >
      {children}
    </Animated.View>
  );
};

StatusBar.defaultProps = {
  opacity: undefined,
  children: undefined,
};

const STATUSBAR_HEIGHT = NativeModules.HEIGHT;

const styles = StyleSheet.create({
  statusBar: {
    position: 'absolute',
    top: 0,
    height: STATUSBAR_HEIGHT,
    width: '100%',
    backgroundColor: '#000',
    opacity: 0,
    zIndex: 1,
  },
});

export default StatusBar;
