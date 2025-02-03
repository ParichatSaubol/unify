import { useTheme } from '@/hooks';
import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
  ScrollView,
} from 'react-native';

type MenuItemProps = {
  title: string;
  items: [
    {
      title?: string;
      url?: string;
    },
  ];
};

const CollapsibleMenuItem: FunctionComponent<MenuItemProps> = ({
  title,
  items,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [heightAnim] = useState(new Animated.Value(isOpen ? 100 : 0));
  const { Layout, Fonts, Images } = useTheme();
  const { t } = useTranslation('common');
  const toggleOpen = () => {
    Animated.timing(heightAnim, {
      toValue: isOpen ? 0 : 100,
      duration: 100,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    setIsOpen(!isOpen);
  };

  return (
    <View style={[Layout.fill]}>
      <TouchableOpacity
        onPress={toggleOpen}
        style={[Layout.bgPrimary, styles.containerHeader]}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={[Layout.row, Layout.gap10, Layout.alignItemsCenter]}>
            {title === t('collapsibleMenuItem.test') ? (
              <Images.icons.exam />
            ) : (
              <Images.icons.playlistPlus />
            )}
            <Text style={[Fonts.textWhite, Fonts.text18Med]}>{title}</Text>
          </View>

          {isOpen ? (
            <Images.icons.arrowUpWhite
              color="#ffff"
              width="24px"
              height="24px"
            /> // Arrow up when menu is open
          ) : (
            <Images.icons.arrowDown color="#ffff" width="24px" height="24px" /> // Arrow down when menu is closed
          )}
        </View>
      </TouchableOpacity>
      <Animated.View
        style={[
          Layout.bgWhite,
          isOpen ? styles.fullHeight : styles.close,
          { display: isOpen ? 'flex' : 'none' },
        ]}
      >
        {items?.map((v: any, k: any) => {
          return (
            <>
              <View
                key={`${k}-main`}
                style={[Layout.gap10, Layout.row, styles.containerDetail]}
              >
                <Images.icons.motionPlay
                  key={`${k}-icon`}
                  width="21px"
                  height="21px"
                />
                <Text key={`${k}-text`} style={[Fonts.textBlack, Fonts.text18]}>
                  {v.title}
                </Text>
              </View>
              <View key={`${k}-divider`} style={styles.dividers} />
            </>
          );
        })}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDetail: {
    paddingHorizontal: 40,
    paddingVertical: 8,
  },
  containerHeader: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  dividers: {
    width: '100%',
    height: 1,
    backgroundColor: '#F2F4F7',
  },
  fullHeight: {
    height: '100%',
  },
  close: {
    height: 0,
  },
});

export default CollapsibleMenuItem;
