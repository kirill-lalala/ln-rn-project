import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Checkbox from 'react-native-custom-checkbox';
import Svg, {Path} from 'react-native-svg';
import Inputs from './Inputs';
import Button from './Button';

const Registration = () => {
  return (
    <View style={styles.container}>
      <View style={styles.photoBlock}>
        <Text style={styles.photoText}>Фото</Text>
        <View style={styles.photo}>
          <Svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M23.1111 0H2.88891C1.29276 0 0 1.29276 0 2.88891V23.1112C0 24.7072 1.29276 26 2.88891 26H23.1112C24.7072 26 26 24.7072 26 23.1111V2.88891C26 1.29276 24.7072 0 23.1111 0ZM13 4.33333C15.3906 4.33333 17.3333 6.27609 17.3333 8.66667C17.3333 11.0644 15.3906 13 13 13C10.6094 13 8.66667 11.0644 8.66667 8.66667C8.66667 6.27609 10.6094 4.33333 13 4.33333ZM21.6667 21.6667H4.33333V20.2222C4.33333 17.3333 10.1111 15.7445 13 15.7445C15.8889 15.7445 21.6667 17.3333 21.6667 20.2222V21.6667Z"
              fill="#A3B7E4"
            />
          </Svg>
        </View>
      </View>

      <Inputs />
      <View style={styles.policyBlock}>
        <Checkbox style={styles.checkBox} />
        <Text style={styles.polityText}>
          Я согласен с{' '}
          <Text style={styles.privacyPolicy}>Политикой Конфиденциальности</Text>
        </Text>
      </View>

      <View style={styles.regButton}>
        <Button text="Регистрация" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
  },
  photoBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  photoText: {
    marginRight: 70,
    color: '#252D76',
    fontFamily: 'Ubuntu-Bold',
    opacity: 0.5,
    fontSize: 13,
  },
  photo: {
    width: 100,
    height: 100,
    backgroundColor: '#E7E7E7',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  policyBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkBox: {
    backgroundColor: '#E7E9F5',
    borderRadius: 1,
    borderWidth: 0,
  },
  polityText: {
    width: '60%',
    marginLeft: 7,
    paddingTop: 3,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  privacyPolicy: {
    color: '#3066E0',
  },
  regButton: {
    alignItems: 'center',
    marginTop: 40,
  },
});

export default Registration;
