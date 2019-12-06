import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import {AuthNavigation} from '../../App';

const HomeScreen = () => {
  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.main}>
        <AuthNavigation />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 33,
    paddingBottom: 0,
  },
});

export default HomeScreen;
