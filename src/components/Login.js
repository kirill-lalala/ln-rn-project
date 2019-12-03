import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import Inputs from './Inputs';

const Login = () => {
  return (
    <View style={styles.container}>
      <Inputs />

      <View style={styles.registration}>
        <Text style={styles.registrationText}>Еще не зарегистрированы?</Text>
        <TouchableHighlight underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.regButtonText}>Регистрация</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight underlayColor="white">
          <View style={styles.entryButton}>
            <Text style={styles.entryButtonText}>Войти</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  registration: {
    alignItems: 'center',
    marginTop: 30,
  },
  registrationText: {
    color: '#929292',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginBottom: 7,
  },
  regButtonText: {
    color: '#3066E0',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginBottom: 42,
  },
  entryButton: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 50,
    paddingLeft: 50,
    backgroundColor: '#3168DE',
    borderRadius: 23,
  },
  entryButtonText: {
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
  },
});

export default Login;
