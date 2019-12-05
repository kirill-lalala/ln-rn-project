import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Button from '../components/Button';

const MapScreen = props => {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.bigText}>Будем знакомы ;)</Text>
      <Text style={styles.smallText}>Вы здесь</Text>
      <Text>Map</Text>
      <Button text="Понятно, я пойду" inversion={true} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3066E0',
    paddingTop: 60,
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
});
export default MapScreen;
