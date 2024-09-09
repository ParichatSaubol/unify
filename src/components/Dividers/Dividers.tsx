import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  title?: string;
}

const Dividers: FunctionComponent<Props> = ({ title }) => {
  const { Common } = useTheme();

  return (
    <View style={[Common.dividers.base]}>
      <View style={Common.dividers.divider} />
      <View>
        <Text style={Common.dividers.text}>{title}</Text>
      </View>
      <View style={Common.dividers.divider} />
    </View>
  );
};

Dividers.defaultProps = {
  title: '',
};

export default Dividers;
