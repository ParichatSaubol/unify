import React, { FunctionComponent } from 'react';
import { useTheme } from '@/hooks';
import { Platform, StyleSheet, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

interface Props {
  setIsEnabled: (val: boolean) => void;
  isEnabled: boolean;
  disabled?: boolean;
}
// แสดง Checkbox
const Checkbox: FunctionComponent<Props> = ({
  isEnabled,
  setIsEnabled,
  disabled,
}) => {
  const { Layout } = useTheme();

  return (
    <View style={[Layout.col]}>
      <CheckBox
        style={[Platform.OS === 'ios' && styles.container]}
        disabled={disabled}
        value={isEnabled}
        onValueChange={() => setIsEnabled(!isEnabled)}
      />
    </View>
  );
};

Checkbox.defaultProps = {
  disabled: false,
};

const styles = StyleSheet.create({
  container: {
    // marginRight: 20,
  },
});

export default Checkbox;
