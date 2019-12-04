import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Inputs from '../components/Inputs';
import Button from '../components/Button';
import * as firebase from 'firebase';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLoginMessage, setErrorLoginMessage] = useState(' ');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState('Jib,rf ');

  return (
    <View style={styles.container}>
      <Inputs
        loginError={errorLoginMessage}
        passwordError={errorPasswordMessage}
      />

      <View style={styles.registration}>
        <Text style={styles.registrationText}>Еще не зарегистрированы?</Text>

        <TouchableHighlight
          underlayColor="white"
          onPress={() => props.navigation.navigate('Registration')}>
          <View style={styles.button}>
            <Text style={styles.regButtonText}>Регистрация</Text>
          </View>
        </TouchableHighlight>

        <Button text="Войти" />
      </View>
    </View>
  );
};

LoginScreen.navigationOptions = {
  // headerTitle: <Switches />,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  registration: {
    alignItems: 'center',
    marginTop: 22,
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
});

export default LoginScreen;
