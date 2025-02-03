import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useCart, useTheme } from '@/hooks';
import Button from '../Button/Button';
import { IServiceDetail } from '@/model/service';
import { THB } from '@/utils';
import CartServiceDetail from './CartServiceDetail';
import CartAddress from './CartAddress';
import { ButtonVariant } from '@/model/options';
import { useTranslation } from 'react-i18next';

type Props = IServiceDetail & {};

// แสดงรายละเอียดการจองบริการ
const CartBooking: FunctionComponent<Props> = ({
  id,
  image,
  title,
  amount,
  netAmount,
  model,
}) => {
  const { Layout, Fonts, Images, Colors } = useTheme();
  const { add } = useCart();
  const { t } = useTranslation('common');

  const [addon, setAddon] = useState(false); // แสดงรายละเอียดการจองบริการ
  const [isAddress, setIsAddress] = useState(false); // แสดงที่อยู่สำหรับจัดส่ง
  const [address, setAddress] = useState<number>(); // ที่อยู่สำหรับจัดส่ง
  const [modelSelected, setModelSelected] = useState<string | null>(null); // ตัวเลือกสินค้า
  const [quantity, setQuantity] = useState(1); // จำนวนสินค้า

  return (
    <>
      {addon && <View style={styles.overscreen} />}
      {isAddress && <View style={styles.overscreen} />}
      <View style={[styles.container]}>
        {addon && (
          <CartServiceDetail
            title={title}
            quantity={quantity}
            modelSelected={modelSelected}
            image={image}
            amount={amount}
            netAmount={netAmount}
            model={model}
            setModelSelected={setModelSelected}
            setAddon={setAddon}
            setQuantity={setQuantity}
          />
        )}
        {isAddress && (
          <CartAddress
            address={address}
            setAddress={val => {
              setIsAddress(false);
              setAddress(val);
            }}
          />
        )}
        {!isAddress && (
          <View style={[Layout.main, Layout.gap20, styles.root]}>
            <View
              style={[Layout.row, Layout.gap10, Layout.justifyContentBetween]}
            >
              <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
                <Images.icons.delivery color={Colors.gray800} />
                <Text style={[Fonts.text18]}>
                  {t('cartBooking.deliveryTo')}
                </Text>
                <Text style={[Fonts.text18, Fonts.textBlack]}>
                  {t('cartBooking.district')}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setIsAddress(true);
                  setAddon(false);
                }}
              >
                <Text style={[Fonts.text18Bold, Fonts.textPrimary]}>
                  {t('cartBooking.change')}
                </Text>
              </TouchableOpacity>
            </View>
            {!addon ? (
              // not addon
              <View style={[Layout.row, Layout.gap10]}>
                <View style={[Layout.fill]}>
                  <Button
                    title={t('cartBooking.interestedInInstallation')}
                    onPress={() => {
                      setAddon(true);
                      setIsAddress(false);
                    }}
                  />
                </View>
                <View style={[Layout.fill]}>
                  <Button
                    title={t('cartBooking.addToCart')}
                    startIcon={<Images.icons.cart color={Colors.primary} />}
                    variant={ButtonVariant.outlined}
                    onPress={() => {
                      id &&
                        add(
                          id,
                          { isChecked: true, quantity: 1 },
                          'service&solution',
                        );
                    }}
                  />
                </View>
              </View>
            ) : amount ? (
              <View style={[Layout.col, Layout.gap10]}>
                <View style={styles.totalBox}>
                  <Text style={[Fonts.text21Bold, Fonts.textPrimary]}>
                    {t('cartBooking.totalPrice')}
                  </Text>
                  <Text style={[Fonts.text21Bold, Fonts.textPrimary]}>
                    {THB.format(amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
                  </Text>
                </View>
                <Button title={t('cartBooking.bookService')} />
              </View>
            ) : (
              <View style={[Layout.col, Layout.gap10]}>
                <Button title={t('cartBooking.scheduleService')} />
              </View>
            )}
          </View>
        )}
      </View>
    </>
  );
};

// ค่าเริ่มต้นของ Props
CartBooking.defaultProps = {};

// รูปแบบ Style
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  root: {
    borderTopColor: '#EAECF0',
    borderTopWidth: 2,
    backgroundColor: '#fff',
  },
  overscreen: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '100%',
    zIndex: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  totalBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#E6EEFF',
    padding: 16,
    borderRadius: 10,
  },
});

export default CartBooking;
