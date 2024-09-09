import React, { FunctionComponent, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import ButtonIcon from '../Button/ButtonIcon';
import Button from '../Button/Button';
import { THB } from '@/utils';
import { IProductDetail } from '@/model/product';
import {
  ButtonColor,
  ButtonIconColors,
  ButtonIconVariant,
  ButtonSize,
  ButtonVariant,
} from '@/model/options';

type ProductDetailProps = IProductDetail & {};

const ProductDetail: FunctionComponent<ProductDetailProps> = ({
  title,
  code,
  star,
  soldCount,
  netAmount,
  amount,
  isGenuine,
  isReady,
  delivered,
  brandLogo,
  brandName,
  brandDescription,
  detail,
  descriptionImage,
  description,
}) => {
  const { Layout, Fonts, Images } = useTheme();

  useEffect(()=>{
    console.log(title)
  },[])

  return (
    <View style={[Layout.col, Layout.gap10]}>
      <View style={[Layout.col, styles.container, Layout.gap10]}>
        <View style={Layout.fill}>
          <Text style={(Fonts.text21Med, Fonts.textBlack)}>{title}</Text>
        </View>
        <View
          style={[
            Layout.fill,
            Layout.row,
            Layout.alignItemsCenter,
            Layout.gap10,
          ]}
        >
          <Text style={Fonts.text18}>รหัสสินค้า : {code}</Text>
          <ButtonIcon
            colors={ButtonIconColors.white}
            variant={ButtonIconVariant.box}
            icon={<Images.icons.copy />}
          />
        </View>
        <View>
          <View style={[Layout.row, Layout.gap10]}>
            <Images.icons.star />
            <Text style={Fonts.text18}>{star}</Text>
            <View style={styles.dividers} />
            <Text style={Fonts.text18}>ขายแล้ว {soldCount} ชิ้น</Text>
          </View>
        </View>
        <View>
          <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
            <Text style={[Fonts.text34Med, Fonts.textRed]}>
              {THB.format(amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
            </Text>
            <Text style={[Fonts.text18, styles.netAmount]}>
              {THB.format(netAmount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
            </Text>
            <Text style={[Fonts.text18]}>/ ชิ้น</Text>
          </View>
        </View>
        <View>
          <View style={[Layout.row, Layout.gap10]}>
            {isGenuine && (
              <>
                <Images.icons.warning2 color={'#0057FF'} />
                <Text style={Fonts.text18}>ของแท้ 100%</Text>
                <View style={styles.dividers} />
              </>
            )}
            {isReady && (
              <>
                <Images.icons.truckfast color={'#0057FF'} />
                <Text style={Fonts.text18}>สินค้าพร้อมส่ง</Text>
                <View style={styles.dividers} />
              </>
            )}
            {delivered && (
              <>
                <Images.icons.boxtick color={'#0057FF'} />
                <Text style={Fonts.text18}>{delivered}</Text>
              </>
            )}
          </View>
        </View>
        <View>
          <View style={[Layout.row, Layout.gap10]}>
            <View style={Layout.fill}>
              <Button
                title="แคตตาล็อก"
                size={ButtonSize.mini}
                endIcon={<Images.icons.arrowRight color="white" />}
                fullWidth
              />
            </View>
            <View style={Layout.fill}>
              <Button
                title="CAD"
                colors={ButtonColor.primary}
                size={ButtonSize.mini}
                variant={ButtonVariant.outlined}
                endIcon={<Images.icons.arrowRight color="#0057FF" />}
                fullWidth
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.brandContainer}>
        {brandLogo && <Image source={brandLogo} style={styles.brandLogo} />}
        <View style={[Layout.col, Layout.gap5]}>
          <Text style={[Fonts.text16Bold, Fonts.textBlack]}>{brandName}</Text>
          <Text style={[Fonts.text16]}>{brandDescription}</Text>
          <View style={styles.brandButton}>
            <Button
              title="ดูสินค้าแบรนด์นี้"
              colors={ButtonColor.primary}
              size={ButtonSize.mini}
              variant={ButtonVariant.outlined}
              endIcon={<Images.icons.arrowRight color="#0057FF" />}
              fullWidth
            />
          </View>
        </View>
      </View>
      <View style={[Layout.col, styles.container, Layout.gap10]}>
        <Text style={[Fonts.text21Med, Fonts.textBlack]}>รายละเอียดสินค้า</Text>
        <View>
          {detail &&
            Object.keys(detail)?.map((key, index) => (
              <View
                key={index}
                style={[
                  Layout.row,
                  index % 2 === 0 ? styles.active : styles.nonActive,
                ]}
              >
                <Text
                  style={[Fonts.text16, styles.detailFirst]}
                  numberOfLines={1}
                >
                  {key}
                </Text>
                <Text style={[Fonts.text16, Fonts.textBlack]} numberOfLines={1}>
                  {detail[key]}
                </Text>
              </View>
            ))}
        </View>
      </View>
      <View style={[Layout.col, styles.container, Layout.gap10]}>
        <Text style={[Fonts.text21Med, Fonts.textBlack]}>
          Product Description
        </Text>
        {description?.map((item, index) => (
          <View style={[Layout.row, Layout.gap5]} key={index}>
            <Text>{'\u2022'}</Text>
            <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
          </View>
        ))}
      </View>
      {descriptionImage && (
        <View style={[Layout.center]}>{descriptionImage}</View>
      )}
    </View>
  );
};

ProductDetail.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  brandContainer: {
    backgroundColor: '#F2F4F7',
    flexDirection: 'row',
    gap: 10,
    padding: 16,
  },
  nonActive: {
    padding: 4,
  },
  active: {
    backgroundColor: '#F9FAFB',
    padding: 4,
  },
  brandLogo: {
    height: 60,
    width: 60,
  },
  brandButton: {
    width: 132,
  },
  detailFirst: {
    width: '40%',
  },
  dividers: {
    width: 1,
    height: '100%',
    backgroundColor: '#F2F4F7',
  },
  netAmount: {
    textDecorationLine: 'line-through',
  },
});

export default ProductDetail;
