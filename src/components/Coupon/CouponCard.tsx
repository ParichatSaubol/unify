import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import Button from '../Button/Button';
import { ButtonSize } from '@/model/options';
import { useTranslation } from 'react-i18next';

interface Props {
  id?: string;
  onViewDetailPress?: (id: string) => void;
}

const CouponCard: FunctionComponent<Props> = ({ id, onViewDetailPress }) => {
  const { Layout, Fonts } = useTheme();
  const { t } = useTranslation('common');

  const detail = [t('couponCard.couponDetails', { returnObjects: true })];

  return (
    <View style={styles.root}>
      <View style={[styles.container]}>
        <View style={[styles.divider, Layout.fill]}>
          <View
            style={[
              Layout.row,
              Layout.justifyContentBetween,
              Layout.alignItemsCenter,
            ]}
          >
            <Text style={[Fonts.text21Bold, Fonts.textPrimary]}>
              {t('couponCard.additionalDiscount')}
            </Text>
            <TouchableOpacity
              onPress={() => {
                onViewDetailPress && id && onViewDetailPress(id);
              }}
            >
              <Text style={[Fonts.text16, Fonts.textPrimary]}>
                {t('couponCard.viewConditions')}
              </Text>
            </TouchableOpacity>
          </View>
          {detail?.map((item, index) => (
            <View style={[Layout.row, Layout.gap5]} key={index}>
              <Text>{'\u2022'}</Text>
              <Text style={[Fonts.text16, Fonts.textBlack]}>{item}</Text>
            </View>
          ))}
        </View>
        <View style={styles.button}>
          <Button title={t('couponCard.saveCode')} size={ButtonSize.tiny} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={[Fonts.text18, Fonts.textWhite]}>
          {t('couponCard.newCustomerOnly')}
        </Text>
      </View>
    </View>
  );
};

CouponCard.defaultProps = {
  id: '1',
  onViewDetailPress: undefined,
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  button: { width: 80 },
  container: {
    backgroundColor: '#E6EEFF',
    padding: 8,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  divider: {
    borderRightColor: '#1680F9',
    borderRightWidth: 1,
    borderStyle: 'dashed',
    paddingRight: 10,
  },
  footer: {
    backgroundColor: '#669AFF',
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
});

export default CouponCard;
