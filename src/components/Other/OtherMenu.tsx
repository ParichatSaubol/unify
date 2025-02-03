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
import { useFocusEffect } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');

  // hooks
  const sheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ['50%'], []);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menu, setMenu] = useState<Menu[]>([
    {
      icon: <Images.menu.communityAndArticles />,
      text: t('otherMenu.communityAndArticles'),
      description: t('otherMenu.communityAndArticlesDescription'),
      next: '',
    },
    {
      icon: <Images.menu.goodDeals />,
      text: t('otherMenu.goodDeals'),
      description: t('otherMenu.goodDealsDescription'),
      next: '',
    },
    {
      icon: <Images.menu.discountCode />,
      text: t('otherMenu.discountCode'),
      description: t('otherMenu.discountCodeDescription'),
      next: '',
    },
    {
      icon: <Images.menu.flashStore />,
      text: t('otherMenu.flashStore'),
      description: t('otherMenu.flashStoreDescription'),
      next: '',
    },
    {
      icon: <Images.menu.privilegesAndPoints />,
      text: t('otherMenu.privilegesAndPoints'),
      description: t('otherMenu.privilegesAndPointsDescription'),
      next: '',
    },
    {
      icon: <Images.menu.allProducts />,
      text: t('otherMenu.allProducts'),
      description: t('otherMenu.allProductsDescription'),
      next: '',
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
        <Text style={[Fonts.text21, Fonts.textBlack]}>
          {t('otherMenu.allProducts')}
        </Text>
        {menu.map((item, index) => (
          <TouchableOpacity key={`other-menu-${index}`}>
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
