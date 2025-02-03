import React, { FunctionComponent } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import AppBar from '../AppBar/AppBar';
import { useTranslation } from 'react-i18next';

interface Props {
  modalVisible?: boolean;
  setModalVisible?: (val: boolean) => void;
}

const PromotionDetailModal: FunctionComponent<Props> = ({
  modalVisible,
  setModalVisible,
}) => {
  const { Layout, Fonts } = useTheme();
  const { t } = useTranslation('common');

  const detail = [
    t('promotionDetailModal.couponDetails', { returnObjects: true }),
  ];

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible && setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.container}>
        <View style={[styles.modalView]}>
          <View>
            <AppBar
              title={t('promotionDetailModal.promotionConditions')}
              onPress={() => {
                setModalVisible && setModalVisible(false);
              }}
            />
          </View>
          <View style={styles.root}>
            <Text style={[Fonts.text24Med, Fonts.textPrimary]}>
              {t('promotionDetailModal.additionalDiscount')}
            </Text>
            <View style={[Layout.col, Layout.gap5]}>
              <Text style={[Fonts.text21, Fonts.textBlack]}>
                {t('promotionDetailModal.promotionPeriod')}
              </Text>
              <Text style={[Fonts.text16, Fonts.textBlack]}>
                {t('promotionDetailModal.promotionPeriodDates')}
              </Text>
            </View>

            <View style={[Layout.col, Layout.gap5]}>
              <Text style={[Fonts.text21, Fonts.textBlack]}>
                {t('promotionDetailModal.termsAndConditions')}
              </Text>
              {detail?.map((item, index) => (
                <View style={[Layout.row, Layout.gap5]} key={index}>
                  <Text>{'\u2022'}</Text>
                  <Text style={[Fonts.text16, Fonts.textBlack]}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

PromotionDetailModal.defaultProps = {
  modalVisible: false,
  setModalVisible: undefined,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.70)',
  },
  root: {
    height: 455,
    gap: 10,
    backgroundColor: '#E6EEFF',
    borderRadius: 20,
    padding: 12,
  },
  modalView: {
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: 20,
    width: '90%',
  },
});

export default PromotionDetailModal;
