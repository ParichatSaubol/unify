import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { Address } from '@/model/address';
import Button from '../Button/Button';
import ButtonIcon from '../Button/ButtonIcon';
import {
  ButtonColor,
  ButtonIconColors,
  ButtonIconVariant,
  ButtonSize,
  ButtonVariant,
} from '@/model/options';
import { useTranslation } from 'react-i18next';

type AddressCardProps = Address & {
  onEditPress?: () => void;
  onDeletePress?: () => void;
};

// แสดงที่อยู่
const AddressCard: FunctionComponent<AddressCardProps> = ({
  id,
  name,
  address,
  phoneNumber,
  isDefault,
  onDeletePress,
  onEditPress,
}) => {
  const { Images, Layout, Fonts } = useTheme();
  const { t } = useTranslation('address');

  return (
    <View style={[Layout.col, Layout.gap10, styles.container]} key={id}>
      <View style={[Layout.row]}>
        <View style={Layout.fill}>
          <Text style={Fonts.text18}>{name}</Text>
        </View>
        <View style={Layout.fill}>
          <Text style={Fonts.text18}>{phoneNumber}</Text>
        </View>
      </View>
      <View>
        <Text style={Fonts.text18}>{address}</Text>
      </View>
      <View style={[Layout.row, Layout.justifyContentBetween]}>
        {isDefault && (
          <Button
            startIcon={<Images.icons.car />}
            title={t('addressCard.default')}
            variant={ButtonVariant.outlined}
            colors={ButtonColor.primary}
            size={ButtonSize.tiny}
            active
          />
        )}
        <View
          style={[
            !isDefault && Layout.fill,
            Layout.row,
            Layout.justifyContentEnd,
            Layout.gap10,
          ]}
        >
          <ButtonIcon
            icon={<Images.icons.edit />}
            colors={ButtonIconColors.solid}
            variant={ButtonIconVariant.box}
            onPress={onEditPress}
          />
          <ButtonIcon
            icon={<Images.icons.delete />}
            colors={ButtonIconColors.solid}
            variant={ButtonIconVariant.box}
            onPress={onDeletePress}
          />
        </View>
      </View>
    </View>
  );
};

AddressCard.defaultProps = {
  onEditPress: () => {},
  onDeletePress: () => {},
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    padding: 12,
  },
});

export default AddressCard;
