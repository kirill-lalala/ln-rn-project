import React from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';

const Button = ({text, handle, inversion}) => {
  return (
    <TouchableHighlight underlayColor="white" onPress={handle}>
      <View style={[styles.button, inversion && styles.buttonInversion]}>
        <Text style={[styles.buttonText, inversion && styles.textInversion]}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 50,
    paddingLeft: 50,
    backgroundColor: '#3168DE',
    borderRadius: 23,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Quicksand-Bold',
  },
  buttonInversion: {
    backgroundColor: '#fff',
  },
  textInversion: {
    color: '#3168DE',
  },
});
export default Button;
