import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';

export default function App() {
  return (
    <View style={styles.app}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {},
});
