import React, { FunctionComponent, useEffect, useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { useTheme } from '@/hooks';
import CatalogTitle, { CatalogTitleProps } from './CatalogTitle';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList, ProductParamsList } from 'types/navigation';
import { CatalogTitleColorActived } from '@/model/options';

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

  const [mateData, setMateData] = useState<CatalogTitleProps>();
  const { navigate } = useNavigation<NavigationProp<IScreen>>();

  const TitleRender = () => {
    const data: CatalogTitleProps = {
      textColors: 'black',
    };
    //แยกเป็นหมวดหมู่ต่างๆ
    switch (method) {
      case 'topBrand':
        data.subTitle = 'เอ็กซ์คลูซีฟแบรนด์ชั้นนำด้านอุตสาหกรรม';
        data.titleIcon = <Images.icons.unistore />;
        data.onPress = () => {
          navigate('ProductIndex');
        };
        break;
      case 'popularTopBrands':
        data.subTitle = 'แบรนด์ชั้นนำด้านอุตสาหกรรมกว่า 500 แบรนด์';
        data.title = 'แบรนด์ชั้นนำยอดนิยม';
        data.onPress = () => {
          // navigate('ProductIndex');
        };
        break;
      case 'catalogType':
        data.title = 'ช้อปสินค้าตามหมวดหมู่';
        data.subTitle = 'สินค้าแยกตามประเภทหมวดหมู่ อุตสาหกรรม ';
        break;

      case 'flashStore':
        data.flashSale = true;
        data.subTitle = 'แฟลชสโตร์ดีลลดพิเศษ';
        data.title = 'FLASH STORE';
        data.onPress = () => {
          navigate('ProductFlashStore');
        };
        break;

      case 'community':
        data.subTitle = 'เกี่ยวกับสินค้าอุตสาหกรรม และแบรนด์ผู้ผลิต';
        data.title = 'คอมมูนิตี้และบทความน่ารู้';
        data.textColors = 'white';
        data.onPress = () => {
          navigate('CommunityIndex');
        };
        break;

      case 'unisolution':
        data.subTitle = 'โซลูชั่นและงานบริการด้านอุตสาหกรรม';
        data.titleIcon = <Images.icons.unisolution />;
        break;

      case 'unilearn':
        data.subTitle = 'ศูนย์การเรียนรู้ด้านอุตสาหกรรม';
        data.titleIcon = <Images.icons.unilearn />;
        break;

      case 'promotion':
        data.subTitle = 'รวมโปรโมชั่นส่วนลดพิเศษทั้งหมด';
        data.title = 'โปรโมชั่น';
        break;

      case 'recommend':
        data.subTitle = 'รวบรวมสิ่งที่คุณสนใจมาไว้แล้วที่นี่!';
        data.title = 'สินค้าโรงงานแนะนำสำหรับคุณ!';
        break;

      case 'recommendForYou':
        data.subTitle = 'จากแบรนด์ และการค้นหายอดนิยม!';
        data.title = 'สินค้าแนะนำสำหรับคุณ!';
        break;

      case 'brandUnisolution':
        data.subTitle = 'งานบริการและโซลูชั่นจากผู้ให้บริการ';
        data.title = 'บริการ SOLUTION จากแบรนด์!';
        break;

      case 'industrialTechnologyCorner':
        data.subTitle = 'มุมเทคโนโลยีอุตสาหกรรม';
        data.title = 'ข่าวสารด้านอุตสาหกรรม';
        break;

      case 'knowledge':
        data.subTitle = 'Knowledge น่ารู้';
        data.title = 'ข่าวสารด้านอุตสาหกรรม';
        break;

      case 'knowledgeIndustry':
        data.subTitle = 'งานบริการและโซลูชั่นจากผู้ให้บริการ';
        data.title = 'บริการ SOLUTION จากแบรนด์!';
        break;

      case 'technicalCenter':
        data.subTitle = 'Technical Center';
        data.title = 'เทคนิคน่ารู้ เกี่ยวกับโรงงานอุตสาหกรรม';
        data.onPress = () => {
          navigate('CommunityResult');
        };
        break;

      case 'brandUnilearn':
        data.subTitle = 'ศูนย์การเรียนรู้ด้านอุตสาหกรรม';
        data.title = 'คอร์สเรียนแนะนำสำหรับคุณ!';
        break;
      case 'exclusiveBrand':
        data.subTitle = 'เอ็กซ์คลูซีฟแบรนด์ชั้นนำด้านอุตสาหกรรม';
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
        data.title = 'หมวดหมู่การเรียนรู้';
        data.onPress = () => {
          navigate('CourseCategory');
        };
        break;
      case 'catalogSolution':
        data.title = 'หมวดหมู่ งานโซลูชัน';
        data.subTitle = 'รวมงานบริการด้านเอ็นจิเนียร์มาไว้ที่นี่';
        data.isActived = true;
        data.onPress = () => {};
        break;
      case 'catalogService':
        data.title = 'หมวดหมู่ งานบริการ';
        data.subTitle = 'รวมงานบริการด้านติดตั้งและซ่อมบำรุงมาไว้ที่นี่';
        data.isActived = true;
        data.colorActived = CatalogTitleColorActived.red;
        data.onPress = () => {};
        break;
      case 'productsPurchasedServices':
        data.title = 'สินค้าซื้อคู่กับงานบริการ';
        data.subTitle = 'สินค้าอุตสาหกรรม ที่ตรงตามความต้องการของคุณ';
        data.isActived = true;
        data.onPress = () => {};
        break;
      case 'brandServiceAndSolution':
        data.title = 'งานบริการและโซลูชันตามแบรนด์';
        data.subTitle = 'รวมงานบริการและโซลูชั่นตามแบรนด์ผู้ผลิต';
        data.isActived = true;
        data.colorActived = CatalogTitleColorActived.red;
        data.onPress = () => {};
        break;
      case 'topSolution':
        data.title = 'งานโซลูชั่นยอดนิยม';
        data.subTitle = 'รวมโซลูชั่นยอดนิยมมาไว้ที่นี่ที่เดียว';
        data.isActived = true;
        data.onPress = () => {};
        break;
      case 'topService':
        data.title = 'งานบริการยอดนิยม';
        data.subTitle = 'รวมงานบริการยอดนิยมมาไว้ที่นี่ที่เดียว';
        data.isActived = true;
        data.onPress = () => {};
        break;
      case 'paintSystem':
        data.title = 'ระบบพ่นสี';
        data.subTitle = 'รวมโซลูชั่นงานพ่นสีมาไว้ที่นี่ที่เดียว';
        data.isActived = true;
        data.onPress = () => {};
        break;
      case 'discountCoupon':
        data.title = 'คูปองส่วนลด';
        data.isActived = false;
        data.onPress = () => {
          navigate('UnipointCategory');
        };
        break;
      case 'allPrivileges':
        data.title = 'สิทธิพิเศษทั้งหมด';
        data.onPress = () => {
          navigate('UnipointCategory');
        };
        break;
      case 'newPrivileges':
        data.title = 'สิทธิพิเศษมาใหม่';
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
