import React, { FunctionComponent, useRef } from 'react';
import { Animated, ScrollView } from 'react-native';
import { useTheme } from '@/hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import StatusBar from './StatusBar';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const Header_Max_Height = 200;
const Header_Min_Height = 70;

const CustomScrollView: FunctionComponent<Props> = ({ children }) => {
  const { Layout } = useTheme();
  const insets = useSafeAreaInsets();

  let scrollOffsetY = useRef(new Animated.Value(0)).current;

  const opacity = scrollOffsetY.interpolate({
    inputRange: [0, Header_Max_Height - Header_Min_Height],
    outputRange: [0, 0.3],
    extrapolate: 'clamp',
  });

  return (
    <>
      <StatusBar opacity={opacity} />
      <ScrollView
        contentContainerStyle={[
          Layout.col,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false },
        )}
      >
        {children}
      </ScrollView>
    </>
  );
};

CustomScrollView.defaultProps = {
  children: undefined,
};

export default CustomScrollView;
