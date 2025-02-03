import React, { FunctionComponent } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

interface Props {
  id?: number;
  title?: string;
  logoImage?: ImageSourcePropType;
  bannerImage?: ImageSourcePropType;
  createdBy?: string;
  onPress?: () => void;
  viewCount?: number;
  isWhite?: boolean;
}
// แสดงรายการ Community
const CommunityContent: FunctionComponent<Props> = ({
  id,
  title,
  logoImage,
  bannerImage,
  createdBy,
  onPress,
  viewCount,
  isWhite,
}) => {
  const { Layout, Fonts } = useTheme();
  const { t } = useTranslation('common');

  return (
    <TouchableOpacity
      style={[Layout.col, Layout.gap10]}
      onPress={onPress}
      key={id}
    >
      {bannerImage && (
        <View>
          <Image
            source={bannerImage}
            style={styles.bannerImage}
            resizeMode="stretch"
          />
          <View style={styles.viewCount}>
            <Text style={[Fonts.text16Med, Fonts.textWhite]}>
              {t('communityContent.see')} {viewCount}{' '}
              {t('communityContent.time')}
            </Text>
          </View>
        </View>
      )}
      <View style={[Layout.row, Layout.gap10, styles.container]}>
        {logoImage && (
          <View style={[styles.logo, isWhite && styles.logoWhite]}>
            <Image source={logoImage} resizeMode="contain" />
          </View>
        )}

        <View style={[Layout.fill, Layout.col]}>
          <Text
            style={[
              Fonts.text18,
              !isWhite && Fonts.textBlack,
              isWhite && Fonts.textWhite,
            ]}
          >
            {title}
          </Text>
          <Text style={[Fonts.text18, isWhite && Fonts.textWhite]}>
            {createdBy}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

CommunityContent.defaultProps = {
  id: 0,
  title: t('communityContent.title'),
  bannerImage: undefined,
  logoImage: undefined,
  createdBy: 'admin',
  onPress: () => {},
  viewCount: 10,
  isWhite: false,
};

const styles = StyleSheet.create({
  container: {},
  bannerImage: {
    width: '100%',
    borderRadius: 10,
  },
  viewCount: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(71, 84, 103,0.5)',
    marginRight: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  logo: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#F3F3F3',
    borderWidth: 1,
    borderRadius: 20,
    padding: 5,
  },
  logoWhite: {
    backgroundColor: '#FFFFFF',
  },
});

export default CommunityContent;
