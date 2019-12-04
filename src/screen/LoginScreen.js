import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import Inputs from '../components/Inputs';
import Button from '../components/Button';
import fire from '../config/fire';

const LoginScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorLoginMessage, setErrorLoginMessage] = useState(' ');
  const [errorPasswordMessage, setErrorPasswordMessage] = useState(' ');

  const updateLogin = email => setEmail(email);
  const updatePassword = password => setPassword(password);

  const handleLogin = () => {
    setErrorLoginMessage(' ');
    setErrorPasswordMessage(' ');
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate('Map');
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            return setErrorLoginMessage(
              'Ошибка, неверный email. Попроуйте снова',
            );
          case 'auth/wrong-password':
            return setErrorPasswordMessage('Неверный пароль');
          default:
            return setErrorLoginMessage('Упс, непредвиденная ошибка');
        }
      });
  };

  return (
    <View style={styles.container}>
      <Inputs
        loginError={errorLoginMessage}
        passwordError={errorPasswordMessage}
        updateLogin={updateLogin}
        updatePassword={updatePassword}
        email={email}
        password={password}
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

        <Button text="Войти" handle={handleLogin} />
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
