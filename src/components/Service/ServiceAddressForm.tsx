import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import Card from '../Card/Card';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../Input/Input';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import { TSolutionAddress } from '@/model/solution';
import { InputVariant } from '@/model/options';
import { useTranslation } from 'react-i18next';

interface Props {}

const ServiceAddressForm: FunctionComponent<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Fonts, Images, Colors } = useTheme();
  const { t } = useTranslation('common');

  const { control } = useFormContext<TSolutionAddress>();

  return (
    <View>
      <Card title={t('serviceAddressForm.shippingAddress')}>
        <View style={[Layout.col, Layout.gap10]}>
          <Text style={[Fonts.text21, Fonts.textBlack]}>
            {t('serviceAddressForm.selectLocation')}
          </Text>

          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>
                {t('serviceAddressForm.address')}
              </Text>
              <Controller
                name="address"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('serviceAddressForm.address')}
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
                {t('serviceAddressForm.building')}
              </Text>
              <Controller
                name="building"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('serviceAddressForm.building')}
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
              <Text style={[Fonts.text18]}>
                {t('serviceAddressForm.village')}
              </Text>
              <Controller
                name="village"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('serviceAddressForm.village')}
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
              <Text style={[Fonts.text18]}>{t('serviceAddressForm.road')}</Text>
              <Controller
                name="road"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('serviceAddressForm.road')}
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
              <Text style={[Fonts.text18]}>
                {t('serviceAddressForm.postalCode')}
              </Text>
              <Controller
                name="postalCode"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('serviceAddressForm.postalCode')}
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
                {t('serviceAddressForm.province')}
              </Text>
              <Controller
                name="province"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('serviceAddressForm.province')}
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
              <Text style={[Fonts.text18]}>
                {t('serviceAddressForm.district')}
              </Text>
              <Controller
                name="district"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('serviceAddressForm.district')}
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
                {t('serviceAddressForm.subdistrict')}
              </Text>
              <Controller
                name="subdistrict"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('serviceAddressForm.subdistrict')}
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
    </View>
  );
};

ServiceAddressForm.defaultProps = {};

export default ServiceAddressForm;
