import React, { FunctionComponent, useState } from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import { CatalogListData } from '@/model/category';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import { useTranslation } from 'react-i18next';

interface Props {
  rowNumber?: number;
  data?: CatalogListData[];
}

const { width: windowWidth } = Dimensions.get('window');

// แสดงรายการหมวดหมู่
const CatalogList: FunctionComponent<Props> = ({ rowNumber = 2, data }) => {
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  const { Layout, Images, Fonts } = useTheme();
  const { t } = useTranslation('catalogs');
  // ข้อมูลของหมวดหมู่
  const [mockData] = useState<CatalogListData[]>([
    { id: 1, name: t('catalogList.paintSystem'), image: Images.catalog.mockA },
    {
      id: 2,
      name: t('catalogList.safetyEquipment'),
      image: Images.catalog.mockB,
    },
    { id: 3, name: t('catalogList.machineParts'), image: Images.catalog.mockC },
    {
      id: 4,
      name: t('catalogList.automationSystem'),
      image: Images.catalog.mockD,
    },
    {
      id: 5,
      name: t('catalogList.safetyMachineParts'),
      image: Images.catalog.mockE,
    },
    {
      id: 6,
      name: t('catalogList.chemicalLiquidEnvironmentProducts'),
      image: Images.catalog.mockF,
    },
    {
      id: 7,
      name: t('catalogList.drivesAndTransportRobots'),
      image: Images.catalog.mockG,
    },
    {
      id: 8,
      name: t('catalogList.otherProducts'),
      image: Images.catalog.mockH,
    },
  ]);

  const renderItem = (v: CatalogListData) => {
    return (
      <TouchableOpacity
        style={[
          Layout.col,
          Layout.alignItemsCenter,
          {
            width: (windowWidth - 30) / Math.ceil(mockData.length / rowNumber),
          },
        ]}
        onPress={() => {
          navigate('ServiceDetail');
        }}
      >
        <View style={styles.image}>
          <Image source={v.image} />
        </View>
        <View>
          <Text style={[Fonts.text16, Fonts.textCenter]}>{v.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[Layout.col]}>
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
        horizontal={true}
        style={Layout.fullWidth}
        showsHorizontalScrollIndicator={false}
        directionalLockEnabled={true}
        alwaysBounceVertical={false}
      >
        <FlatList
          contentContainerStyle={[Layout.gap20]}
          numColumns={Math.ceil(mockData.length / rowNumber)}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={data || mockData}
          renderItem={({ item }) => {
            return renderItem(item);
          }}
          keyExtractor={(_, index) => `catalog-list-${index}`}
        />
      </ScrollView>
    </View>
  );
};

CatalogList.defaultProps = {
  rowNumber: 2,
  data: undefined,
};

const styles = StyleSheet.create({
  container: {},
  image: { height: 70 },
  imageBox: { width: 80 },
});

export default CatalogList;
