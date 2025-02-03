import React, { FunctionComponent } from 'react';
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
import StepperFullsize from '../Stepper/StepperFullsize';
import { useTranslation } from 'react-i18next';

export interface CommunityCardProps {
  id?: number;
  tag?: string;
  title?: string;
  createdBy?: string;
  onMorePress?: () => void;
  onStepperPress?: (key: number) => void;
  brandImage?: ImageSourcePropType;
  image?: ImageSourcePropType;
  maxStepper?: number;
  currentStepper?: number;
}

const { width: windowWidth } = Dimensions.get('window');
// แสดงรูปภาพแบบ Carousel
const CommunityCard: FunctionComponent<CommunityCardProps> = ({
  image,
  brandImage,
  title,
  tag,
  createdBy,
  onMorePress,
  onStepperPress,
  maxStepper,
  currentStepper,
}) => {
  const { Layout, Images, Fonts } = useTheme();
  const { t } = useTranslation('common');

  return (
    <View style={[Layout.col, Layout.gap5, styles.container]}>
      <View style={styles.header}>
        <View style={[Layout.row, Layout.gap10]}>
          {brandImage && (
            <View style={styles.boxImage}>
              <Image
                source={brandImage}
                resizeMode="contain"
                style={Layout.fullSize}
              />
            </View>
          )}
          <View style={[Layout.col]}>
            <Text style={[Fonts.textWhite, Fonts.text16Med]}>{title}</Text>
            <Text style={[Fonts.textWhite, Fonts.text16Med]}>
              {t('communityCard.article')} {createdBy}
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={onMorePress}>
            <Text style={[Fonts.textWhite, Fonts.text16Med]}>
              {t('communityCard.read')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image
          source={image || Images.mock.noImage}
          resizeMode="stretch"
          style={{ width: windowWidth - 30, height: windowWidth }}
        />
      </View>
      <View style={[styles.footer]}>
        <View style={[Layout.row, Layout.center]}>
          <Text style={[Fonts.textWhite, Fonts.text21Bold]}>#{tag}</Text>
        </View>
        <StepperFullsize
          current={currentStepper}
          length={maxStepper}
          onPress={onStepperPress}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: 340,
    overflow: 'hidden',
  },
  header: {
    position: 'absolute',
    zIndex: 1,
    paddingHorizontal: 11,
    paddingVertical: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    width: windowWidth - 30,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxImage: {
    height: 38,
    width: 38,
    backgroundColor: '#fff',
    borderRadius: 19,
  },
  footer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0,
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: windowWidth - 30,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

CommunityCard.defaultProps = {
  id: 1,
  tag: undefined,
  title: undefined,
  createdBy: undefined,
  onMorePress: () => {},
  onStepperPress: () => {},
  brandImage: undefined,
  image: undefined,
  currentStepper: 1,
  maxStepper: 1,
};

export default CommunityCard;
