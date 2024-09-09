import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { useTheme } from '@/hooks';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

const FlexibleView: FunctionComponent<Props> = ({ children }) => {
  const { Layout } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        Layout.col,
        {
          paddingTop: insets.top,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      {children}
    </View>
  );
};

FlexibleView.defaultProps = {
  children: undefined,
};

export default FlexibleView;
