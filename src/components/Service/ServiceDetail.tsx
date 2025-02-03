import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { THB } from '@/utils';
import { IServiceDetail } from '@/model/service';
import { useTranslation } from 'react-i18next';

type Props = IServiceDetail & {};

const ServiceDetail: FunctionComponent<Props> = ({
  title,
  star,
  soldCount,
  netAmount,
  amount,
  detail,
  standardFree,
  standardCost,
  serviceArea,
  note,
}) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');

  return (
    <View style={[Layout.col, Layout.gap10]}>
      <View
        style={[Layout.col, styles.container, Layout.gap10, Layout.bgWhite]}
      >
        <View style={Layout.fill}>
          <Text style={(Fonts.text21Med, Fonts.textBlack)}>{title}</Text>
        </View>
        <View>
          <View style={[Layout.row, Layout.gap10]}>
            <Images.icons.star />
            <Text style={Fonts.text18}>{star}</Text>
            <View style={styles.dividers} />
            <Text style={Fonts.text18}>
              {t('serviceDetail.sold')} {soldCount} {t('serviceDetail.piece')}
            </Text>
          </View>
        </View>
        {amount ? (
          <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
            <Text style={[Fonts.text34Med, Fonts.textRed]}>
              {THB.format(amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
            </Text>
            <Text style={[Fonts.text18, styles.netAmount]}>
              {THB.format(netAmount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
            </Text>
            <Text style={[Fonts.text18]}>{t('serviceDetail.perPiece')}</Text>
          </View>
        ) : (
          <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
            <Text style={[Fonts.text34Med, Fonts.textRed]}>
              {t('serviceDetail.appointment')}
            </Text>
          </View>
        )}

        <View style={[Layout.col, Layout.gap10]}>
          <Text style={[Fonts.text18, Fonts.textBlack]}>
            {t('serviceDetail.serviceDetails')}
          </Text>
          {detail?.map((item, index) => (
            <View style={[Layout.row, Layout.gap5]} key={index}>
              <Text>{'\u2022'}</Text>
              <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View
        style={[Layout.col, styles.container, Layout.gap10, Layout.bgWhite]}
      >
        <Text style={[Fonts.text24Med, Fonts.textBlack]}>
          {t('serviceDetail.serviceDescription')}
        </Text>
        <View style={styles.dividerHorizontal} />
        <View style={Layout.gap10}>
          <Text style={[Fonts.text21, Fonts.textPrimary]}>
            {t('serviceDetail.standardEquipmentFree')}
          </Text>
          <View>
            {standardFree?.map((item, index) => (
              <View style={[Layout.row, Layout.gap5]} key={index}>
                <Text>{'\u2022'}</Text>
                <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
              </View>
            ))}
          </View>

          <Text style={[Fonts.text21, Fonts.textPrimary]}>
            {t('serviceDetail.standardEquipmentAdditional')}
          </Text>
          <View>
            {standardCost?.map((item, index) => (
              <View style={[Layout.row, Layout.gap5]} key={index}>
                <Text>{'\u2022'}</Text>
                <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
              </View>
            ))}
          </View>

          <Text style={[Fonts.text21, Fonts.textPrimary]}>
            {t('serviceDetail.note')}
          </Text>
          <View>
            {note?.map((item, index) => (
              <View style={[Layout.row, Layout.gap5]} key={index}>
                <Text>{'\u2022'}</Text>
                <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={[Fonts.text24Med, Fonts.textBlack, styles.marginTop]}>
          {t('serviceDetail.serviceArea')}
        </Text>
        <View style={styles.dividerHorizontal} />
        <View style={Layout.gap10}>
          <View>
            {serviceArea?.map((item, index) => (
              <View style={[Layout.row, Layout.gap5]} key={index}>
                <Text>{'\u2022'}</Text>
                <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

ServiceDetail.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  dividers: {
    width: 1,
    height: '100%',
    backgroundColor: '#F2F4F7',
  },
  dividerHorizontal: {
    height: 1,
    width: '100%',
    backgroundColor: '#F2F4F7',
  },
  netAmount: {
    textDecorationLine: 'line-through',
  },
  marginTop: {
    marginTop: 40,
  },
});

export default ServiceDetail;
