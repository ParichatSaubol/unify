import React, { FunctionComponent } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import { LinkColor, LinkSize } from '@/model/options';

interface Props {
  title?: string;
  size?: LinkSize;
  color?: LinkColor;
  disabled?: boolean;
  underline?: boolean;
  onPress?: () => void;
}

const Link: FunctionComponent<Props> = ({
  title,
  size,
  color,
  disabled,
  underline,
  onPress,
}) => {
  const { Common, Fonts, Colors } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[Common.link.base]}>
        <Text
          style={[
            Common.link.text,
            size === LinkSize.small && Fonts.text18Med,
            size === LinkSize.medium && Fonts.text21Med,
            color === LinkColor.gray && { color: Colors.gray600 },
            color === LinkColor.primary && { color: Colors.primary },
            underline && Common.link.textDecorationLine,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

Link.defaultProps = {
  title: 'Press me',
  size: LinkSize.small,
  color: LinkColor.primary,
  disabled: false,
  underline: false,
  onPress: undefined,
};

export default Link;
