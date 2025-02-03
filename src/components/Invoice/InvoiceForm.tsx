import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import {
  RoleType,
  InputVariant,
  ButtonSize,
  ButtonVariant,
} from '@/model/options';
import { Controller, useFormContext } from 'react-hook-form';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Card from '../Card/Card';
import Input from '../Input/Input';
import { TRegisterInvoice } from '@/model/customer';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';

interface Props {}

const InvoiceForm: FunctionComponent<Props> = ({}) => {
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');
  const { control, watch } = useFormContext<TRegisterInvoice>();

  return (
    <View style={[Layout.gap10]}>
      <Card
        title={
          watch('type') === RoleType.COMPANY
            ? t('invoiceForm.company')
            : t('invoiceForm.individual')
        }
      >
        <View style={[Layout.col, Layout.gap10]}>
          <View>
            <Text style={[Fonts.text18, { color: Colors.black }]}>
              {t('invoiceForm.taxInvoiceNameLabel')}
            </Text>
            <Controller
              name="name"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  placeholder={t('invoiceForm.taxInvoiceNamePlaceholder')}
                  variant={InputVariant.outlined}
                  value={value}
                  onChange={onChange}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
            />
          </View>
          {watch('type') === RoleType.COMPANY && (
            <View style={[Layout.rowCenter, Layout.gap10]}>
              <View>
                <Controller
                  name="isHeadOffice"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Button
                      size={ButtonSize.tiny}
                      startIcon={
                        value ? (
                          <Images.icons.circleAccept
                            color={Colors.primary}
                            height="18"
                          />
                        ) : (
                          <Images.icons.circle
                            color={Colors.primary}
                            height="18"
                          />
                        )
                      }
                      variant={ButtonVariant.text}
                      title={t('invoiceForm.isHeadOffice')}
                      onPress={() => {
                        onChange(true);
                      }}
                    />
                  )}
                />
              </View>
              <View>
                <Controller
                  name="isHeadOffice"
                  control={control}
                  render={({ field: { value, onChange } }) => (
                    <Button
                      size={ButtonSize.tiny}
                      startIcon={
                        !value ? (
                          <Images.icons.circleAccept
                            color={Colors.primary}
                            height="18"
                          />
                        ) : (
                          <Images.icons.circle
                            color={Colors.primary}
                            height="18"
                          />
                        )
                      }
                      variant={ButtonVariant.text}
                      title={t('invoiceForm.branch')}
                      onPress={() => {
                        onChange(false);
                      }}
                      endIcon={
                        <Controller
                          name="branch"
                          control={control}
                          render={({
                            field: {
                              value: valueBranch,
                              onChange: OnChangeBranch,
                            },
                            fieldState: { error },
                          }) => (
                            <View style={[Layout.fill, { width: 140 }]}>
                              <Input
                                disabled={value}
                                placeholder={t('invoiceForm.outlined')}
                                variant={InputVariant.outlined}
                                value={valueBranch}
                                onChange={OnChangeBranch}
                                error={Boolean(error?.message)}
                                helperText={error?.message}
                              />
                            </View>
                          )}
                        />
                      }
                    />
                  )}
                />
              </View>
            </View>
          )}
          <View>
            <Text style={[Fonts.text18, { color: Colors.black }]}>
              {t('invoiceForm.numberInvoiceNameLabel')}
            </Text>
            <Controller
              name="taxID"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  placeholder={t('invoiceForm.placeholder')}
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
      </Card>

      <Card title={t('invoiceForm.address')}>
        <View style={[Layout.col, Layout.gap10]}>
          <View style={[Layout.row, Layout.gap10]}>
            <View style={[Layout.fill]}>
              <Text style={[Fonts.text18]}>{t('invoiceForm.houseNumber')}</Text>
              <Controller
                name="address"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('invoiceForm.houseNumber')}
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
              <Text style={[Fonts.text18]}>{t('invoiceForm.building')}</Text>
              <Controller
                name="building"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('invoiceForm.building')}
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
              <Text style={[Fonts.text18]}>{t('invoiceForm.village')}</Text>
              <Controller
                name="village"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('invoiceForm.village')}
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
              <Text style={[Fonts.text18]}>{t('invoiceForm.road')}</Text>
              <Controller
                name="road"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('invoiceForm.road')}
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
              <Text style={[Fonts.text18]}>{t('invoiceForm.postalCode')}</Text>
              <Controller
                name="postalCode"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('invoiceForm.postalCode')}
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
              <Text style={[Fonts.text18]}>{t('invoiceForm.province')}</Text>
              <Controller
                name="province"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('invoiceForm.province')}
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
              <Text style={[Fonts.text18]}>{t('invoiceForm.district')}</Text>
              <Controller
                name="district"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('invoiceForm.district')}
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
              <Text style={[Fonts.text18]}>{t('invoiceForm.subdistrict')}</Text>
              <Controller
                name="subdistrict"
                control={control}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <Input
                    placeholder={t('invoiceForm.subdistrict')}
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

InvoiceForm.defaultProps = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {},
});

export default InvoiceForm;
