import React, { FunctionComponent } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import Chip from '../Chip/Chip';
import { ChipColor } from '@/model/options';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

interface Props {
  id?: number;
  title?: string;
  description?: string;
  bannerImage?: ImageSourcePropType;
  contentImage?: ImageSourcePropType;
  createdBy?: string;
  onPress?: () => void;
  viewCount?: number;
}

interface OtherData {
  id: number;
  image: ImageSourcePropType;
  title: string;
  description: string;
  createdBy: string;
}
// แสดงรายละเอียด Community
const CommunityDetail: FunctionComponent<Props> = ({
  id,
  title,
  description,
  bannerImage,
  contentImage,
  createdBy,
  viewCount,
}) => {
  const { Images, Layout, Fonts } = useTheme();
  const { t } = useTranslation('common');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [other, setOther] = React.useState<OtherData[]>([
    {
      id: 1,
      image: Images.community.content,
      title: t('communityDetail.visualizationTitle'),
      description: t('communityDetail.visualizationDescription'),
      createdBy: t('communityDetail.postDate'),
    },
    {
      id: 1,
      image: Images.community.content,
      title: t('communityDetail.visualizationTitle'),
      description: t('communityDetail.visualizationDescription'),
      createdBy: t('communityDetail.postDate'),
    },
    {
      id: 1,
      image: Images.community.content,
      title: t('communityDetail.visualizationTitle'),
      description: t('communityDetail.visualizationDescription'),
      createdBy: t('communityDetail.postDate'),
    },
  ]);

  const OtherCommunity = (data: OtherData, key: string) => {
    return (
      <View key={key}>
        <View style={styles.otherImage}>
          <Image source={data.image} style={styles.otherImage} />
        </View>
        <View style={[styles.other]}>
          <Text style={[Fonts.text21, Fonts.textBlack]} numberOfLines={2}>
            {data.title}
          </Text>
          <Text style={[Fonts.text18]} numberOfLines={4}>
            {data.description}
          </Text>
          <Text style={[Fonts.text16]} numberOfLines={1}>
            {data.createdBy}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={[Layout.col, Layout.gap20]} key={id}>
      <View style={[Layout.col]}>
        <Text style={[Fonts.text18, Fonts.textBlack]}>{title}</Text>
        <View style={[Layout.row]}>
          <Chip
            title={t('communityDetail.technologyCorner')}
            color={ChipColor.primary}
          />
        </View>
      </View>

      <View style={[Layout.row, Layout.gap10, Layout.justifyContentBetween]}>
        <Text style={[Fonts.text18, Fonts.textBlack]}>{createdBy}</Text>
        <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
          <Text style={[Fonts.text18]}>{t('communityDetail.postDate')}</Text>
          <View style={styles.divider} />
          <Images.icons.view color={'#98A2B3'} />
          <Text style={[Fonts.text18]}>{viewCount}</Text>
        </View>
      </View>
      {bannerImage && (
        <View>
          <Image
            source={bannerImage}
            style={styles.bannerImage}
            resizeMode="stretch"
          />
        </View>
      )}
      <View style={[Layout.col, Layout.gap10, styles.container]}>
        <Text style={[Fonts.text18, Fonts.textBlack]}>{title}</Text>
        {description && (
          <Text style={[Fonts.text18, Fonts.textBlack]}>{description}</Text>
        )}
      </View>

      {contentImage && (
        <Image
          source={contentImage}
          style={styles.bannerImage}
          resizeMode="stretch"
        />
      )}

      <View style={[Layout.col, Layout.gap10, Layout.center]}>
        <Text style={[Fonts.text24Med]}>
          {t('communityDetail.shareArticle')}
        </Text>
        <View style={styles.dividerHeight} />
        <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
          <Images.community.facebook />
          <Images.community.line />
          <Images.community.copyLink />
        </View>
      </View>

      <View style={[styles.dividerWidth]} />

      <View style={[Layout.col, Layout.gap10]}>
        <Text style={[Fonts.text24Med]}>
          {t('communityDetail.relatedArticles')}
        </Text>
      </View>

      <View style={[Layout.row, Layout.gap10]}>
        <FlatList
          style={[Layout.fill]}
          contentContainerStyle={[Layout.gap10, styles.container]}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={other}
          renderItem={({ item, index }) => {
            return (
              <OtherCommunity key={`other-community-${index}`} {...item} />
            );
          }}
          keyExtractor={(_, index) => `other-community-${index}`}
        />
      </View>
    </View>
  );
};

CommunityDetail.defaultProps = {
  id: 0,
  title: t('communityDetail.title'),
  description: undefined,
  bannerImage: undefined,
  contentImage: undefined,
  createdBy: 'admin',
  onPress: () => {},
  viewCount: 10,
};

const styles = StyleSheet.create({
  container: {
    padding: 7,
  },
  other: {
    width: 168,
    borderRadius: 10,
    backgroundColor: '#FFF',
    elevation: 1,
    padding: 8,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  otherImage: {
    width: 168,
    height: 135,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: '#98A2B3',
  },
  dividerHeight: {
    height: 16,
    width: 1,
    backgroundColor: '#CCDDFF',
  },
  dividerWidth: {
    height: 1,
    width: '100%',
    backgroundColor: '#F2F4F7',
  },
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
});

export default CommunityDetail;
