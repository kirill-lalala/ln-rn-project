import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import {AppNavigation} from './src/navigation/AppNavigation';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <View style={styles.app}>
      <Header />
      <View style={styles.main}>
        <AppNavigation />
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
  },
});

export default App;
