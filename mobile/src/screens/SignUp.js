import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';

const SignUp = () => {
  let [fullName, setFullName] = useState('');
  let [email, setEmail] = useState('');
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  const onSignUpPressed = () => {
    try {
      console.log(
        'user successfully signed up!: ',
        username,
        password,
        fullName,
        email,
      );
    } catch (err) {
      console.log('error signing up: ', err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Signing Up</Text>
      <Text style={styles.forgot}>Already have an account?</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Full Name"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setFullName({fullName: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail({email: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Username"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setUsername({username: text})}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          autoCapitalize="none"
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword({password: text})}
        />
      </View>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => onSignUpPressed()}>
        <Text style={styles.loginText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: '500',
    fontSize: 21,
    color: '#272A2E',
    lineHeight: 38,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#C6D0DA',
    opacity: 0.2,
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#8B939A',
  },
  forgot: {
    color: 'black',
    fontSize: 11,
  },
  loginBtn: {
    width: '40%',
    backgroundColor: '#C6D0DA',
    borderRadius: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default SignUp;
