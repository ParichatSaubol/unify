import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';

interface Props {
  text?: string;
}

const Language = ({ text }: Props): JSX.Element => {
  const { Images, Common } = useTheme();
  const [visible, setVisible] = useState(false);

  const toggleDropdown = (): void => {
    setVisible(!visible);
  };

  const renderDropdown = (): JSX.Element => {
    return (
      <>
        {visible && (
          <View style={Common.language.dropdown}>
            <TouchableOpacity>
              <Text>ภาษาไทย</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>ภาษาไทย</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>ภาษาไทย</Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    );
  };

  return (
    <>
      <TouchableOpacity style={[Common.language.base]} onPress={toggleDropdown}>
        <Image source={Images.pdpa.thailand} resizeMode={'contain'} />
        <Text style={[Common.language.text]}>{text}</Text>
        <Images.icons.arrowDown width={8} height={8} color={'#FFF'} />
      </TouchableOpacity>
      {renderDropdown()}
    </>
  );
};

Language.defaultProps = {
  text: 'ไทย',
};

export default Language;
