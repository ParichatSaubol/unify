import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@/hooks';
import { THB } from '@/utils';
import { IServiceDetail } from '@/model/service';

type Props = IServiceDetail & {};

const ServiceDetail: FunctionComponent<Props> = ({
  title,
  star,
  soldCount,
  netAmount,
  amount,
  detail,
  standardFree,
  standardCost,
  serviceArea,
  note,
}) => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <View style={[Layout.col, Layout.gap10]}>
      <View
        style={[Layout.col, styles.container, Layout.gap10, Layout.bgWhite]}
      >
        <View style={Layout.fill}>
          <Text style={(Fonts.text21Med, Fonts.textBlack)}>{title}</Text>
        </View>
        <View>
          <View style={[Layout.row, Layout.gap10]}>
            <Images.icons.star />
            <Text style={Fonts.text18}>{star}</Text>
            <View style={styles.dividers} />
            <Text style={Fonts.text18}>ขายแล้ว {soldCount} ชิ้น</Text>
          </View>
        </View>
        {amount ? (
          <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
            <Text style={[Fonts.text34Med, Fonts.textRed]}>
              {THB.format(amount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
            </Text>
            <Text style={[Fonts.text18, styles.netAmount]}>
              {THB.format(netAmount || 0).replace(/\b(\w*THB\w*)\b/, '฿ ')}
            </Text>
            <Text style={[Fonts.text18]}>/ ชิ้น</Text>
          </View>
        ) : (
          <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
            <Text style={[Fonts.text34Med, Fonts.textRed]}>
              นัดหมายเข้าบริการ
            </Text>
          </View>
        )}

        <View style={[Layout.col, Layout.gap10]}>
          <Text style={[Fonts.text18, Fonts.textBlack]}>
            รายละเอียดการให้บริการ
          </Text>
          {detail?.map((item, index) => (
            <View style={[Layout.row, Layout.gap5]} key={index}>
              <Text>{'\u2022'}</Text>
              <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      <View
        style={[Layout.col, styles.container, Layout.gap10, Layout.bgWhite]}
      >
        <Text style={[Fonts.text24Med, Fonts.textBlack]}>
          รายละเอียดเพิ่มเติม
        </Text>
        <View style={styles.dividerHorizontal} />
        <View style={Layout.gap10}>
          <Text style={[Fonts.text21, Fonts.textPrimary]}>
            อุปกรณ์มาตรฐานพร้อมติดตั้ง (ฟรี)
          </Text>
          <View>
            {standardFree?.map((item, index) => (
              <View style={[Layout.row, Layout.gap5]} key={index}>
                <Text>{'\u2022'}</Text>
                <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
              </View>
            ))}
          </View>

          <Text style={[Fonts.text21, Fonts.textPrimary]}>
            อุปกรณ์มาตรฐานส่วนเพิ่ม (มีค่าใช้จ่าย)สามารถติดต่อซื้อจากช่างได้เลย
          </Text>
          <View>
            {standardCost?.map((item, index) => (
              <View style={[Layout.row, Layout.gap5]} key={index}>
                <Text>{'\u2022'}</Text>
                <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
              </View>
            ))}
          </View>

          <Text style={[Fonts.text21, Fonts.textPrimary]}>หมายเหตุ</Text>
          <View>
            {note?.map((item, index) => (
              <View style={[Layout.row, Layout.gap5]} key={index}>
                <Text>{'\u2022'}</Text>
                <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={[Fonts.text24Med, Fonts.textBlack, styles.marginTop]}>
          พื้นที่ให้บริการ
        </Text>
        <View style={styles.dividerHorizontal} />
        <View style={Layout.gap10}>
          <View>
            {serviceArea?.map((item, index) => (
              <View style={[Layout.row, Layout.gap5]} key={index}>
                <Text>{'\u2022'}</Text>
                <Text style={[Fonts.text18, Fonts.textBlack]}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

ServiceDetail.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  dividers: {
    width: 1,
    height: '100%',
    backgroundColor: '#F2F4F7',
  },
  dividerHorizontal: {
    height: 1,
    width: '100%',
    backgroundColor: '#F2F4F7',
  },
  netAmount: {
    textDecorationLine: 'line-through',
  },
  marginTop: {
    marginTop: 40,
  },
});

export default ServiceDetail;
