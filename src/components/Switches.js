import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TouchableHighlight} from 'react-native';

const Switches = props => {
  const isActiveButton = routeName =>
    props.scene.route.routeName === routeName && styles.active;

  return (
    <View style={styles.wrap}>
      <TouchableHighlight
        underlayColor="white"
        onPress={() => props.navigation.navigate('Login')}>
        <View style={styles.button}>
          <Text style={[styles.buttonText, isActiveButton('Login')]}>Вход</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight
        underlayColor="white"
        onPress={() => {
          props.navigation.navigate('Registration');
        }}>
        <View style={styles.button}>
          <Text style={[styles.buttonText, isActiveButton('Registration')]}>
            Регистрация
          </Text>
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
  active: {
    color: '#252D76',
    fontSize: 29,
  },
});

export default Switches;
