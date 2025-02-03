import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import CatalogTitle from './CatalogTitle';
import { useTranslation } from 'react-i18next';

interface Props {
  title?: string;
}

// แสดงหัวข้อแคตตาล็อก
const Catalog: FunctionComponent<Props> = ({ title }) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('catalogs');

  return (
    <View style={[Layout.col]}>
      <CatalogTitle
        subTitle={t('catalog.topBrand')}
        titleIcon={<Images.icons.unistore />}
      />
      <View style={Layout.fill}>
        <Text style={Fonts.text18}>{title}</Text>
      </View>
    </View>
  );
};

Catalog.defaultProps = {
  title: 'Press me',
};

export default Catalog;
