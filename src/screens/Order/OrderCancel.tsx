import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductParamsList } from 'types/navigation';
import { AppBar, Button, Checkbox, DefaultLayout } from '@/components';
import { AppColor } from '@/model/options';

type Props = NativeStackScreenProps<ProductParamsList, 'OrderCancel'>;

// @refresh reset

const OrderCancel = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation('register');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Images, Colors, Fonts } = useTheme();
  // const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [note, setNote] = React.useState<string[]>([
    t('orderCancel.changeAddress'),
    t('orderCancel.changeDiscount'),
    t('orderCancel.editOrder'),
    t('orderCancel.cancelItem'),
    t('orderCancel.paymentTooComplex'),
    t('orderCancel.foundCheaper'),
    t('orderCancel.other'),
  ]);

  const [noteSelected, setNoteSelected] = React.useState<string[]>([]);
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
        title={t('orderCancel.title')}
        onPress={() => {
          //กลับไปหน้าก่อนหน้า
          navigation.goBack();
        }}
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View>
          <View style={[Layout.main]}>
            <View style={[styles.infoBox]}>
              <Images.icons.warning1 color="#0046CC" width="24" height="24" />
              <Text style={[Fonts.text16, Fonts.textPrimary, Layout.fill]}>
                {t('orderCancel.instruction')}
              </Text>
            </View>
          </View>
          <View style={[Layout.main]}>
            <View style={[styles.list]}>
              {note.map((item, index) => (
                <View style={styles.item} key={`note-${index}`}>
                  <Checkbox
                    setIsEnabled={value => {
                      if (value) {
                        setNoteSelected([...noteSelected, item]);
                      } else {
                        setNoteSelected(
                          noteSelected.filter(itemSelected => {
                            return itemSelected !== item;
                          }),
                        );
                      }
                      // throw new Error('Function not implemented.');
                    }}
                    isEnabled={noteSelected.includes(item)}
                  />
                  <Text style={[Fonts.text21]}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={[Layout.main, styles.bottom]}>
        <Button
          title={t('orderCancel.confirm')}
          onPress={() => {
            navigation.goBack();
            // navigation.navigate('OrderIndex', {
            //   tabs: OrderTabs.WaitingForPayment,
            //   member: RoleType.COMPANY,
            // });
          }}
        />
      </View>
    </DefaultLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    gap: 20,
  },
  infoBox: {
    flexDirection: 'row',
    backgroundColor: '#E6EEFF',
    padding: 8,
    gap: 8,
  },
  list: {
    padding: 8,
    backgroundColor: '#FFF',
    gap: 8,
    borderRadius: 5,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  bottom: {
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
});

export default OrderCancel;
