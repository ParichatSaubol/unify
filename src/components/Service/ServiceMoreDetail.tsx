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
import { useTranslation } from 'react-i18next';

interface Props {}

const ServiceMoreDetail: FunctionComponent<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Fonts, Images, Colors } = useTheme();
  const { t } = useTranslation('common');

  const { control } = useFormContext<TSolution>();

  return (
    <Card title={t('serviceMoreDetail.moreDetailsTitle')}>
      <View style={[Layout.col, Layout.gap20]}>
        <View style={[Layout.col, Layout.gap5]}>
          <Text style={[Fonts.text21]}>
            {t('serviceMoreDetail.moreDetails')}
          </Text>
          <Controller
            name="address"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                // disabled
                placeholder={t('serviceMoreDetail.moreDetailsTitle')}
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
          <Text style={[Fonts.text21]}>
            {t('serviceMoreDetail.uploadImage')}
          </Text>
          <Button
            title={t('serviceMoreDetail.uploadImageButton')}
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
