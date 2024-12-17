import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
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
import {
  ButtonColor,
  ButtonVariant,
  InputSelectionVariant,
  InputVariant,
} from '@/model/options';
import {
  getAmphur,
  getDistrict,
  getProvince,
} from '@/services/restapi/modules/profile';
import InputSelection from '../Input/InputSelection';
import { IAmphur, IDistrict, IProvince } from '@/model/profile';

interface Props {
  fieldsDisabled?: Partial<Record<keyof TRegisterAddress, boolean>>;
}

// ฟอร์มที่อยู่
const AddressFormWithSelection: FunctionComponent<Props> = ({
  fieldsDisabled,
}) => {
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  const { Layout, Fonts, Images, Colors } = useTheme();

  const [provinces, setProvinces] = useState<IProvince[]>([]);
  const [amphur, setAmpur] = useState<IAmphur[]>([]);
  const [districts, setDistricts] = useState<IDistrict[]>([]);

  const { control, setValue } = useFormContext<TRegisterAddress>();

  // handle callback
  const fetchGetProvinces = useCallback(async () => {
    try {
      const data = await getProvince();
      if (data?.res_code === '00' && data?.res_data) {
        const provinceData: IProvince[] = data?.res_data;
        setProvinces(provinceData);
        setDistricts([]);
        setAmpur([]);
      }
    } catch (error) {}
  }, []);

  const fetchAmphur = useCallback(async (provinceId: string) => {
    try {
      if (provinceId) {
        const data = await getAmphur(provinceId);
        if (data?.res_code === '00' && data?.res_data) {
          const amphurData: IAmphur[] = data?.res_data;
          setAmpur(amphurData);
          setDistricts([]);
        }
      }
    } catch (error) {}
  }, []);

  const fetchDistrict = useCallback(async (amphurId: string) => {
    try {
      if (amphurId) {
        const data = await getDistrict(amphurId);
        if (data?.res_code === '00' && data?.res_data) {
          const districtData: IDistrict[] = data?.res_data;
          setDistricts(districtData);
        }
      }
    } catch (error) {}
  }, []);

  const provinceOptions = useMemo(() => {
    return provinces?.map(province => province);
  }, [provinces]);

  const amphurOptions = useMemo(() => {
    return amphur?.map(amphurItem => amphurItem);
  }, [amphur]);

  const districtOptions = useMemo(() => {
    return districts?.map(district => district);
  }, [districts]);

  const init = async (): Promise<void> => {
    fetchGetProvinces();
  };

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <View>
      <Card title="กรอกที่อยู่สำหรับจัดส่งสินค้า">
        <View style={[Layout.col, Layout.gap10]}>
          {!fieldsDisabled?.name && (
            <View style={[Layout.row, Layout.gap10]}>
              <View style={[Layout.fill]}>
                <Text style={[Fonts.text18]}>ชื่อ - สกุล</Text>
                <Controller
                  name="name"
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
          )}

          {!fieldsDisabled?.phoneNumber && (
            <View style={[Layout.row, Layout.gap10]}>
              <View style={[Layout.fill]}>
                <Text style={[Fonts.text18]}>หมายเลขโทรศัพท์</Text>
                <Controller
                  name="phoneNumber"
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
          )}

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
            <View style={[styles.container, Layout.fill]}>
              <Text style={[Fonts.text18]}>จังหวัด</Text>
              <Controller
                name="province"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <InputSelection
                    placeholder="จังหวัด"
                    variant={InputSelectionVariant.outlined}
                    value={value}
                    onChange={option => {
                      onChange(option.NameInThai);
                      setValue('provinceId', option.Id);

                      setValue('district', '');
                      setValue('districtId', '');
                      setValue('subdistrict', '');
                      setValue('subDistrictId', '');
                      setValue('postalCode', '');

                      fetchAmphur(option.Id);
                    }}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    option={provinceOptions}
                    labelKey="NameInThai"
                    listHeight={135}
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
                  <InputSelection
                    placeholder="อำเภอ/เขต"
                    variant={InputSelectionVariant.outlined}
                    value={value}
                    onChange={option => {
                      onChange(option?.NameInThai);
                      setValue('districtId', option.Id);

                      setValue('subdistrict', '');
                      setValue('subDistrictId', '');
                      setValue('postalCode', '');

                      fetchDistrict(option?.Id);
                    }}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    option={amphurOptions}
                    labelKey="NameInThai"
                    listHeight={135}
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
                  <InputSelection
                    placeholder="ตำบล/แขวง"
                    variant={InputSelectionVariant.outlined}
                    value={value}
                    onChange={option => {
                      setValue('subDistrictId', option.Id);
                      setValue('postalCode', option?.ZipCode);
                      onChange(option.NameInThai);
                    }}
                    error={Boolean(error?.message)}
                    helperText={error?.message}
                    option={districtOptions}
                    labelKey="NameInThai"
                    listHeight={135}
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
          <Controller
            name="isDefault"
            control={control}
            render={({ field: { value, onChange } }) => (
              <ToggleSwitch
                setIsEnabled={() => {
                  onChange(!value);
                }}
                isEnabled={value || false}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
};

AddressFormWithSelection.defaultProps = {};

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

export default AddressFormWithSelection;
