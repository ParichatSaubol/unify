import React, { FunctionComponent, useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useCart, useTheme } from '@/hooks';
import { IProductCart } from '@/model/product';
import Checkbox from '../Checkbox/Checkbox';
import { THB } from '@/utils';
import ButtonIcon from '../Button/ButtonIcon';
import InputNumber from '../Input/InputNumber';
import { ButtonIconColors } from '@/model/options';

interface Props {
  cert: IProductCart[];
  method: 'service&solution' | 'product' | 'course';
  cartType?: 'cart' | 'checkout';
}

const CartItems: FunctionComponent<Props> = ({ cert, method, cartType }) => {
  const { Layout, Fonts, Images } = useTheme();
  const { currentCart, remove, update } = useCart();

  const [checkAll, setCheckAll] = React.useState(false);

  useEffect(() => {
    // เช็คว่าเลือกสินค้าทั้งหมดหรือไม่
    switch (method) {
      case 'course':
        setCheckAll(
          Object.keys(currentCart.courses).some(
            item => currentCart.courses[item].isChecked === true,
          ),
        );
        break;
      case 'product':
        setCheckAll(
          Object.keys(currentCart.items).some(
            item => currentCart.items[item].isChecked === true,
          ),
        );
        break;
      case 'service&solution':
        setCheckAll(
          Object.keys(currentCart.services).some(
            item => currentCart.services[item].isChecked === true,
          ),
        );
        break;

      default:
        break;
    }
  }, [currentCart]);
  // const { netAmount, discount, amount } = cert[0];

  return (
    <View style={[styles.container, Layout.gap20, Layout.center]}>
      <View style={[styles.containerTotal]}>
        {cartType === 'cart' && (
          <Checkbox isEnabled={checkAll} setIsEnabled={setCheckAll} />
        )}

        {method === 'course' && (
          <Text style={[Fonts.text21, Fonts.textBlack]}>
            คอร์สเรียนของฉัน ({cert.length} รายการ)
          </Text>
        )}
        {method === 'product' && (
          <Text style={[Fonts.text21, Fonts.textBlack]}>
            สินค้าทั้งหมด ({cert.length} รายการ)
          </Text>
        )}
        {method === 'service&solution' && (
          <Text style={[Fonts.text21, Fonts.textBlack]}>
            บริการติดตั้ง ({cert.length} รายการ)
          </Text>
        )}
      </View>
      {cert.map((item, index) => (
        <View style={[styles.item]} key={`cert-${index}`}>
          {cartType === 'cart' && (
            <View style={[Layout.alignItemsCenter, Layout.row]}>
              <Checkbox
                isEnabled={item.isCheck || false}
                setIsEnabled={() => {
                  item.id &&
                    update(
                      item.id,
                      { isChecked: !item.isCheck || false },
                      method,
                    );
                }}
              />
            </View>
          )}

          <View style={[]}>
            <Image
              source={item.image || Images.mock.noImage}
              style={styles.imageBox}
            />
          </View>
          <View style={[Layout.col, Layout.fill]}>
            <View style={[Layout.row, Layout.gap10]}>
              <Text
                numberOfLines={3}
                style={[Layout.fill, Fonts.text18, Fonts.textBlack]}
              >
                {item.title}
              </Text>
              {cartType === 'cart' && (
                <View>
                  <ButtonIcon
                    icon={<Images.icons.delete color="#000" />}
                    colors={ButtonIconColors.solid}
                    onPress={() => {
                      item.id && remove(item.id, method);
                    }}
                  />
                </View>
              )}
            </View>
            <View>
              <Text style={[Fonts.text16]} numberOfLines={1}>
                ตัวเลือกสินค้า : A
              </Text>
              <View style={[Layout.row]}>
                <View style={[Layout.fill]}>
                  {item.amount && (
                    <View style={[Layout.row, Layout.gap5]}>
                      <Text
                        style={[
                          Fonts.text16Bold,
                          item.netAmount != null && Fonts.textRed,
                        ]}
                        numberOfLines={1}
                      >
                        {THB.format(item.amount || 0).replace(
                          /\b(\w*THB\w*)\b/,
                          '฿ ',
                        )}
                        <Text style={[Fonts.text16, Fonts.textGrey]}>
                          / ชิ้น
                        </Text>
                      </Text>
                    </View>
                  )}

                  {item.netAmount && (
                    <View style={[Layout.row, Layout.fill, Layout.gap5]}>
                      <Text
                        style={[
                          Fonts.text16,
                          Fonts.textGrey,
                          Fonts.lineThrough,
                        ]}
                        numberOfLines={1}
                      >
                        {THB.format(item.netAmount || 0).replace(
                          /\b(\w*THB\w*)\b/,
                          '฿ ',
                        )}
                      </Text>
                      {item.discount && (
                        <View style={[styles.discount]}>
                          <Text style={[Fonts.text16, Fonts.textWhite]}>
                            {item.discount}%
                          </Text>
                        </View>
                      )}
                    </View>
                  )}
                </View>
                {cartType === 'cart' ? (
                  <InputNumber
                    isActive
                    value={item.quantity}
                    onChange={value => {
                      item.id && update(item.id, { quantity: value }, method);
                    }}
                  />
                ) : (
                  <View style={styles.quantityBox}>
                    <Text style={[Fonts.text21]}>{item.quantity}</Text>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

// ค่าเริ่มต้นของ Props
CartItems.defaultProps = {
  cartType: 'cart',
};

const styles = StyleSheet.create({
  container: {},
  containerTotal: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    padding: 8,
    elevation: 2,
    gap: 12,
  },
  item: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '100%',
    padding: 8,
    elevation: 2,
    gap: 12,
  },
  imageBox: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  discount: {
    backgroundColor: '#FC1B13',
    borderRadius: 2,
    paddingHorizontal: 4,
  },
  quantityBox: {
    width: 72,
    backgroundColor: '#F2F4F7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
});

export default CartItems;
