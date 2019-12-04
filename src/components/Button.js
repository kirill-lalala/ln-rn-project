import React from 'react';
import {Text, TouchableHighlight, View, StyleSheet} from 'react-native';

const Button = ({text, handle}) => {
  return (
    <TouchableHighlight underlayColor="white" onPress={handle}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
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
});
export default Button;
