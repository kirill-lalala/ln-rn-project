import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import Login from './src/components/Login';
import Switches from './src/components/Switches';
import Registration from './src/components/Registration';

export default function App() {
  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.main}>
        <Switches />
        {/*<Login />*/}
        <Registration />
      </View>
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
    padding: 33,
  },
});
