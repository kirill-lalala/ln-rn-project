import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import fire from '../config/fire';

const MapScreen = props => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLatitude(info.coords.latitude);
      setLongitude(info.coords.longitude);
    });
  }, []);

  const handleOut = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        props.navigation.navigate('App');
      });
  };
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.bigText}>Будем знакомы ;)</Text>
      <Text style={styles.smallText}>Вы здесь</Text>
      <View style={styles.mapContainer}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          <Marker coordinate={{latitude, longitude}} title={'Вы обнаружены'} />
        </MapView>
      </View>
      <Button text="Понятно, я пойду" inversion={true} handle={handleOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3066E0',
    paddingTop: '5%',
    alignItems: 'center',
  },
  bigText: {
    color: '#fff',
    marginTop: 20,
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 29,
  },
  smallText: {
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
  },
  mapContainer: {
    // ...StyleSheet.absoluteFillObject,
    height: '40%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default MapScreen;
