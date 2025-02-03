import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import {
  AppBar,
  ButtonIcon,
  Carousel,
  CartBooking,
  DefaultLayout,
  ServiceDetail as Detail,
} from '@/components';
import { IServiceDetail } from '@/model/service';
import {
  AppColor,
  ButtonIconColors,
  ButtonIconVariant,
  CarouselSize,
} from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'ServiceDetail'>;

// @refresh reset
const ServiceDetail = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors } = useTheme();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [detail, setDetail] = useState<IServiceDetail>({
    id: '1',
    title: t('serviceDetail.title'),
    image: Images.service.detailMock,
    star: 4,
    soldCount: 12800,
    netAmount: 1029090,
    amount: undefined,
    detail: t('serviceDetail.detail', { returnObjects: true }),
    standardFree: t('serviceDetail.standardFree', { returnObjects: true }),
    standardCost: t('serviceDetail.standardCost', { returnObjects: true }),
    serviceArea: t('serviceDetail.serviceArea', { returnObjects: true }),
    note: t('serviceDetail.note', { returnObjects: true }),
    model: [
      'FX2N-49ER-ES-01',
      'FX2N-49ER-ES-02',
      'FX2N-49ER-ES-03',
      'FX2N-49ER-ES-04',
      'FX2N-49ER-ES-05',
      'FX2N-49ER-ES-06',
    ],
  });

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        color={AppColor.white}
        onPress={() => {
          navigation.goBack();
        }}
        right={
          <View
            style={[
              Layout.row,
              Layout.gap10,
              Layout.alignItemsCenter,
              Layout.justifyContentEnd,
            ]}
          >
            <ButtonIcon
              icon={
                <Images.icons.favorite
                  key={'favorite'}
                  color={'black'}
                  height={18}
                  width={18}
                />
              }
              colors={ButtonIconColors.white}
              variant={ButtonIconVariant.box}
            />
            <ButtonIcon
              icon={
                <Images.icons.share
                  key={'share'}
                  color={'black'}
                  height={18}
                  width={18}
                />
              }
              colors={ButtonIconColors.white}
              variant={ButtonIconVariant.box}
            />
          </View>
        }
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[styles.container]}>
          <Carousel
            isPadding={false}
            isRadius={false}
            hiddentScrollPos
            fullWidth
            size={CarouselSize.large}
            dataImages={[
              Images.service.detailMock,
              Images.service.detailMock,
              Images.service.detailMock,
            ]}
          />
          <Detail {...detail} />
        </View>
      </ScrollView>
      <CartBooking {...detail} />
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {},
  appBar: {
    width: '100%',
    position: 'absolute',
    paddingVertical: 16,
    paddingHorizontal: 16,
    zIndex: 1,
  },
});

export default ServiceDetail;
