import React, { FunctionComponent, useState } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import CatalogList from '../Catalog/CatalogList';
import CatalogImageList from '../Catalog/CatalogImageList';
import { TopBrand } from '@/model/brand';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

interface Props {}

interface ICategoryType {
  name: string;
  title: string;
  icon: ImageSourcePropType;
}

// แสดงหัวข้อแคตตาล็อก
const CategoryBody: FunctionComponent<Props> = () => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryType, setCategoryType] = useState<ICategoryType[]>([
    {
      name: 'product',
      title: t('categoryBody.title'),
      icon: Images.category.a,
    },
  ]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [active, setActive] = useState<string>('product');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [topBrand, setTopBrand] = useState<TopBrand[]>([
    { title: 'Mitsubishi', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'GRACO', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'TRUSCO', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'IDEC', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'PATLITE', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'SMC', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'Makita', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'HITACHI', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'Mitsubishi', logo: <Image source={Images.brand.hitachiLogo} /> },
    { title: 'Mitsubishi', logo: <Image source={Images.brand.gracoLogo} /> },
    { title: 'Mitsubishi', logo: <Image source={Images.brand.hitachiLogo} /> },
  ]);

  return (
    <View style={[Layout.row, styles.container, Layout.gap10]}>
      <View style={[styles.menu]}>
        {categoryType.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[Layout.row, Layout.justifyContentBetween]}
          >
            <View style={styles.menuArea}>
              <View style={styles.menuItems}>
                <Image source={item.icon} />
              </View>
              <Text style={Fonts.text14}>{item.title}</Text>
            </View>
            <View style={styles.active} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={[Layout.fill, Layout.gap10]}>
        <View style={[Layout.fill, styles.body, Layout.gap10]}>
          <Text style={[Fonts.text16Med, Fonts.textBlack]}>
            {categoryType.find(f => f.name === active)?.title}
          </Text>
          <CatalogList />
        </View>

        <View style={[styles.body, Layout.gap10]}>
          <Text style={[Fonts.text16Med, Fonts.textBlack]}>
            {t('categoryBody.brand')}
          </Text>
          <CatalogImageList data={topBrand} />
        </View>
      </View>
    </View>
  );
};

CategoryBody.defaultProps = {
  title: t('categoryBody.title'),
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#F2F4F7',
  },
  menu: {
    width: 96,
  },
  menuArea: {
    flex: 1,
    flexDirection: 'column',
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: 50,
  },
  menuItems: {
    borderRadius: 100,
    width: 36,
    height: 36,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  active: {
    width: 6,
    backgroundColor: '#0038FF',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  body: {
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});

export default CategoryBody;
