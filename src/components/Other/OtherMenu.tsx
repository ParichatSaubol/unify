import React, {
  FunctionComponent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useFocusEffect,NavigationProp, useNavigation } from '@react-navigation/native';
import { ApplicationStackParamList } from 'types/navigation';

interface Props {
  snapPosition?: 0 | 1 | 2;
  open?: boolean;
  setOpen?: (open: boolean) => void;
}

interface Menu {
  icon: JSX.Element;
  text: string;
  next?: string;
  description: string;
}

const OtherMenu: FunctionComponent<Props> = ({
  snapPosition = 0,
  open,
  setOpen,
}) => {
  const navigation = useNavigation<NavigationProp<ApplicationStackParamList>>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Fonts, Images } = useTheme();

  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menu, setMenu] = useState<Menu[]>([
    {
      icon: <Images.menu.communityAndArticles />,
      text: 'คอมมูนิตี้และบทความ',
      description: 'บทความและข่าวสารเกี่ยวกับเทคโนโลยีโรงงาน',
      next: 'CommunityIndex',
    },
    {
      icon: <Images.menu.goodDeals />,
      text: 'ดีลดี รวมโปรโมชั่น',
      description: 'รวมโปรโมชั่นดีลดีสำหรับคุณ',
      next: 'PromotionIndex',
    },
    {
      icon: <Images.menu.discountCode />,
      text: 'โค้ดส่วนลด',
      description: 'โค้ดส่วนลดพิเศษและสิทธิพิเศษ',
      next: 'CouponIndex',
    },
    {
      icon: <Images.menu.flashStore />,
      text: 'แฟรชสโตร์',
      description: 'ช้อปสินค้าโรงงานราคาพิเศษสุด',
      next: 'ProductFlashStore',
    },
    {
      icon: <Images.menu.privilegesAndPoints />,
      text: 'สิทธิพิเศษและคะแนน',
      description: 'สิทธิพิเศษกับของรางวัลมากมาย',
      next: 'UnipointIndex',
    },
    {
      icon: <Images.menu.allProducts />,
      text: 'สินค้าทั้งหมด',
      description: 'สินค้ายอดนิยมในโรงงานคัดสรรให้เลือกช้อป',
      next: 'Category',
    },
  ]);

  // callbacks
  const handleSheetChange = useCallback((index: number) => {
    if (index < 0) {
      setOpen && setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      sheetRef.current?.snapToIndex(snapPosition);
    }
  }, [open]);

  useFocusEffect(
    React.useCallback(() => {
      return () => sheetRef.current?.close();
    }, []),
  );

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      onChange={handleSheetChange}
      onClose={() => {
        setOpen && setOpen(false);
      }}
      enablePanDownToClose
    >
      <BottomSheetScrollView style={[styles.container]}>
        <Text style={[Fonts.text21, Fonts.textBlack]}>เมนูลัดทั้งหมด</Text>
        {menu.map((item, index) => (
          <TouchableOpacity key={`other-menu-${index}`}
          onPress={() => {
            item.next && navigation.navigate(item.next as any);
          }}
          >
            <View style={[styles.menuBox]}>
              {item.icon && item.icon}
              <View style={[]}>
                <Text style={[Fonts.text21, Fonts.textBlack]}>{item.text}</Text>
                <Text style={[Fonts.text18]}>{item.description}</Text>
              </View>
            </View>
            {menu.length !== index && <View style={styles.divider} />}
          </TouchableOpacity>
        ))}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

OtherMenu.defaultProps = {
  snapPosition: 0,
  open: false,
  setOpen: () => {},
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
  },
  menuBox: {
    flexDirection: 'row',
    paddingVertical: 16,
    gap: 10,
    // borderBottomColor: '#E1E1E1',
    // borderBottomWidth: 1,
  },
  divider: {
    height: 1,
    width: '100%',
    backgroundColor: '#E1E1E1',
  },
});

export default OtherMenu;
