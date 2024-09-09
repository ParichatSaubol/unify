import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import CatalogTitle from './CatalogTitle';

interface Props {
  title?: string;
}

// แสดงหัวข้อแคตตาล็อก
const Catalog: FunctionComponent<Props> = ({ title }) => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <View style={[Layout.col]}>
      <CatalogTitle
        subTitle="เอ็กซ์คลูซีฟแบรนด์ชั้นนำด้านอุตสาหกรรม"
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
