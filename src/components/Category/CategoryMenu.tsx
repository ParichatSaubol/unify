import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import { ICategoryMenu, ICategoryMenuItem } from '@/model/category';
import { useTranslation } from 'react-i18next';

interface Props {
  isActive?: (typeof ICategoryMenu)[number];
  onPress?: (val: (typeof ICategoryMenu)[number]) => void;
}

// แสดงรายการหมวดหมู่
const CategoryMenu: FunctionComponent<Props> = ({ isActive, onPress }) => {
  const { Layout, Fonts } = useTheme();
  const { t } = useTranslation('common');

  const menuText = [Fonts.text21, Fonts.textCenter, Fonts.textBlack];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menu, setMenu] = useState<ICategoryMenuItem[]>([
    {
      name: 'product',
      title: t('categoryMenu.productTitle'),
      subTitle: t('categoryMenu.productSubTitle'),
    },
    {
      name: 'service',
      title: t('categoryMenu.serviceTitle'),
      subTitle: t('categoryMenu.serviceSubTitle'),
    },
    {
      name: 'solution',
      title: t('categoryMenu.solutionTitle'),
      subTitle: t('categoryMenu.solutionSubTitle'),
    },
  ]);

  return (
    <View style={[Layout.col, Layout.gap20, styles.container]}>
      <View style={[Layout.row]}>
        {menu.map(item => (
          <TouchableOpacity
            style={[Layout.fill]}
            key={item.name}
            onPress={() => {
              onPress && onPress(item.name);
            }}
          >
            <View
              style={[isActive === item.name && styles.active, styles.root]}
            >
              <Text style={menuText}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.message}>
        <Text style={[Fonts.text21, Fonts.textBlack]}>
          {menu.find(item => item.name === isActive)?.subTitle}
        </Text>
      </View>
    </View>
  );
};

CategoryMenu.defaultProps = {
  isActive: 'product',
  onPress: () => {},
};

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  root: {
    padding: 10,
  },
  message: {
    paddingHorizontal: 20,
  },
  active: {
    borderBottomWidth: 2,
    borderBottomColor: '#0057FF',
  },
});

export default CategoryMenu;
