import React, { FunctionComponent } from 'react';
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import { THB } from '@/utils';
import ButtonIcon from '../Button/ButtonIcon';
import Button from '../Button/Button';
import InputNumber from '../Input/InputNumber';
import { IServiceOptions } from '@/model/product';
import ServiceOptions from '../Service/ServiceOptions';
import { ButtonColor, ButtonSize, ButtonVariant } from '@/model/options';

interface Props {
  amount?: number;
  image?: ImageSourcePropType;
  model?: string[];
  modelSelected: string | null;
  netAmount?: number;
  quantity: number;
  serviceOptions: IServiceOptions[];
  serviceOptionsSelected: IServiceOptions[];
  setAddon: (item: boolean) => void;
  setModelSelected: (item: string) => void;
  setIsService: (val: boolean) => void;
  setQuantity: (item: number) => void;
  setServicesSelected: (item: IServiceOptions[]) => void;
  title?: string;
}

// แสดงรายละเอียดสินค้าในตะกร้า
const CartProductDetail: FunctionComponent<Props> = ({
  amount,
  image,
  model,
  modelSelected,
  netAmount,
  quantity,
  serviceOptions,
  setAddon,
  setModelSelected,
  setIsService,
  setQuantity,
  setServicesSelected,
  serviceOptionsSelected,
  title,
}) => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <View style={[styles.header]}>
      <View style={[Layout.main]}>
        <Text style={[Fonts.text24Med, Fonts.textCenter]}>
          เลือกลักษณะสินค้า
        </Text>
        <View style={styles.buttonClose}>
          <ButtonIcon
            icon={<Images.icons.close color="#475467" />}
            onPress={() => {
              setAddon(false);
            }}
          />
        </View>
      </View>
      <View style={styles.divider} />
      {/* Detail Product */}
      <View style={[styles.product, Layout.row, Layout.gap10, Layout.center]}>
        {image && <Image source={image} style={styles.image} />}
        <View style={[Layout.fill, Layout.col]}>
          <Text style={[Fonts.text18, Fonts.textCenter]} numberOfLines={1}>
            {title}
          </Text>
          {amount ? (
            <View style={[Layout.row, Layout.gap5]}>
              <Text
                style={[Fonts.text16Bold, netAmount != null && Fonts.textRed]}
              >
                {THB.format(amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
              </Text>
              <Text style={[Fonts.text16, Fonts.textGrey]}>/ ชิ้น</Text>
            </View>
          ) : (
            <Text style={[Fonts.text21Med, Fonts.textRed]} numberOfLines={1}>
              นัดหมายเข้าบริการ
            </Text>
          )}
        </View>
        <View>
          <InputNumber
            value={quantity}
            onChange={val => {
              setQuantity(val);
            }}
          />
        </View>
      </View>

      {/* Model Selection */}
      <View style={[Layout.main, Layout.gap20, styles.root]}>
        <Text style={[Fonts.text21Bold]}>
          ลักษณะสินค้า <Text style={[Fonts.textRed]}>(*กรุณาเลือกโมเดล)</Text>
        </Text>
        <View style={styles.model}>
          {model?.map((item, index) => (
            <Button
              key={`model-${index}`}
              title={item}
              size={ButtonSize.mini}
              variant={ButtonVariant.outlined}
              colors={ButtonColor.solid}
              active={modelSelected === item}
              onPress={() => {
                setModelSelected(item);
              }}
            />
          ))}
        </View>
      </View>

      {/* Service Options */}
      <View style={[Layout.main, Layout.gap20, styles.root]}>
        <Text style={[Fonts.text21Bold]}>
          เพิ่มงานบริการพร้อมการซื้อสินค้าได้ทันที
        </Text>
        <ScrollView contentContainerStyle={styles.serviceOptions} horizontal>
          {serviceOptions?.map((item, index) => (
            <ServiceOptions
              {...item}
              key={`model-${index}`}
              active={serviceOptionsSelected.includes(item)}
              onPress={() => {
                if (serviceOptionsSelected.includes(item)) {
                  setServicesSelected([
                    ...serviceOptionsSelected.filter(i => i !== item),
                  ]);
                } else {
                  setServicesSelected([...serviceOptionsSelected, item]);
                }
              }}
              onViewDetail={() => {
                setIsService(true);
              }}
            />
          ))}
        </ScrollView>
      </View>

      <View style={[Layout.main, Layout.col, Layout.justifyContentBetween]}>
        <View style={[styles.totalBox]}>
          <Text style={[Fonts.text21Bold, Fonts.textPrimary]}>ราคารวม</Text>
          <Text style={[Fonts.text21Bold, Fonts.textPrimary]}>฿909,590.00</Text>
        </View>
      </View>
    </View>
  );
};

CartProductDetail.defaultProps = {
  title: 'ชื่อสินค้า',
  amount: 0,
  netAmount: 0,
  model: ['โมเดล 1', 'โมเดล 2', 'โมเดล 3'],
  image: undefined,
};

const styles = StyleSheet.create({
  container: {},
  totalBox: {
    backgroundColor: '#E6EEFF',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#F2F4F7',
  },
  root: {
    borderTopColor: '#EAECF0',
    borderTopWidth: 2,
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    borderColor: '#EAECF0',
    borderWidth: 2,
    backgroundColor: '#FFF',
    borderBottomWidth: 0,
  },
  buttonClose: {
    position: 'absolute',
    top: 20,
    right: 5,
  },
  model: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flex: 1,
    gap: 5,
  },
  serviceOptions: {
    flexDirection: 'row',
    gap: 10,
  },
  product: {
    padding: 16,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default CartProductDetail;
