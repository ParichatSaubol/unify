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
import { useTranslation } from 'react-i18next';

interface Props {}

// ฟอร์มที่อยู่
const AddressForm: FunctionComponent<Props> = () => {
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  const { Layout, Fonts, Images, Colors } = useTheme();
  const { t } = useTranslation('address');

  const { control } = useFormContext<TRegisterAddress>();

  return (
    <View>
      <Card title={t('addressForm.title')}>
        <View style={[Layout.col, Layout.gap10]}>
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>{t('addressForm.fullName')}</Text>
              <Controller
                name="building"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('addressForm.fullName')}
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
              <Text style={[Fonts.text18]}>{t('addressForm.phoneNumber')}</Text>
              <Controller
                name="building"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('addressForm.phoneNumber')}
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
              <Text style={[Fonts.text18]}>{t('addressForm.houseNumber')}</Text>
              <Controller
                name="address"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('addressForm.houseNumber')}
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
              <Text style={[Fonts.text18]}>
                {t('addressForm.buildingName')}
              </Text>
              <Controller
                name="building"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('addressForm.buildingName')}
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
              <Text style={[Fonts.text18]}>{t('addressForm.village')}</Text>
              <Controller
                name="village"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('addressForm.village')}
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
              <Text style={[Fonts.text18]}>{t('addressForm.road')}</Text>
              <Controller
                name="road"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('addressForm.road')}
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
              <Text style={[Fonts.text18]}>{t('addressForm.postalCode')}</Text>
              <Controller
                name="postalCode"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('addressForm.postalCode')}
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
              <Text style={[Fonts.text18]}>{t('addressForm.province')}</Text>
              <Controller
                name="province"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('addressForm.province')}
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
              <Text style={[Fonts.text18]}>{t('addressForm.district')}</Text>
              <Controller
                name="district"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('addressForm.district')}
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
              <Text style={[Fonts.text18]}>{t('addressForm.subdistrict')}</Text>
              <Controller
                name="subdistrict"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('addressForm.subdistrict')}
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
          <Text style={[Fonts.text18]}>{t('addressForm.currentAddress')}</Text>
        </View>

        <View style={[Layout.row]}>
          <Button
            startIcon={<Images.icons.location color={Colors.primary} />}
            title={t('addressForm.setCurrentLocation')}
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
          <Text style={[Fonts.text21]}>{t('addressForm.setDefault')}</Text>
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
