import React, { FunctionComponent, useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { IProductCard } from '@/model/product';
import { THB } from '@/utils';
import { CardSize } from '@/model/options';
import RenderHtml from 'react-native-render-html';

const { width: windowWidth } = Dimensions.get('window');

type ProductCardProps = IProductCard & {};

const ProductCard: FunctionComponent<ProductCardProps> = ({
  id,
  title,
  description,
  image,
  brand,
  netAmount = null,
  amount = null,
  discount,
  flashSale,
  quantity,
  service,
  serviceBy,
  learn,
  learnTime,
  size,
  booking,
}) => {
  const { Layout, Fonts, Images, Colors } = useTheme();

  const [width, setWidth] = useState(140);
  const [height, setHeight] = useState(140);
  const borderRadius = 5;
 
  useEffect(() => {
    
    setWidth(
      size === CardSize.SMALL
        ? 100
        : size === CardSize.MEDIUM
        ? 140
        : windowWidth / 2 - 20,
    );
    setHeight(
      size === CardSize.SMALL
        ? 100
        : size === CardSize.MEDIUM
        ? 140
        : windowWidth / 2 - 20,
    );
  }, [size]);

  return (
    <View style={[Layout.col, Layout.gap5, styles.container, { width: width }]}>
      <View style={[Layout.center]}>
      {image?.uri ? 
              <Image
              source={image || Images.mock.noImage}
              style={{ width: width, height: height, borderRadius: borderRadius }}
            />
            : 
            <Image
            source={Images.mock.noImage}
            style={{ width: width, height: height, borderRadius: borderRadius }}
          />
      }

      </View>
      {/* Brand */}
      {brand && <Text style={[Fonts.text16, Fonts.textGrey]}>{brand}</Text>}

      {/* Title or Name */}
      {title && <Text style={[Fonts.text16, Fonts.textBlack]}>{title}</Text>}
      {description && <Text style={[Fonts.text16, Fonts.textGrey]}>{description.replace(/<\/?[^>]+(>|$)/g, "")}</Text>}
      {/* Price */}
      <View>
        {amount !== null && (
          <View style={[Layout.row, Layout.gap5]}>
            <Text
              style={[Fonts.text16Bold, netAmount != null && Fonts.textRed]}
            >
              {THB.format(amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
            </Text>
            <Text style={[Fonts.text16, Fonts.textGrey]}>/ ชิ้น</Text>
          </View>
        )}

        {netAmount !== null && (
          <View style={[Layout.row, Layout.gap5]}>
            <Text
              style={[Fonts.text16, Fonts.textGrey, Fonts.lineThrough]}
              numberOfLines={1}
            >
              {THB.format(netAmount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
            </Text>
            {discount !== null && (
              <View style={[styles.discount]}>
                <Text style={[Fonts.text16, Fonts.textWhite]}>{discount}%</Text>
              </View>
            )}
          </View>
        )}

        {booking && (
          <View style={[Layout.row, Layout.gap5]}>
            <Text
              style={[Fonts.text21Med, Fonts.textPrimary]}
              numberOfLines={1}
            >
              นัดหมายเข้าบริการ
            </Text>
          </View>
        )}

        {flashSale && (
          <View style={[Layout.row, Layout.gap5]}>
            <Text style={[Fonts.text16, Fonts.textRed]}>
              เข้าร่วมจำนวน {quantity} ชิ้น
            </Text>
          </View>
        )}
        {service && (
          <View style={[Layout.row, Layout.gap5]}>
            <Text style={[Fonts.text16, Fonts.textBlack]} numberOfLines={1}>
              ติดตั้งโดย : {serviceBy}
            </Text>
          </View>
        )}
        {learn && (
          <View style={[Layout.row, Layout.gap5, Layout.alignItemsCenter]}>
            <Images.icons.clock color={Colors.black} />
            <Text style={[Fonts.text16, Fonts.textBlack]} numberOfLines={1}>
              {learnTime} ชั่วโมง
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  discount: {
    backgroundColor: '#FC1B13',
    borderRadius: 2,
    paddingHorizontal: 4,
  },
});

ProductCard.defaultProps = {
  // id: '1',
  // size: 'medium',
  // brand: 'MIKITA',
  // title: 'เครื่องดูดฝุ่นและเป่าลมขนาด 20 ลิตร ระบบ HEPA',
  // description: 'รุ่น HEPA-MAR22',
  // image: undefined,
  // amount: 1232990,
  // quantity: undefined,
  // discount: undefined,
  // flashSale: undefined,
  // netAmount: undefined,
  // service: undefined,
  // serviceBy: undefined,
  // serviceCount: undefined,
  // learn: undefined,
  // learnTime: undefined,
};

export default ProductCard;
