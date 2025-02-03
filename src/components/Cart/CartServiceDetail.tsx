import React, { FunctionComponent } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import { THB } from '@/utils';
import ButtonIcon from '../Button/ButtonIcon';
import Button from '../Button/Button';
import InputNumber from '../Input/InputNumber';
import { ButtonColor, ButtonSize, ButtonVariant } from '@/model/options';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

interface Props {
  title?: string;
  quantity: number;
  modelSelected: string | null;
  image?: ImageSourcePropType;
  amount?: number;
  netAmount?: number;
  model?: string[];
  setModelSelected: (item: string) => void;
  setAddon: (item: boolean) => void;
  setQuantity: (item: number) => void;
}

// แสดงรายละเอียดสินค้าในตะกร้า
const CartServiceDetail: FunctionComponent<Props> = ({
  title,
  quantity,
  modelSelected,
  image,
  amount,
  netAmount,
  model,
  setAddon,
  setModelSelected,
  setQuantity,
}) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');

  return (
    <View style={[styles.header]}>
      <View style={[Layout.main]}>
        <Text style={[Fonts.text24Med, Fonts.textCenter]}>
          {t('cartServiceDetail.selectServiceType')}
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
      {/* Detail Service */}
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
              {t('cartServiceDetail.appointmentService')}
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

      <View style={[Layout.main, Layout.gap20, styles.root]}>
        <Text style={[Fonts.text21Bold]}>
          {t('cartServiceDetail.selectModel')}
          <Text style={[Fonts.textRed]}>
            {t('cartServiceDetail.requiredModel')}
          </Text>
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
    </View>
  );
};

CartServiceDetail.defaultProps = {
  title: t('cartServiceDetail.productName'),
  amount: 0,
  netAmount: 0,
  model: [
    t('cartServiceDetail.model1'),
    t('cartServiceDetail.model2'),
    t('cartServiceDetail.model3'),
  ],
  image: undefined,
};

const styles = StyleSheet.create({
  container: {},
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
  product: {
    backgroundColor: '#E6EEFF',
    padding: 16,
    marginTop: 20,
  },
  image: {
    width: 60,
    height: 60,
  },
});

export default CartServiceDetail;
