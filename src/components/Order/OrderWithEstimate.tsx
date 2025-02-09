import React, { FunctionComponent } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

interface Props {
  modalVisible?: boolean;
  setModalVisible?: (val: boolean) => void;
}

const OrderWithEstimate: FunctionComponent<Props> = ({
  modalVisible,
  setModalVisible,
}) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible && setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container}>
          <View style={[styles.modalView, Layout.center]}>
            <Images.icons.warning1 height="80" width="80" color="#0057FF" />
            <Text style={[Fonts.text32Med, Fonts.textBlack, Fonts.textCenter]}>
              {t('orderWithEstimate.waitingForEstimate')}
            </Text>
            <Text style={[Fonts.text21, Fonts.textCenter]}>
              {t('orderWithEstimate.paymentNotAvailable')}
            </Text>
            <Button
              fullRadius
              title={t('orderWithEstimate.closeWindow')}
              onPress={() => {
                setModalVisible && setModalVisible(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </>
  );
};

OrderWithEstimate.defaultProps = {
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
  modalView: {
    paddingHorizontal: 14,
    paddingVertical: 36,
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

export default OrderWithEstimate;
