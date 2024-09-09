import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useCart, useTheme } from '@/hooks';
import Button from '../Button/Button';
import CartProductDetail from './CartProductDetail';
import { IProductDetail, IServiceOptions } from '@/model/product';
import ServiceOptionDetail from '../Service/ServiceOptionDetail';
import { ButtonVariant } from '@/model/options';

type Props = IProductDetail & {};

// แสดงรายละเอียดสินค้าในตะกร้า
const CartShopping: FunctionComponent<Props> = ({
  id,
  title,
  amount,
  images,
  model,
  serviceOptions,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Fonts, Images, Colors } = useTheme();
  const { add } = useCart();

  const [addon, setAddon] = useState(false); // แสดงรายละเอียดสินค้า
  const [isService, setIsService] = useState<boolean>(false); // แสดงรายละเอียดการจองบริการ

  const [servicesSelected, setServicesSelected] = useState<IServiceOptions[]>(
    [],
  ); // บริการที่เลือก
  const [modelSelected, setModelSelected] = useState<string | null>(null); // รุ่นสินค้า
  const [quantity, setQuantity] = useState<number>(1); // จำนวนสินค้า

  return (
    <>
      {addon || (isService && <View style={styles.overscreen} />)}
      <View style={[styles.container]}>
        {addon && (
          <CartProductDetail
            amount={amount}
            image={images && images[0]}
            model={model}
            modelSelected={modelSelected}
            quantity={quantity}
            serviceOptions={serviceOptions || []}
            serviceOptionsSelected={servicesSelected}
            setAddon={setAddon}
            setIsService={val => {
              setIsService(val);
              setAddon(false);
            }}
            setModelSelected={setModelSelected}
            setQuantity={setQuantity}
            setServicesSelected={setServicesSelected}
            title={title}
          />
        )}

        {isService && (
          <ServiceOptionDetail
            setAddon={val => {
              setIsService(val);
              setAddon(true);
            }}
            title={title}
          />
        )}

        {!isService && (
          <View style={[Layout.main, Layout.gap20, styles.root]}>
            <View style={[Layout.row, Layout.gap10]}>
              <View style={[Layout.fill]}>
                <Button
                  title="ซื้อสินค้าทันที"
                  onPress={() => {
                    setAddon(true);
                    setIsService(false);
                  }}
                />
              </View>
              <View style={[Layout.fill]}>
                <Button
                  startIcon={<Images.icons.cart color={Colors.primary} />}
                  variant={ButtonVariant.outlined}
                  title="เพิ่มลงในรถเข็น"
                  onPress={() => {
                    id && add(id, { isChecked: true, quantity: 1 }, 'product');
                  }}
                />
              </View>
            </View>
          </View>
        )}
      </View>
    </>
  );
};

CartShopping.defaultProps = {};

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
});

export default CartShopping;
