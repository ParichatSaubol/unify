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

interface Props {}

const InvoiceForm: FunctionComponent<Props> = ({}) => {
  const { Layout, Fonts, Images } = useTheme();

  const { control, watch } = useFormContext<TRegisterInvoice>();

  return (
    <View style={[Layout.gap10]}>
      <Card
        title={
          watch('type') === RoleType.COMPANY
            ? 'ข้อมูลลงทะเบียน (สำหรับลูกค้าบริษัท)'
            : 'ข้อมูลลงทะเบียน (บุคคลธรรมดา)'
        }
      >
        <View style={[Layout.col, Layout.gap10]}>
          <View>
            <Text style={[Fonts.text18, { color: Colors.black }]}>
              ชื่อสำหรับการออกใบกำกับภาษี (*)
            </Text>
            <Controller
              name="name"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  placeholder="ชื่อสำหรับการออกใบกำกับภาษี"
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
                      title="สำนักงานใหญ่"
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
                      title="สาขา"
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
                                placeholder="กรุณากรอกชื่อสาขา"
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
              เลขประจำตัวผู้เสียภาษีอากร (*)
            </Text>
            <Controller
              name="taxID"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  placeholder="เลขประจำตัวผู้เสียภาษีอากร"
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

      <Card title="ที่อยู่สำหรับการออกใบกำกับภาษี">
        <View style={[Layout.col, Layout.gap10]}>
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
    </View>
  );
};

InvoiceForm.defaultProps = {};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {},
});

export default InvoiceForm;
