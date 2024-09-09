import React, { FunctionComponent } from 'react';
import { View } from 'react-native';
import { useTheme } from '@/hooks';
import Card from '../Card/Card';
import { Controller, useFormContext } from 'react-hook-form';
import Input from '../Input/Input';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';
import ButtonIcon from '../Button/ButtonIcon';
import { TSolutionAddress } from '@/model/solution';
import { ButtonIconColors, InputVariant } from '@/model/options';

interface Props {}

const ServiceReceiveForm: FunctionComponent<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Fonts, Images, Colors } = useTheme();

  const { control } = useFormContext<TSolutionAddress>();

  return (
    <Card title="วันและเวลาที่ต้องการเข้ารับบริการ">
      <View style={[Layout.col]}>
        <View style={[Layout.row, Layout.gap10, Layout.justifyContentCenter]}>
          <View style={[Layout.fill]}>
            <Controller
              name="address"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  // disabled
                  placeholder="12 มกราคม 2566 , 12:00"
                  variant={InputVariant.outlined}
                  value={value}
                  onChange={onChange}
                  error={Boolean(error?.message)}
                  helperText={error?.message}
                />
              )}
            />
          </View>
          <View>
            <ButtonIcon
              colors={ButtonIconColors.primary}
              icon={<Images.icons.datepicker color={'#FFF'} />}
              onPress={() => {
                // navigate('ServiceAddress');
              }}
              customStyle={{
                button: {
                  height: 40,
                  width: 40,
                },
              }}
            />
          </View>
        </View>
      </View>
    </Card>
  );
};

ServiceReceiveForm.defaultProps = {};

export default ServiceReceiveForm;
