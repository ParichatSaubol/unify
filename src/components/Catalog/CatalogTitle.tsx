import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import { useTranslation } from 'react-i18next';

interface Props {
  setOtherMenu?: (open: boolean) => void;
}

// แสดงรายการหมวดหมู่
const Catalogs: FunctionComponent<Props> = ({ setOtherMenu }) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('catalogs');
  const navigation = useNavigation<NavigationProp<ApplicationStackParamList>>();

  // ข้อมูลของหมวดหมู่
  const [items] = useState([
    {
      icon: <Images.menu.topBrand />,
      text: t('catalogTitle.topBrand'),
      next: 'SearchBrand',
    },
    {
      icon: <Images.menu.catalog />,
      text: t('catalogTitle.catalog'),
      next: 'Category',
    },
    {
      icon: <Images.menu.solution />,
      text: t('catalogTitle.solution'),
      next: '',
    },
    {
      icon: <Images.menu.service />,
      text: t('catalogTitle.service'),
      next: '',
    },
    {
      icon: <Images.menu.other />,
      text: t('catalogTitle.other'),
      next: 'otherMenu',
    },
  ]);
  return (
    <View style={[Layout.row, Layout.gap10, Layout.justifyContentBetween]}>
      {items.map((v, k) => (
        <TouchableOpacity
          key={k}
          onPress={() => {
            if (v.next === 'otherMenu') {
              setOtherMenu && setOtherMenu(true);
            } else {
              v.next && navigation.navigate(v.next as any);
            }
          }}
        >
          <View style={[styles.root, Layout.gap10]} key={k}>
            <View style={[styles.container]}>{v.icon}</View>
            <Text style={[Fonts.text16Med]}>{v.text}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

Catalogs.defaultProps = {
  setOtherMenu: () => {},
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 87, 255, 0.15)',
    borderRadius: 100,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  point: {
    justifyContent: 'flex-end',
  },
});

export default Catalogs;
