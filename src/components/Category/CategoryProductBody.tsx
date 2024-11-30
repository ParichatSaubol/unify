import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import CatalogImageList from '../Catalog/CatalogImageList';
import { TopBrand } from '@/model/brand';
import { getProductCategory } from '@/services/restapi/modules/product';
import { ScrollView } from 'react-native-gesture-handler';
import CatalogProductList from '../Catalog/CatalogProductList';
import { ICategoryType } from '@/model/product';

interface Props {}

// แสดงหัวข้อแคตตาล็อก
const CategoryProductBody: FunctionComponent<Props> = () => {
  const { Layout, Fonts, Images } = useTheme();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryType, setCategoryType] = useState<ICategoryType[]>([]);
  const { height } = useWindowDimensions();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [categoryTypeActive, setCategoryTypeActive] = useState<ICategoryType>();
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

  const fetchProductCategory = async () => {
    try {
      const data = await getProductCategory();
      const categories = data.res_data;
      const fistCategory = categories?.[0];
      setCategoryTypeActive(fistCategory);
      setCategoryType(categories);
    } catch (error) {}
  };

  const handleChangeCategoryTypeActive = useCallback((cType: ICategoryType) => {
    setCategoryTypeActive(cType);
  }, []);

  const init = async (): Promise<void> => {
    fetchProductCategory();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <View style={[Layout.row, styles.container, Layout.gap10]}>
      <View style={[styles.menu, { height: height - 150 }]}>
        <ScrollView>
          {categoryType.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleChangeCategoryTypeActive(item)}
              style={[Layout.row, Layout.justifyContentBetween]}
            >
              <View style={styles.menuArea}>
                <View style={styles.menuItems}>
                  <Image
                    source={{ uri: item.prod_icon_path, width: 20, height: 20 }}
                  />
                </View>
                <Text style={[Fonts.text14, { textAlign: 'center' }]}>
                  {item.prod_nameTH}
                </Text>
              </View>
              {categoryTypeActive?.prod_id === item.prod_id ? (
                <View style={styles.active} />
              ) : (
                <View style={styles.inactive} />
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={[Layout.fill, Layout.gap10]}>
        <View style={[Layout.fill, styles.body, Layout.gap10]}>
          <Text style={[Fonts.text16Med, Fonts.textBlack]}>
            {categoryTypeActive?.prod_nameTH}
          </Text>
          <CatalogProductList catalogId={categoryTypeActive?.prod_id} />
        </View>
        <View style={[styles.body, Layout.gap10]}>
          <Text style={[Fonts.text16Med, Fonts.textBlack]}>แบรนด์ยอดนิยม</Text>
          <CatalogImageList data={topBrand} />
        </View>
      </View>
    </View>
  );
};

CategoryProductBody.defaultProps = {
  title: 'ระบบพ่นสี',
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
    padding: 8,
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
    padding: 8,
  },
  active: {
    width: 6,
    backgroundColor: '#0038FF',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inactive: {
    width: 6,
    backgroundColor: 'transparent',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  body: {
    backgroundColor: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
});

export default CategoryProductBody;
