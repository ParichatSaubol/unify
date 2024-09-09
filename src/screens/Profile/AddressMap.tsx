import React, { useEffect, useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/hooks';
import { AppBar, Button } from '@/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ApplicationStackParamList } from 'types/navigation';
import MapView, { LatLng, Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

type Props = NativeStackScreenProps<ApplicationStackParamList, 'AddressMap'>;
var { width, height } = Dimensions.get('window');
// @refresh reset
const AddressMap = ({ navigation }: Props): JSX.Element => {
  // hooks
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t } = useTranslation(['register']);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { Fonts, Layout, Images } = useTheme();

  // state
  const [region, setRegion] = useState({
    latitude: 13.736717,
    longitude: 100.523186,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [marker, setMarker] = useState<LatLng>();
  const bangkok = {
    latitude: 13.736717,
    longitude: 100.523186,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const [addressList, setAddressList] = useState<string[]>([]);
  const [choiceAddress, setChoiceAddress] = useState<string>('');

  // handle callback

  const getAddress = ({
    latitude,
    longitude,
  }: {
    latitude: number;
    longitude: number;
  }) => {
    fetch(
      'https://maps.googleapis.com/maps/api/geocode/json?address=' +
        latitude +
        ',' +
        longitude +
        '&key=' +
        'AIzaSyDzKs7FuHz453is48Fafyf7ZC3iuetWiEw',
    )
      .then(response => response.json())
      .then(responseJson => {
        const d: string[] = [];
        for (let i = 0; i < responseJson.results.length; i++) {
          if (i >= 5) {
            break;
          }
          d.push(responseJson.results[i].formatted_address);
        }
        setAddressList(d);
      });
  };

  const init = async (): Promise<void> => {};

  // callback effect
  useEffect(() => {
    init();

    return () => {};
  }, []);

  useEffect(() => {}, [region]);

  // child elements

  return (
    <SafeAreaView style={[Layout.bg, Layout.bgWhite, Layout.fill]}>
      <View style={[Layout.main, Layout.gap20, styles.header]}>
        <AppBar
          onPress={() => {
            navigation.goBack();
          }}
          title="ที่อยู่ในการจัดส่ง"
        />
      </View>
      <View style={[styles.search]}>
        <View style={[styles.searchBox]}>
          <GooglePlacesAutocomplete
            placeholder="ค้นหาที่อยู่"
            onPress={(data, details = null) => {
              setRegion({
                ...region,
                latitude: details?.geometry?.location?.lat || 0,
                longitude: details?.geometry?.location?.lng || 0,
              });
              // details?.geometry
            }}
            query={{
              key: 'AIzaSyDzKs7FuHz453is48Fafyf7ZC3iuetWiEw',
              language: 'en',
            }}
            fetchDetails={true}
            renderRow={rowData => {
              const title = rowData.structured_formatting.main_text;
              const address = rowData.structured_formatting.secondary_text;
              return (
                <View>
                  <Text style={[Fonts.text14]}>{title}</Text>
                  <Text style={[Fonts.text14]}>{address}</Text>
                </View>
              );
            }}
          />
        </View>
      </View>

      <MapView
        initialRegion={bangkok}
        region={region}
        style={styles.map}
        showsUserLocation={true}
        followsUserLocation={true}
        zoomEnabled={true}
        zoomControlEnabled={true}
        loadingEnabled
        onPress={e => {
          getAddress({ ...e.nativeEvent.coordinate });
          setMarker({ ...e.nativeEvent.coordinate });
        }}
      >
        <Marker coordinate={bangkok} />
        {marker && <Marker coordinate={marker} />}
      </MapView>
      {addressList.length > 0 && (
        <View style={[styles.searchResult]}>
          <View style={[styles.searchResultBox]}>
            {addressList.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.message}
                onPress={() => {
                  const a = addressList.filter((_, i) => i === index);
                  setAddressList(a);
                  setChoiceAddress(item);
                }}
              >
                <View>
                  <Text
                    style={[Fonts.text14, Fonts.textBold]}
                    numberOfLines={2}
                  >
                    {item}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}

            {choiceAddress == null && <Button title="เลือกที่อยู่" fullWidth />}
            {choiceAddress != null && (
              <Button
                title="เพิ่มลงในที่อยู่"
                fullWidth
                onPress={() => {
                  navigation.navigate('AddressIndex');
                }}
              />
            )}
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    position: 'absolute',
    width: '100%',
    left: 0,
    top: 120,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchBox: {
    width: '80%',
  },
  searchResult: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
    padding: 20,
  },
  searchResultBox: {
    width: '100%',
  },
  message: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomColor: '#F2F4F7',
    borderBottomWidth: 1,
  },
  container: { height: 46 },
  header: { borderBottomWidth: 1, borderColor: '#F2F4F7' },
  map: {
    flex: 1,
    width: width,
    height: height,
    // ...StyleSheet.absoluteFillObject,
  },
});

export default AddressMap;
