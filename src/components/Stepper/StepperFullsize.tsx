import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  current?: number;
  length?: number;
  onPress?: (key: number) => void;
}

const StepperFullsize = ({ current, length, onPress }: Props): JSX.Element => {
  const { Layout, Common } = useTheme();

  const renderCurrent = (key: number) => {
    return (
      <View
        style={[
          key !== current ? Common.stepper.dog : Common.stepper.current,
          Layout.fullWidth,
        ]}
      />
    );
  };

  const createElements = (n: number) => {
    var elements = [];
    for (let i = 0; i < n; i++) {
      elements.push(
        <TouchableOpacity
          key={i}
          style={[Common.stepper.root, Layout.fill]}
          onPress={() => {
            onPress && onPress(i);
          }}
        >
          {renderCurrent(i + 1)}
        </TouchableOpacity>,
      );
    }
    return elements;
  };

  return (
    <View style={[Layout.row, Layout.gap10]}>
      {createElements(length || 0)}
    </View>
  );
};

StepperFullsize.defaultProps = {
  current: 1,
  length: 5,
  onPress: () => {},
};

export default StepperFullsize;
