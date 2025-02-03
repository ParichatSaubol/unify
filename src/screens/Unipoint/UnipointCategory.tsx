import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, DefaultLayout } from '@/components';
import { AppColor } from '@/model/options';
import PromotionCard from '@/components/Promotions/PromotionCard';
import { IPromotionCard } from '@/model/promotion';

type Props = NativeStackScreenProps<ProductParamsList, 'UnipointCategory'>;

// @refresh reset

const UnipointCategory = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors } = useTheme();
  // const dispatch = useDispatch();

  // state
  const [data] = useState<IPromotionCard[]>([
    {
      id: 1,
      image: Images.promotions.c,
      title: t('unipointCategory.title'),
      point: 1500,
    },
    {
      id: 2,
      image: Images.promotions.c,
      title: t('unipointCategory.title'),
      point: 1500,
    },
    {
      id: 3,
      image: Images.promotions.c,
      title: t('unipointCategory.title'),
      point: 1500,
    },
    {
      id: 4,
      image: Images.promotions.c,
      title: t('unipointCategory.title'),
      point: 1500,
    },
    {
      id: 5,
      image: Images.promotions.c,
      title: t('unipointCategory.title'),
      point: 1500,
    },
  ]);

  // handle callback
  // const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>): void => {
  //   dispatch(changeTheme({ theme, darkMode }));
  // };

  const init = async (): Promise<void> => {
    // await new Promise(resolve =>
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 2000),
    // );
    // onChangeTheme({ darkMode: true });
  };

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <DefaultLayout>
      <AppBar
        color={AppColor.white}
        title={t('unipointCategory.hotel')}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
          Layout.main,
        ]}
      >
        <View style={styles.main}>
          {data.map((item, index) => (
            <TouchableOpacity
              style={styles.mainItem}
              key={`promotion-card-${index}`}
            >
              <PromotionCard {...item} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
  main: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flexGrow: 0,
    gap: 20,
    marginVertical: 8,
  },
  mainItem: {
    width: 180,
  },
});

export default UnipointCategory;
