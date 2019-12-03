import React from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native';

const Switches = props => {
  return (
    <View style={styles.wrap}>
      <TouchableHighlight
        underlayColor="white"
        onPress={() => props.navigation.navigate('LoginScreen')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Вход</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="white"
        onPress={() => props.navigation.navigate('RegistrationScreen')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Регистрация</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonText: {
    color: '#AEAEAE',
    fontSize: 15,
    fontFamily: 'RobotoSlab-Bold',
  },
});

export default Switches;
