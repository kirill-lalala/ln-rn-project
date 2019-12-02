import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.main} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  main: {
    flex: 7,
    backgroundColor: '#fff',
  },
});
