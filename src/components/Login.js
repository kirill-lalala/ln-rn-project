import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';

const Login = () => {
  const [loginText, setLoginText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [secureText, setsecureText] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setLoginText(text)}
        value={loginText}
        keyboardType="email-address"
        autoFocus={true}
      />

      <Text style={styles.label}>Пароль</Text>
      <TextInput
        style={[styles.input, secureText && styles.password]}
        onChangeText={text => setPasswordText(text)}
        value={passwordText}
        secureTextEntry={secureText}
      />

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
  label: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 13,
    color: '#252D76',
    opacity: 0.5,
  },
  input: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(37, 45, 118, 0.2)',
    padding: 2,
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
    color: '#252D76',
    marginBottom: 24,
  },
  password: {
    letterSpacing: 6,
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
