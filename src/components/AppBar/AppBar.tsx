import React, { FunctionComponent } from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';
import ButtonIcon from '../Button/ButtonIcon';
import {
  AppColor,
  ButtonIconColors,
  ButtonIconSize,
  ButtonIconVariant,
} from '@/model/options';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  disabled?: boolean;
  image?: JSX.Element;
  right?: JSX.Element;
  color?: AppColor;
  titleAlign?: string;
  zeroMargin?: boolean;
}

// แถบบาร์ด้านบน
const AppBar: FunctionComponent<Props> = ({
  title,
  onPress,
  disabled,
  image,
  right,
  color = AppColor.white,
  titleAlign,
  zeroMargin,
}) => {
  const insets = useSafeAreaInsets();
  const { Layout, Fonts, Colors, Images } = useTheme();
  const navigation = useNavigation();

  return (
    <>
      {/* <StatusBar /> */}
      <View
        style={[
          Layout.row,
          Layout.gap10,
          Layout.alignItemsCenter,
          styles.container,
          !zeroMargin && { marginTop: insets.top },
        ]}
      >
        {navigation.canGoBack() && (
          <View style={{ zIndex: 1 }}>
            <ButtonIcon
              icon={
                <Images.icons.arrowLeft
                  color={
                    color === AppColor.white ? Colors.gray600 : Colors.white
                  }
                />
              }
              variant={ButtonIconVariant.box}
              colors={
                color === AppColor.white
                  ? ButtonIconColors.white
                  : ButtonIconColors.primary
              }
              onPress={onPress}
              disabled={disabled}
              size={ButtonIconSize.medium}
              isBorder={color === AppColor.white}
            />
          </View>
        )}

        {title && (
          <View
            style={[
              titleAlign === 'center' && Layout.fill,
              titleAlign === 'center' && Layout.alignItemsEnd,
            ]}
          >
            <Text
              style={[
                Fonts.text24Med,
                color === AppColor.white && Fonts.textBlack,
                color === AppColor.blue && Fonts.textWhite,
                titleAlign === 'center' && Fonts.textCenter,
              ]}
            >
              {title}
            </Text>
          </View>
        )}
        {image && <View style={styles.image}>{image}</View>}
        {right && (
          <View style={[Layout.fill, Layout.alignItemsEnd]}>{right}</View>
        )}
      </View>
    </>
  );
};

const { width } = Dimensions.get('window');

AppBar.defaultProps = {
  title: undefined,
  onPress: () => {},
  disabled: false,
  image: undefined,
  right: undefined,
  color: AppColor.white,
  titleAlign: undefined,
  zeroMargin: false,
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  image: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
  },
});

export default AppBar;
