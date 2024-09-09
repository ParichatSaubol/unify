import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import { LearnCardSize } from '@/model/options';

const { width: windowWidth } = Dimensions.get('window');

export interface LearnCardProps {
  size?: LearnCardSize;
  description?: string;
  image?: ImageSourcePropType;
  brand?: ImageSourcePropType;
  isPlay?: boolean;
}

const LearnCard: FunctionComponent<LearnCardProps> = ({
  description,
  image,
  brand,
  size,
  isPlay,
}) => {
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  const { Layout, Fonts, Images } = useTheme();

  const [width, setWidth] = useState(128);
  const [height, setHeight] = useState(128);

  useEffect(() => {
    setWidth(
      size === LearnCardSize.small
        ? 100
        : size === LearnCardSize.medium
        ? 128
        : windowWidth / 2 - 20,
    );
    setHeight(
      size === LearnCardSize.small
        ? 100
        : size === LearnCardSize.medium
        ? 128
        : windowWidth / 2 - 20,
    );
  }, [size]);

  return (
    <TouchableOpacity
      onPress={() => {
        navigate('LearnDetail' as never);
      }}
      style={[Layout.col, styles.container, { width: width }]}
    >
      <View style={[Layout.center]}>
        <Image
          source={image || Images.mock.noImage}
          style={{ width: width, height: height }}
        />
        {isPlay && (
          <View style={styles.playIcon}>
            <Images.icons.play />
          </View>
        )}
      </View>
      <LinearGradient
        colors={['#000', '#231F20']}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.root]}
      >
        {/* Brand */}
        {brand && (
          <View style={[Layout.scrollSpaceBetween, Layout.row]}>
            <Image
              source={brand}
              resizeMode="cover"
              resizeMethod="resize"
              style={styles.brandImage}
            />
            <Images.icons.warning1 color="#fff" />
          </View>
        )}

        {/* Title or Name */}
        <Text style={[Fonts.text16, Fonts.textWhite]}>{description}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 8,
  },
  playIcon: {
    position: 'absolute',
  },
  root: {
    padding: 8,
    gap: 10,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  brandImage: {
    width: 54,
    height: 16,
  },
  discount: {
    backgroundColor: '#FC1B13',
    borderRadius: 2,
    paddingHorizontal: 4,
  },
});

LearnCard.defaultProps = {
  size: LearnCardSize.medium,
  brand: undefined,
  description: 'รุ่น HEPA-MAR22',
  image: undefined,
  isPlay: true,
};

export default LearnCard;
