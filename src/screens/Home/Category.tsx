import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import {
  AppBar,
  CategoryBody,
  CategoryMenu,
  DefaultLayout,
  InputSearchProduct,
} from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { ICategoryMenu } from '@/model/category';
import { InputSearchColor } from '@/model/options';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'Category'>;

// @refresh reset
const Category = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  const { Layout } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [notifications, setNotifications] = useState<[]>([]);
  const [activeMenu, setActiveMenu] =
    useState<(typeof ICategoryMenu)[number]>('product'); // 'product', 'service', 'solution'

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  // child elements
  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        onPress={() => {
          navigation.goBack();
        }}
        title="หมวดหมู่"
      />

      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View
          style={[Layout.main, Layout.gap20, Layout.bgWhite, styles.header]}
        >
          <InputSearchProduct
            placeholder="ค้นหาหมวดหมู่ทั้งหมดได้ที่นี่"
            backgroundColor={InputSearchColor.gray}
          />

          <CategoryMenu
            isActive={activeMenu}
            onPress={val => {
              setActiveMenu(val);
            }}
          />
        </View>
        <CategoryBody />
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: { height: 46 },
  header: { paddingBottom: 0 },
});

export default Category;
