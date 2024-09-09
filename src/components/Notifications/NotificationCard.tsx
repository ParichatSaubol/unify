import React, { FunctionComponent } from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useTheme } from '@/hooks';

export interface NotificationCardProps {
  title?: string;
  image?: ImageSourcePropType;
  description?: string;
  timestamp?: string;
  isActive?: boolean;
}

const NotificationCard: FunctionComponent<NotificationCardProps> = ({
  title,
  image,
  description,
  timestamp,
  isActive,
}) => {
  const { Layout, Fonts } = useTheme();

  return (
    <View
      style={[
        Layout.row,
        styles.container,
        Layout.gap10,
        styles.container,
        isActive && styles.active,
      ]}
    >
      {image && (
        <View style={styles.logo}>
          <Image source={image} />
        </View>
      )}

      <View style={[Layout.fill, Layout.col, Layout.justifyContentBetween]}>
        <View>
          <Text style={[Fonts.text16Bold, Fonts.textBlack]} numberOfLines={1}>
            {title}
          </Text>
          <Text style={[Fonts.text16, Fonts.textBlack]} numberOfLines={2}>
            {description}
          </Text>
        </View>
        <Text style={Fonts.text16} numberOfLines={1}>
          {timestamp}
        </Text>
      </View>
    </View>
  );
};

NotificationCard.defaultProps = {
  title: '06:06 มี Flash Deal ช้อปด่วน',
  image: undefined,
  description: 'ช้อปเลย สินค้าอุตสาหกรรมส่วนลดถึง 40% ภายในวันนี้เท่านั้น',
  timestamp: '12-07-2565 12:00',
  isActive: false,
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    padding: 16,
  },
  logo: { height: 80, width: 80 },
  active: {
    backgroundColor: '#E6EEFF',
  },
});

export default NotificationCard;
