import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={60} color="#405EF5" />
      <Text style={styles.text}>Загрузка...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#252D76',
    fontSize: 15,
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 10,
  },
});

export default LoadingScreen;
