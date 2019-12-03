import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Inputs from './Inputs';
import Button from './Button';
import Switches from './Switches';

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

        <Button text="Войти" />
      </View>
    </View>
  );
};

Login.navigationOptions = {
  // headerTitle: <Switches />,
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
});

export default Login;
