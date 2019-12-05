import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Inputs = ({
  loginError,
  passwordError,
  updateLogin,
  updatePassword,
  email,
  password,
  isDisable,
}) => {
  const [secureText, setsecureText] = useState(true);

  return (
    <View>
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={text => updateLogin(text)}
        value={email}
        keyboardType="email-address"
        editable={!isDisable}
        // autoFocus={true}
      />
      {loginError && <Text style={styles.error}>{loginError}</Text>}

      <Text style={styles.label}>Пароль</Text>
      <TextInput
        style={[styles.input, secureText && styles.password]}
        onChangeText={text => updatePassword(text)}
        value={password}
        secureTextEntry={secureText}
        editable={!isDisable}
      />
      {passwordError && <Text style={styles.error}>{passwordError}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 13,
    color: '#252D76',
    opacity: 0.5,
    marginTop: '3%',
  },
  input: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: 'rgba(37, 45, 118, 0.2)',
    padding: 2,
    fontSize: 14,
    fontFamily: 'Quicksand-Bold',
    color: '#252D76',
    marginBottom: 8,
  },
  password: {
    letterSpacing: 6,
  },
  error: {
    color: '#E81D4E',
    fontSize: 12,
    fontFamily: 'Roboto-Medium',
  },
});

export default Inputs;
