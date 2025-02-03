import React, { FunctionComponent, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import ButtonIcon from '../Button/ButtonIcon';
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

interface Props {
  title?: string;
  setAddon: (item: boolean) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ServiceOptionDetail: FunctionComponent<Props> = ({ title, setAddon }) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [datail, setDatail] = useState({
    id: 1,
    title: t('serviceOptionDetail.productName'),
    details: [t('serviceOptionDetail.details', { returnObjects: true })],
    addon: [t('serviceOptionDetail.addon', { returnObjects: true })],
  });

  return (
    <View style={[styles.header]}>
      <View style={[Layout.main]}>
        <Text style={[Fonts.text24Med, Fonts.textCenter]}>
          {t('serviceOptionDetail.serviceDetailsTitle')}
        </Text>
        <View style={styles.buttonClose}>
          <ButtonIcon
            icon={<Images.icons.arrowLeft color="#475467" />}
            onPress={() => {
              setAddon(false);
            }}
          />
        </View>
      </View>
      <View style={styles.divider} />
      {/* Detail Product */}
      <ScrollView style={styles.container}>
        <View style={[styles.product, Layout.col, Layout.gap10]}>
          <Text style={[Fonts.text21]}>
            {t('serviceOptionDetail.productServiceTitle')}
          </Text>
          <Text style={[Fonts.text21, Fonts.textPrimary]}>
            {t('serviceOptionDetail.standardEquipmentIncluded')}
          </Text>
          {datail.details?.map((item, index) => (
            <View style={[Layout.row, Layout.gap5]} key={index}>
              <Text>{'\u2022'}</Text>
              <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
            </View>
          ))}

          <Text style={[Fonts.text21, Fonts.textPrimary]}>
            {t('serviceOptionDetail.additionalStandardEquipment')}
          </Text>
          {datail.addon?.map((item, index) => (
            <View style={[Layout.row, Layout.gap5]} key={index}>
              <Text>{'\u2022'}</Text>
              <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
            </View>
          ))}
          {/*  */}
        </View>
      </ScrollView>
    </View>
  );
};

ServiceOptionDetail.defaultProps = {
  title: t('serviceOptionDetail.productName'),
};

const styles = StyleSheet.create({
  container: {
    height: 350,
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
    left: 5,
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

export default ServiceOptionDetail;
