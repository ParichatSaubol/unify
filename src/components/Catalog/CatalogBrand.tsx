import React, { FunctionComponent, useEffect } from 'react';
import { Image, View } from 'react-native';
import { useTheme } from '@/hooks';
import { useLazyGetBrandRecommend } from '@/services/modules/brand';
import config from '@/utils/config';

interface Props {
  brandJSX?: JSX.Element[];
}

// แสดง Brand สินค้า
const CatalogBrand: FunctionComponent<Props> = ({ brandJSX = [] }) => {
  const { Layout, Images } = useTheme();

  const [brandQuery] = useLazyGetBrandRecommend();
  const [brand, setBrand] = React.useState<JSX.Element[]>([]);

  useEffect(() => {
    brandQuery({
      onCompleted: data => {
        console.log('data', data);
        const items: JSX.Element[] = [];
        data?.getBrandRecommend?.brandRecommend.forEach(item => {
          item.brand?.brand_logo_path &&
            items.push(
              <Image
                source={{ uri: config.baseURL + item.brand?.brand_logo_path }}
                style={{ width: 80 }}
                key={item.brm_brand_id}
              />,
            );
        });

        setBrand(items);
      },
    });
  }, []);

  return (
    <View style={[Layout.row, Layout.justifyContentBetween, { gap: 10 }]}>
      {brandJSX.length > 0 ? brandJSX : brand}
    </View>
  );
};

CatalogBrand.defaultProps = {
  brandJSX: [],
};

export default CatalogBrand;
