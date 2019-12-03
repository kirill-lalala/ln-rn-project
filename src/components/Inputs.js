import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Inputs = () => {
  const [loginText, setLoginText] = useState('');
  const [passwordText, setPasswordText] = useState('');
  const [secureText, setsecureText] = useState(true);

  return (
    <View>
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
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Inputs;
