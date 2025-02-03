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
import { useTranslation } from 'react-i18next';

interface Props {}

const ServiceInformationForm: FunctionComponent<Props> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { navigate } =
    useNavigation<NavigationProp<ApplicationStackParamList>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Fonts, Images, Colors } = useTheme();
  const { t } = useTranslation('common');

  const { control } = useFormContext<TSolution>();

  return (
    <Card title={t('serviceInformationForm.serviceFormTitle')}>
      <View style={[Layout.col, Layout.gap20]}>
        <View style={[Layout.col, Layout.gap5]}>
          <Text style={[Fonts.text21]}>{t('serviceInformationForm.name')}</Text>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                // disabled
                placeholder={t('serviceInformationForm.fName')}
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
            {t('serviceInformationForm.company')}
          </Text>
          <Controller
            name="company"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                // disabled
                placeholder={t('serviceInformationForm.placeholder')}
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
            <Text style={[Fonts.text21]}>
              {t('serviceInformationForm.position')}
            </Text>
            <Controller
              name="position"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  // disabled
                  placeholder={t('serviceInformationForm.position')}
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
            <Text style={[Fonts.text21]}>
              {t('serviceInformationForm.department')}
            </Text>
            <Controller
              name="department"
              control={control}
              render={({
                field: { value, onChange },
                fieldState: { error },
              }) => (
                <Input
                  // disabled
                  placeholder={t('serviceInformationForm.department')}
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
          <Text style={[Fonts.text21]}>
            {t('serviceInformationForm.phone')}
          </Text>
          <Controller
            name="phone"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <Input
                // disabled
                placeholder={t('serviceInformationForm.phone')}
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
