import React, { FunctionComponent, useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks';
import CatalogTitle, { CatalogTitleProps } from './CatalogTitle';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList, ProductParamsList } from 'types/navigation';
import { CatalogTitleColorActived } from '@/model/options';
import { useTranslation } from 'react-i18next';

interface Props {
  method?:
    | 'catalogType'
    | 'community'
    | 'unilearn'
    | 'flashStore'
    | 'promotion'
    | 'recommend'
    | 'unisolution'
    | 'topBrand'
    | 'popularTopBrands'
    | 'exclusiveBrand'
    | 'brand'
    | 'recommendForYou'
    | 'brandUnisolution'
    | 'brandUnilearn'
    | 'technicalCenter'
    | 'knowledgeIndustry'
    | 'knowledge'
    | 'industrialTechnologyCorner'
    | 'catalogLearn'
    | 'catalogSolution'
    | 'catalogService'
    | 'productsPurchasedServices'
    | 'brandServiceAndSolution'
    | 'topSolution'
    | 'topService'
    | 'paintSystem'
    | 'discountCoupon'
    | 'allPrivileges'
    | 'newPrivileges';
  icon?: JSX.Element;
  brandName?: string;
}

interface IScreen extends ApplicationStackParamList, ProductParamsList {}

const Catalog: FunctionComponent<Props> = ({ method, icon, brandName }) => {
  const { Layout, Images } = useTheme();
  const { t } = useTranslation('catalogs');

  const [mateData, setMateData] = useState<CatalogTitleProps>();
  const { navigate } = useNavigation<NavigationProp<IScreen>>();

  const TitleRender = () => {
    const data: CatalogTitleProps = {
      textColors: 'black',
    };
    //แยกเป็นหมวดหมู่ต่างๆ
    switch (method) {
      case 'topBrand':
        data.subTitle = t('catalog.topBrand');
        data.titleIcon = <Images.icons.unistore />;
        data.onPress = () => {
          navigate('ProductIndex');
        };
        break;
      case 'popularTopBrands':
        data.subTitle = t('catalog.popularTopBrands');
        data.title = t('catalog.popularLeadingBrands');
        data.onPress = () => {
          // navigate('ProductIndex');
        };
        break;
      case 'catalogType':
        data.title = t('catalog.catalogType');
        data.subTitle = t('catalog.productsSeparatedByCategory');
        break;

      case 'flashStore':
        data.flashSale = true;
        data.subTitle = t('catalog.flashStore');
        data.title = 'FLASH STORE';
        data.onPress = () => {
          navigate('ProductFlashStore');
        };
        break;

      case 'community':
        data.subTitle = t('catalog.community');
        data.title = t('catalog.communityInterestingArticles');
        data.textColors = 'white';
        data.onPress = () => {
          navigate('CommunityIndex');
        };
        break;

      case 'unisolution':
        data.subTitle = t('catalog.unisolution');
        data.titleIcon = <Images.icons.unisolution />;
        break;

      case 'unilearn':
        data.subTitle = t('catalog.unilearn');
        data.titleIcon = <Images.icons.unilearn />;
        break;

      case 'promotion':
        data.subTitle = t('catalog.promotion');
        data.title = t('catalog.promotion1');
        break;

      case 'recommend':
        data.subTitle = t('catalog.recommend');
        data.title = t('catalog.recommendedForYou');
        break;

      case 'recommendForYou':
        data.subTitle = t('catalog.recommendForYou');
        data.title = t('catalog.introduce');
        break;

      case 'brandUnisolution':
        data.subTitle = t('catalog.brandUnisolution');
        data.title = t('catalog.solusion');
        break;

      case 'industrialTechnologyCorner':
        data.subTitle = t('catalog.industrialTechnologyCorner');
        data.title = t('catalog.industryNews');
        break;

      case 'knowledge':
        data.subTitle = t('catalog.knowledge');
        data.title = t('catalog.industryNews');
        break;

      case 'knowledgeIndustry':
        data.subTitle = t('catalog.knowledgeIndustry');
        data.title = t('catalog.solusion');
        break;

      case 'technicalCenter':
        data.subTitle = 'Technical Center';
        data.title = t('catalog.technicalCenter');
        data.onPress = () => {
          navigate('CommunityResult');
        };
        break;

      case 'brandUnilearn':
        data.subTitle = t('catalog.unilearn');
        data.title = t('catalog.course');
        break;
      case 'exclusiveBrand':
        data.subTitle = t('catalog.topBrand');
        data.titleIcon = (
          <Image source={Images.brand.exclusive} style={styles.titleIcon} />
        );
        break;
      case 'brand':
        data.subTitle = brandName;
        data.brand = true;
        data.brandIcon = icon;
        break;
      case 'catalogLearn':
        data.title = t('catalog.catalogLearn');
        data.onPress = () => {
          navigate('CourseCategory');
        };
        break;
      case 'catalogSolution':
        data.title = t('catalog.catalogSolution');
        data.subTitle = t('catalog.engineering');
        data.isActived = true;
        data.onPress = () => {};
        break;
      case 'catalogService':
        data.title = t('catalog.catalogService');
        data.subTitle = t('catalog.maintenance');
        data.isActived = true;
        data.colorActived = CatalogTitleColorActived.red;
        data.onPress = () => {};
        break;
      case 'productsPurchasedServices':
        data.title = t('catalog.productsPurchasedServices');
        data.subTitle = t('catalog.industrialProducts');
        data.isActived = true;
        data.onPress = () => {};
        break;
      case 'brandServiceAndSolution':
        data.title = t('catalog.brandServiceAndSolution');
        data.subTitle = t('catalog.includingServices');
        data.isActived = true;
        data.colorActived = CatalogTitleColorActived.red;
        data.onPress = () => {};
        break;
      case 'topSolution':
        data.title = t('catalog.topSolution');
        data.subTitle = t('catalog.popularSolutions');
        data.isActived = true;
        data.onPress = () => {};
        break;
      case 'topService':
        data.title = t('catalog.topService');
        data.subTitle = t('catalog.popularSolutions');
        data.isActived = true;
        data.onPress = () => {};
        break;
      case 'paintSystem':
        data.title = t('catalog.paintSystem');
        data.subTitle = t('catalog.paintSprayingSolutions');
        data.isActived = true;
        data.onPress = () => {};
        break;
      case 'discountCoupon':
        data.title = t('catalog.discountCoupon');
        data.isActived = false;
        data.onPress = () => {
          navigate('UnipointCategory');
        };
        break;
      case 'allPrivileges':
        data.title = t('catalog.allPrivileges');
        data.onPress = () => {
          navigate('UnipointCategory');
        };
        break;
      case 'newPrivileges':
        data.title = t('catalog.newPrivileges');
        data.onPress = () => {
          navigate('UnipointForyou');
        };
        break;
      default:
        break;
    }

    setMateData(data);
  };

  useEffect(() => {
    TitleRender();
  }, []);

  return (
    <View style={[Layout.col]}>
      {mateData && (
        <CatalogTitle
          onPress={mateData?.onPress}
          subTitle={mateData?.subTitle}
          title={mateData?.title}
          titleIcon={mateData?.titleIcon}
          flashSale={mateData.flashSale}
          brand={mateData.brand}
          brandIcon={mateData.brandIcon}
          isActived={mateData.isActived}
          colorActived={mateData.colorActived}
          textColors={mateData.textColors}
        />
      )}
    </View>
  );
};

Catalog.defaultProps = {
  method: 'topBrand',
  icon: undefined,
  brandName: undefined,
};

const styles = StyleSheet.create({
  titleIcon: { height: 21, width: 'auto' },
});

export default Catalog;
