import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import Card from '../Card/Card';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../Input/Input';
import { TRegisterAddress } from '@/model/customer';
import Button from '../Button/Button';
import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import { ButtonColor, ButtonVariant, InputVariant } from '@/model/options';

interface Props {}

// ฟอร์มที่อยู่
const AddressForm: FunctionComponent<Props> = () => {
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  const { Layout, Fonts, Images, Colors } = useTheme();

  const { control } = useFormContext<TRegisterAddress>();

  return (
    <View>
      <Card title="กรอกที่อยู่สำหรับจัดส่งสินค้า">
        <View style={[Layout.col, Layout.gap10]}>
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>ชื่อ - สกุล</Text>
              <Controller
                name="building"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="ชื่อ - สกุล"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
          </View>

          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>หมายเลขโทรศัพท์</Text>
              <Controller
                name="building"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="หมายเลขโทรศัพท์"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
          </View>

          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>บ้านเลขที่</Text>
              <Controller
                name="address"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="บ้านเลขที่"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>ชื่ออาคาร/หมู่บ้าน</Text>
              <Controller
                name="building"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="ชื่ออาคาร/หมู่บ้าน"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
          </View>

          {/*  */}
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>หมู่ที่</Text>
              <Controller
                name="village"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="หมู่ที่"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>ถนน</Text>
              <Controller
                name="road"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="ถนน"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
          </View>

          {/*  */}
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>รหัสไปรษณีย์</Text>
              <Controller
                name="postalCode"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="รหัสไปรษณีย์"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>จังหวัด</Text>
              <Controller
                name="province"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="จังหวัด"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
          </View>

          {/*  */}
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>อำเภอ/เขต</Text>
              <Controller
                name="district"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="อำเภอ/เขต"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>ตำบล/แขวง</Text>
              <Controller
                name="subdistrict"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder="ตำบล/แขวง"
                    variant={InputVariant.outlined}
                    value={value}
                    onChange={onChange}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </Card>
      <View style={[Layout.col, Layout.main, Layout.gap20]}>
        <View style={[Layout.row, styles.locationBox]}>
          <Text style={[Fonts.text18]}>
            9/8 บางกรวยไทรน้อย ซอย 10 ตำบลบางกรวย อำเภอบางกรวย จังหวัดนนทบุรี
            11130
          </Text>
        </View>

        <View style={[Layout.row]}>
          <Button
            startIcon={<Images.icons.location color={Colors.primary} />}
            title="ปักตำแหน่งที่อยู่ปัจจุบันที่นี่!"
            colors={ButtonColor.primary}
            variant={ButtonVariant.outlined}
            fullWidth
            onPress={() => {
              navigate('AddressMap');
            }}
          />
        </View>
        <View
          style={[
            styles.defaultBox,
            Layout.row,
            Layout.justifyContentBetween,
            Layout.alignItemsCenter,
          ]}
        >
          <Text style={[Fonts.text21]}>ตั้งเป็นค่าเริ่มต้น</Text>
          <ToggleSwitch
            setIsEnabled={() => {
              //
            }}
            isEnabled={false}
          />
        </View>
      </View>
    </View>
  );
};

AddressForm.defaultProps = {};

const styles = StyleSheet.create({
  locationBox: {
    padding: 12,
    backgroundColor: '#E6EEFF',
    borderRadius: 10,
  },
  defaultBox: {
    borderRadius: 10,
    elevation: 1,
    backgroundColor: '#FFFFFF',
    padding: 12,
  },
  container: {},
  mt40: {
    marginTop: 40,
  },
});

export default AddressForm;
