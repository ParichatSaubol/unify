import React, { FunctionComponent, useEffect } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import ButtonIcon from '../Button/ButtonIcon';
import Input from '../Input/Input';
import Button from '../Button/Button';
import CouponCard from './CouponCard';
import CouponDetailModal from './CouponDetailModal';
import {
  ButtonColor,
  ButtonIconSize,
  ButtonSize,
  InputVariant,
} from '@/model/options';

interface Props {
  modalVisible?: boolean;
  setModalVisible?: (val: boolean) => void;
}

const CouponModal: FunctionComponent<Props> = ({
  modalVisible,
  setModalVisible,
}) => {
  const { Layout, Fonts, Images } = useTheme();

  const [isCoupon, setIsCoupon] = React.useState(false);
  const [couponSelected, setCouponSelected] = React.useState('');

  useEffect(() => {
    if (couponSelected !== '') {
      setIsCoupon(true);
    }
  }, [couponSelected]);

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
          <View style={[styles.modalView]}>
            <View>
              <Text style={Fonts.text24Med}>โค้ดที่ใช้ได้</Text>
            </View>
            <View style={styles.buttonClose}>
              <ButtonIcon
                icon={<Images.icons.close color="#475467" />}
                size={ButtonIconSize.small}
                onPress={() => {
                  setModalVisible && setModalVisible(false);
                }}
              />
            </View>
            <View style={[Layout.col]}>
              <View style={[Layout.row, Layout.gap10]}>
                <View style={[Layout.fill]}>
                  <Input
                    placeholder="กรอกโค้ดส่วนลด"
                    variant={InputVariant.outlined}
                  />
                </View>
                <Button
                  title="ค้นหา"
                  colors={ButtonColor.primary}
                  size={ButtonSize.small}
                />
              </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.root}>
              <ScrollView contentContainerStyle={[Layout.col, Layout.gap20]}>
                <Text style={Fonts.text24Med}>
                  ส่วนลดที่สามารถใช้กับคำสั่งซื้อนี้ได้
                </Text>
                <CouponCard
                  onViewDetailPress={id => {
                    setCouponSelected(id);
                  }}
                />
                <CouponCard />
              </ScrollView>
            </View>
          </View>
        </View>
      </Modal>
      <CouponDetailModal
        modalVisible={isCoupon}
        setModalVisible={val => {
          setIsCoupon(val);
          setCouponSelected('');
        }}
      />
    </>
  );
};

CouponModal.defaultProps = {
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
    height: 345,
    gap: 10,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: '#F2F4F7',
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
  buttonClose: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
});

export default CouponModal;
