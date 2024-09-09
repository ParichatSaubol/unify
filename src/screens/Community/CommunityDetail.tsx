import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { AppBar, DefaultLayout, CommunityDetail as Detail } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';

type Props = NativeStackScreenProps<
  ApplicationStackParamList,
  'CommunityDetail'
>;

// @refresh reset
const CommunityDetail = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Fonts, Layout, Images } = useTheme();

  // state

  // handle callback

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  // child elements

  return (
    <DefaultLayout statusBarColor="dark-content">
      <AppBar
        onPress={() => {
          navigation.goBack();
        }}
        title="คอมมูนิตี้และบทความ"
      />
      <ScrollView
        contentContainerStyle={[
          Layout.gap20,
          Layout.col,
          Layout.justifyContentBetween,
        ]}
      >
        <View style={[Layout.gap20, Layout.main, Layout.bgWhite]}>
          <Detail
            bannerImage={Images.community.content}
            createdBy="ข่าวสารด้านอุตสาหกรรม"
            title="ระบบออโตเมชัน ยุคใหม่เพื่อลดต้นทุนการผลิต"
            description="ตอนนี้ไม่ว่าจะหันไปทางไหนก็มีแต่ Automation เต็มไปหมด เพราะ
            ปัจจุบัน Automation กำลังถูกพูดถึงในขณะนี้ยังรวมไปถึง ความกังวล
            เกี่ยวกับเรื่องของหุ่นยนต์ที่จะเข้ามาแทนที่การทำงานของอีกด้วย ซึ่งเป็นความเข้าใจที่ ‘ผิดอย่างมากเลยครับ’ เพราะว่าแรกเริ่มเดิมทีเนี่ย การเกิดขึ้นของระบบ Automation มีขึ้นเพื่อสนับสนุนการทำงานของ
            มนุษย์หรือทำงานในส่วนที่มนุษย์ไม่สามารถทำได้ ซึ่งจริงๆ แล้วระบบ
            ออโตเมชันสามารถลดต้นทุนได้เป็นอย่างมากส่งผลให้เกิดความต้องการ
            และการใช้ทรัพยากรมากขึ้นในภาคส่วนอื่นๆรวมถึงภาคส่วนของออโตเมชันเองด้วย ทั้งยังเพิ่มกำลังการผลิตและสร้างโอกาส ใหม่ๆของธุรกิจ
            ได้อีกด้วยเราจะไปรู้จักกับ Automation กันก่อน"
            contentImage={Images.community.content2}
          />
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

export default CommunityDetail;
