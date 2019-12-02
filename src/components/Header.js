import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <View style={styles.logoUppercase}>
          <Text style={[styles.letter, styles.yellow]}>L</Text>
          <Text style={styles.letter}>F</Text>
        </View>
        <View style={styles.logoText}>
          <Text style={[styles.word, styles.yellow]}>потерял</Text>
          <Text style={styles.word}>нашел</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#3066E0',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoUppercase: {
    textTransform: 'uppercase',
    flexDirection: 'row',
  },
  letter: {
    fontSize: 49,
    fontWeight: '100',
    color: '#fff',
    fontFamily: 'Montserrat-ExtraBold',
  },
  yellow: {
    color: '#F7D352',
  },
  logoText: {
    marginLeft: 15,
    paddingTop: 7,
    justifyContent: 'center',
  },
  word: {
    fontSize: 16,
    lineHeight: 16,
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
  },
});

export default Header;
