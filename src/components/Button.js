import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {Loader} from './Loader';

const Button = ({text, handle, inversion, showLoading, isChecked = true}) => {
  return (
    <>
      <TouchableOpacity
        disabled={showLoading || !isChecked}
        underlayColor="white"
        onPress={handle}
        style={{marginBottom: '2%'}}>
        <View
          style={[
            styles.button,
            inversion && styles.buttonInversion,
            (!isChecked || showLoading) && styles.disable,
          ]}>
          <Text style={[styles.buttonText, inversion && styles.textInversion]}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
      {showLoading && <Loader />}
    </>
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
  disable: {
    backgroundColor: '#a6bdf2',
  },
});
export default Button;
