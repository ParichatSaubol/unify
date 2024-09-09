import React, { FunctionComponent, useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';

interface Props {}

interface Data {
  onPress?: () => void;
  breandImage?: ImageSourcePropType;
}

// รายการแบรนด์
const BrandList: FunctionComponent<Props> = () => {
  const { Layout, Images } = useTheme();

  const [data] = useState<Data[]>([
    {
      onPress: () => {},
      breandImage: Images.community.brand.a,
    },
    {
      onPress: () => {},
      breandImage: Images.community.brand.a,
    },
    {
      onPress: () => {},
      breandImage: Images.community.brand.a,
    },
    {
      onPress: () => {},
      breandImage: Images.community.brand.a,
    },
    {
      onPress: () => {},
      breandImage: Images.community.brand.a,
    },
    {
      onPress: () => {},
      breandImage: Images.community.brand.a,
    },
  ]);

  return (
    <FlatList
      style={Layout.fill}
      contentContainerStyle={[Layout.gap10, styles.container]}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item, index }) => {
        return (
          <View key={index} style={[styles.box]}>
            {item.breandImage && <Image source={item.breandImage} />}
          </View>
        );
      }}
    />
  );
};

BrandList.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    padding: 7,
  },
  box: {
    width: 72,
    height: 72,
    elevation: 5,
    padding: 5,
    borderRadius: 72 / 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BrandList;
