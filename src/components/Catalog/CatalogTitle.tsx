import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import { CatalogTitleColorActived } from '@/model/options';
import FlashSaleRuntime from '../FlashSale/FlashSaleRuntime';

export interface CatalogTitleProps {
  title?: string;
  subTitle?: string;
  titleIcon?: JSX.Element;
  onPress?: () => void;
  flashSale?: boolean;
  brand?: boolean;
  brandIcon?: JSX.Element;
  isActived?: boolean;
  colorActived?: CatalogTitleColorActived;
  textColors: 'black' | 'white';
}

// หัวข้อแคตตาล็อก
const CatalogTitle: FunctionComponent<CatalogTitleProps> = ({
  titleIcon,
  title,
  subTitle,
  onPress,
  flashSale,
  brand,
  brandIcon,
  colorActived,
  isActived,
  textColors,
}) => {
  const { Layout, Fonts, Images, Colors } = useTheme();

  const renderActive = () => {
    const children: JSX.Element[] = [];

    if (flashSale) {
      children.push(
        <Images.icons.flashSale
          key={children.length}
          height={'100%'}
          color="#FC1B13"
          style={styles.flashSale}
        />,
      );
    } else if (brand) {
      brandIcon &&
        children.push(<View key={children.length}>{brandIcon}</View>);
    } else if (isActived && colorActived === CatalogTitleColorActived.blue) {
      children.push(<View key={children.length} style={styles.active} />);
    } else if (isActived && colorActived === CatalogTitleColorActived.red) {
      children.push(<View key={children.length} style={styles.activeRed} />);
    }

    return children;
  };

  const renderTitle = () => {
    const children: JSX.Element[] = [];

    if (titleIcon) {
      children.push(<View key={children.length}>{titleIcon}</View>);
    } else if (title) {
      children.push(
        <Text
          key={children.length}
          style={[
            Fonts.text21Bold,
            Fonts.textBlack,
            flashSale && Fonts.textRed,
            textColors === 'white' && Fonts.textWhite,
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>,
      );
    }
    return children;
  };

  return (
    <View style={[Layout.row, Layout.justifyContentBetween]}>
      <View
        style={[
          Layout.row,
          Layout.gap10,
          styles.textContainer,
          Layout.alignItemsCenter,
        ]}
      >
        {renderActive()}
        <View style={[Layout.col, Layout.justifyContentBetween]}>
          {renderTitle()}

          {subTitle && (
            <Text
              style={[Fonts.text16, textColors === 'white' && Fonts.textWhite]}
              numberOfLines={1}
            >
              {subTitle}
            </Text>
          )}
        </View>
        {flashSale && <FlashSaleRuntime />}
      </View>
      {onPress && (
        <TouchableOpacity
          onPress={() => {
            onPress();
          }}
        >
          <View style={[Layout.row, Layout.center, Layout.gap10, Layout.fill]}>
            <Text
              style={[
                Fonts.text16,
                styles.black,
                textColors === 'white' && Fonts.textWhite,
              ]}
            >
              ดูทั้งหมด
            </Text>
            <View style={styles.icon}>
              <Images.icons.seeMore color={Colors.white} />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

CatalogTitle.defaultProps = {
  title: undefined,
  subTitle: undefined,
  titleIcon: undefined,
  onPress: undefined,
  flashSale: false,
  brand: false,
  brandIcon: undefined,
  isActived: false,
  colorActived: CatalogTitleColorActived.blue,
  textColors: 'black',
};

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginTop: 1,
  },
  black: {
    color: '#000',
  },
  active: {
    width: 12,
    minHeight: 42,
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 4,
    backgroundColor: '#0057FF',
  },
  activeRed: {
    width: 12,
    minHeight: 42,
    height: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 4,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 4,
    backgroundColor: '#FC1B13',
  },
  textContainer: { flex: 0.9 },
  flashSale: {
    marginTop: 3,
  },
});

export default CatalogTitle;
