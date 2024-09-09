import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import Card from '../Card/Card';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../Input/Input';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import { TSolution } from '@/model/solution';
import { InputVariant } from '@/model/options';

interface Props {}

const ServiceInformationForm: FunctionComponent<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Fonts, Images, Colors } = useTheme();

  const { control } = useFormContext<TSolution>();

  return (
    <Card title="กรุณากรอกข้อมูลผู้รับบริการ">
      <View style={[Layout.col, Layout.gap20]}>
        <View style={[Layout.col, Layout.gap5]}>
          <Text style={[Fonts.text21]}>ชื่อ - สกุล ผู้รับบริการ</Text>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                // disabled
                placeholder="ชื่อ-สกุล"
                variant={InputVariant.outlined}
                value={value}
                onChange={onChange}
                error={Boolean(error?.message)}
                helperText={error?.message}
              />
            )}
          />
        </View>

        <View style={[Layout.col, Layout.gap5]}>
          <Text style={[Fonts.text21]}>ชื่อบริษัท ผู้รับบริการ</Text>
          <Controller
            name="company"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                // disabled
                placeholder="ชื่อบริษัท"
                variant={InputVariant.outlined}
                value={value}
                onChange={onChange}
                error={Boolean(error?.message)}
                helperText={error?.message}
              />
            )}
          />
        </View>

        <View style={[Layout.row, Layout.gap5]}>
          <View style={[Layout.fill, Layout.col, Layout.gap5]}>
            <Text style={[Fonts.text21]}>ตำแหน่ง</Text>
            <Controller
              name="position"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  // disabled
                  placeholder="ตำแหน่ง"
                  variant={InputVariant.outlined}
                  value={value}
                  onChange={onChange}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
            />
          </View>
          <View style={[Layout.fill, Layout.col, Layout.gap5]}>
            <Text style={[Fonts.text21]}>แผนก</Text>
            <Controller
              name="department"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  // disabled
                  placeholder="แผนก"
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

        <View style={[Layout.col, Layout.gap5]}>
          <Text style={[Fonts.text21]}>หมายเลขโทรศัพท์สำหรับติดต่อกลับ</Text>
          <Controller
            name="phone"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                // disabled
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
    </Card>
  );
};

ServiceInformationForm.defaultProps = {};

export default ServiceInformationForm;
