import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Svg, {Path} from 'react-native-svg';

const Inputs = ({
  loginError,
  passwordError,
  updateLogin,
  updatePassword,
  email,
  password,
  isDisable,
}) => {
  const [showPassword, setShowPassword] = useState(true);
  const onEyePress = () => {
    setShowPassword(!showPassword);
  };


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
      <View>
        <TextInput
          style={[styles.input, showPassword && styles.password]}
          onChangeText={text => updatePassword(text)}
          value={password}
          secureTextEntry={showPassword}
          editable={!isDisable}
        />
        <TouchableOpacity style={styles.eye} onPressIn={onEyePress} onPressOut={onEyePress}>
          <Svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.98665 13.338C4.38388 13.338 1.11628 9.1713 0.65332 6.85648C1.11628 4.54167 4.38388 0.375 8.98665 0.375C13.5894 0.375 16.857 4.54167 17.32 6.85648C16.857 9.1713 13.5894 13.338 8.98665 13.338ZM8.98665 1.76389C5.35239 1.76389 2.6487 4.97732 2.08389 6.85648C2.6487 8.73565 5.35239 11.9491 8.98665 11.9491C12.6209 11.9491 15.3246 8.73565 15.8894 6.85648C15.3246 4.97732 12.6209 1.76389 8.98665 1.76389ZM8.98665 9.63426C8.43726 9.63426 7.9002 9.47135 7.4434 9.16613C6.98659 8.8609 6.63057 8.42706 6.42032 7.91948C6.21008 7.41191 6.15507 6.85341 6.26225 6.31457C6.36943 5.77573 6.634 5.28079 7.02248 4.89231C7.41096 4.50383 7.9059 4.23926 8.44474 4.13208C8.98358 4.0249 9.54208 4.07991 10.0497 4.29015C10.5572 4.5004 10.9911 4.85642 11.2963 5.31323C11.6015 5.77003 11.7644 6.30709 11.7644 6.85648C11.7644 7.5932 11.4718 8.29972 10.9508 8.82066C10.4299 9.34159 9.72337 9.63426 8.98665 9.63426ZM8.98665 5.46759C8.71196 5.46759 8.44344 5.54906 8.21504 5.70167C7.98664 5.85429 7.8086 6.07118 7.70347 6.32497C7.59835 6.57875 7.57085 6.85802 7.62444 7.12744C7.67803 7.39686 7.81031 7.64434 8.00455 7.83858C8.19879 8.03282 8.44628 8.16511 8.7157 8.2187C8.98512 8.27229 9.26438 8.24478 9.51817 8.13966C9.77195 8.03454 9.98885 7.8565 10.1415 7.6281C10.2941 7.3997 10.3755 7.13118 10.3755 6.85648C10.3755 6.48813 10.2292 6.13485 9.96875 5.87438C9.70829 5.61391 9.35501 5.46759 8.98665 5.46759Z"
              fill="#3066E0"
            />
          </Svg>
        </TouchableOpacity>
      </View>

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
    paddingRight: 15,
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
  eye: {
    position: 'absolute',
    right: 0,
    top: '30%',
  },
});

export default Inputs;
