import { useTheme } from '@/hooks';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// แท็บบาร์ด้านล่าง
const TabBar: FunctionComponent<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const { Fonts } = useTheme();

  return (
    <View style={styles.container}>
      {state.routes.slice(0, 5).map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || '';
        if (label === '') {
          return null;
        }
        const icon = options.tabBarIcon || undefined;

        const isFocused =
          options.title?.split('|').includes(state.routeNames[state.index]) ||
          false;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.touch}
            key={index}
          >
            <View style={styles.items}>
              {icon &&
                icon({
                  color: isFocused ? '#0057FF' : '#667085',
                  focused: isFocused,
                  size: 24,
                })}
              <Text
                style={[
                  Fonts.text18Med,
                  isFocused ? styles.text : styles.textFocused,
                ]}
              >
                {`${label}`}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 80,
    borderTopColor: '#EAECF0',
    borderTopWidth: 2,
  },
  items: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 5,
  },
  touch: {
    flex: 1,
  },
  text: { color: '#0057FF' },
  textFocused: { color: '#667085' },
});

export default TabBar;
