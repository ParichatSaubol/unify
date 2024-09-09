import React, { FunctionComponent } from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import Card from '../Card/Card';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../Input/Input';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import { TSolution } from '@/model/solution';
import Button from '../Button/Button';
import { ButtonColor, ButtonVariant, InputVariant } from '@/model/options';

interface Props {}

const ServiceMoreDetail: FunctionComponent<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Fonts, Images, Colors } = useTheme();

  const { control } = useFormContext<TSolution>();

  return (
    <Card title="รายละเอียดเพิ่มเติม">
      <View style={[Layout.col, Layout.gap20]}>
        <View style={[Layout.col, Layout.gap5]}>
          <Text style={[Fonts.text21]}>
            รายละเอียดบริการที่ต้องการเพิ่มเติม
          </Text>
          <Controller
            name="address"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                // disabled
                placeholder="รายละเอียดเพิ่มเติม"
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
          <Text style={[Fonts.text21]}>อัพโหลดภาพบริเวณหน้างาน</Text>
          <Button
            title="อัพโหลดรูปภาพ"
            variant={ButtonVariant.outlined}
            colors={ButtonColor.primary}
          />
        </View>
      </View>
    </Card>
  );
};

ServiceMoreDetail.defaultProps = {};

export default ServiceMoreDetail;
