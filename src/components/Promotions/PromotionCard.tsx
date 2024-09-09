import React, { FunctionComponent } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@/hooks';
import { THB } from '@/utils';
import { IPromotionCard } from '@/model/promotion';

export interface PromotionCardProps extends IPromotionCard {}

const PromotionCard: FunctionComponent<PromotionCardProps> = ({
  button,
  description,
  footer,
  image,
  onPress,
  point,
  title,
}) => {
  const { Layout, Fonts, Images } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress && onPress}
      style={styles.container}
      disabled={onPress == null}
    >
      <View style={[Layout.col]}>
        <View style={[Layout.fill]}>
          {image ? (
            <Image source={image} resizeMode="cover" style={styles.image} />
          ) : (
            <Image
              source={Images.mock.noImage}
              resizeMode="cover"
              style={styles.image}
            />
          )}
        </View>
        <View style={[styles.box]}>
          <View>
            <Text style={[Fonts.text18Med, Fonts.textBlack]} numberOfLines={1}>
              {title}
            </Text>
          </View>
          {description && (
            <View>
              <Text style={Fonts.text16} numberOfLines={3}>
                {description}
              </Text>
            </View>
          )}
          {footer && (
            <View>
              <Text style={[Fonts.text16, Fonts.textPrimary]} numberOfLines={1}>
                {footer}
              </Text>
            </View>
          )}
          {point && (
            <View style={[Layout.row, Layout.gap5, Layout.alignItemsCenter]}>
              <Images.icons.coin height="12" width="12" />
              <Text style={[Fonts.text16]} numberOfLines={1}>
                {THB.format(point || 0).replace(/\b(\w*THB\w*)\b/, '')} P
              </Text>
            </View>
          )}
          {button && button}
        </View>
      </View>
    </TouchableOpacity>
  );
};

PromotionCard.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    elevation: 1,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 100,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  box: {
    padding: 8,
    gap: 8,
  },
});

export default PromotionCard;
