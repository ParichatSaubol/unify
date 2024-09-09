import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import { AppBar, Button, Checkbox } from '@/components';
import { AppColor, ButtonVariant } from '@/model/options';
import { IKnowledgeTest } from '@/model/test';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'KnowledgeTest'>;

// @refresh reset

const KnowledgeTest = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);

  const { Layout, Fonts } = useTheme();
  // const dispatch = useDispatch();

  // state
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [test, setTest] = React.useState<IKnowledgeTest[]>([
    {
      id: 1,
      title: 'ระบบ GENESIS64 มีองค์ประกอบอะไรบ้าง?',
      choices: [
        'SCADA',
        'HMI/SCADA',
        'Energy Monitoring ',
        'ICONICS Software Solutions',
      ],
    },
    {
      id: 2,
      title: 'ระบบ GENESIS64 มีองค์ประกอบอะไรบ้าง?',
      choices: [
        'SCADA',
        'HMI/SCADA',
        'Energy Monitoring ',
        'ICONICS Software Solutions',
      ],
    },
    {
      id: 3,
      title: 'ระบบ GENESIS64 มีองค์ประกอบอะไรบ้าง?',
      choices: [
        'SCADA',
        'HMI/SCADA',
        'Energy Monitoring ',
        'ICONICS Software Solutions',
      ],
    },
  ]);
  const [checked, setChecked] = React.useState<number[]>([]);
  const [score, setScore] = React.useState<number>(0);
  // handle callback
  const handleSubmitScore = () => {
    setScore(checked.length);
  };
  const handleBack = () => {
    navigation.goBack();
  };
  const handleDownloadCertificate = () => {
    navigation.navigate('KnowledgeCertificate');
  };

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  return (
    <SafeAreaView style={[Layout.bg, Layout.fill]}>
      <View style={[Layout.main, Layout.bgPrimary]}>
        <AppBar
          color={AppColor.blue}
          title="แบบทดสอบ"
          onPress={() => {
            //กลับไปหน้าก่อนหน้า
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[Layout.main]}>
          <Text style={[Fonts.text21]}>
            ระบบการจัดการพลังงาน Energy Monitoring วิเคราะห์โดย.. ซอฟต์แวร์
            GENESIS64 จากมิซูบิชิ
          </Text>
          <View style={styles.list}>
            {test.map((item, index) => (
              <View key={`test-${index}`}>
                <View style={styles.box}>
                  <Text style={[Fonts.text24Med, Fonts.textBlack]}>
                    {item.id}. {item.title}
                  </Text>
                  <View style={styles.choice}>
                    {item.choices.map((choice, choiceIndex) => (
                      <View
                        key={`test-${index}-${choiceIndex}`}
                        style={[
                          Layout.gap10,
                          Layout.row,
                          Layout.alignItemsCenter,
                        ]}
                      >
                        <Checkbox
                          setIsEnabled={val => {
                            const newChecked = [...checked];
                            newChecked[index] = val ? choiceIndex : -1;
                            setChecked(newChecked);
                          }}
                          isEnabled={checked[index] === choiceIndex}
                        />
                        <Text style={[Fonts.text21]}>
                          {(choiceIndex + 10).toString(36).toUpperCase()}.{' '}
                          {choice}
                        </Text>
                      </View>
                    ))}
                  </View>
                </View>
                {score > 0 && (
                  <View style={styles.box} key={`test-check${index}`}>
                    <Text style={[Fonts.text21]}>
                      คำตอบ D : เพราะ Lorem Ipsum คือ
                      เนื้อหาจำลองแบบเรียบๆใช้ในธุรกิจงานพิมพ์
                    </Text>
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        <View style={styles.bottom}>
          {score > 0 ? (
            <>
              <Button
                title="ดาวน์โหลดใบรับรอง Certificate"
                onPress={() => handleDownloadCertificate()}
              />
              <Button
                title="กลับสู่หน้าหลัก"
                onPress={() => handleBack()}
                variant={ButtonVariant.outlined}
              />
            </>
          ) : (
            <>
              <Button title="ส่งแบบทดสอบ" onPress={() => handleSubmitScore()} />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 24,
    gap: 10,
    paddingHorizontal: 8,
    paddingVertical: 16,
  },
  choice: {
    marginTop: 16,
    gap: 10,
  },
  box: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  bottom: {
    paddingHorizontal: 16,
    gap: 10,
  },
});

export default KnowledgeTest;
