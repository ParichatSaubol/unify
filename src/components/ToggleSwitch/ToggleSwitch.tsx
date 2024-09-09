import React, { FunctionComponent } from 'react';
import { useTheme } from '@/hooks';
import { View, Switch } from 'react-native';

interface Props {
  setIsEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  isEnabled: boolean;
}

const ToggleSwitch: FunctionComponent<Props> = ({
  isEnabled,
  setIsEnabled,
}) => {
  const { Layout, Colors } = useTheme();

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={[Layout.col]}>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? Colors.primary : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

ToggleSwitch.defaultProps = {};

export default ToggleSwitch;
