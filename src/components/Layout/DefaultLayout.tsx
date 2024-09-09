import { useTheme } from '@/hooks';
import { useFocusEffect } from '@react-navigation/native';
import React, { FunctionComponent, useCallback } from 'react';
import { Platform, StatusBar, StatusBarStyle } from 'react-native';

interface Props {
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  statusBarColor?: StatusBarStyle;
}

const DefaultLayout: FunctionComponent<Props> = ({
  children,
  statusBarColor,
}) => {
  const { Colors } = useTheme();
  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle(statusBarColor || 'light-content');
      Platform.OS === 'android' &&
        StatusBar.setBackgroundColor(
          statusBarColor === 'dark-content' ? '#fff' : Colors.primary,
        );
    }, []),
  );

  return (
    <>
      <StatusBar barStyle={statusBarColor} translucent />
      {children}
    </>
  );
};

DefaultLayout.defaultProps = {
  children: undefined,
  statusBarColor: 'light-content',
};

export default DefaultLayout;
