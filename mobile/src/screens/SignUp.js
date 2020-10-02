import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import * as yup from 'yup';
import {Formik} from 'formik';
const {height} = Dimensions.get('window');
const SignUp = () => {
  return (
    <Formik
      style={{height}}
      initialValues={{
        fullname: '',
        email: '',
        username: '',
        password: '',
      }}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        fullname: yup.string().required(),
        email: yup.string().email().required(),
        username: yup.string().required(),
        password: yup
          .string()
          .min(4)
          .max(10, 'Password should not excced 10 chars.')
          .required(),
      })}>
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        isValid,
        handleSubmit,
      }) => (
        <View style={styles.container}>
          <View style={styles.logoView}>
            <Text style={styles.logo}>Signing In</Text>
            <Text style={styles.forgot}>
              Already have an account? <Text>Login</Text>
            </Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              value={values.fullname}
              style={styles.inputText}
              onChangeText={handleChange('fullname')}
              onBlur={() => setFieldTouched(' fullname')}
              placeholder="Full Name"
            />
            {touched.fullname && errors.fullname && (
              <Text style={{fontSize: 12, color: '#FF0D10', bottom: '90%'}}>
                {errors.fullname}
              </Text>
            )}
          </View>
          <View style={styles.inputView}>
            <TextInput
              value={values.email}
              style={styles.inputText}
              onChangeText={handleChange('email')}
              onBlur={() => setFieldTouched('email')}
              placeholder="Email or Username"
            />
            {touched.email && errors.email && (
              <Text style={{fontSize: 12, color: '#FF0D10', bottom: '90%'}}>
                {errors.email}
              </Text>
            )}
          </View>
          <View style={styles.inputView}>
            <TextInput
              value={values.username}
              style={styles.inputText}
              onChangeText={handleChange('username')}
              onBlur={() => setFieldTouched('username')}
              placeholder="Username"
            />
            {touched.username && errors.username && (
              <Text style={{fontSize: 12, color: '#FF0D10', bottom: '90%'}}>
                {errors.username}
              </Text>
            )}
          </View>
          <View style={styles.inputView}>
            <TextInput
              value={values.password}
              style={styles.inputText}
              onChangeText={handleChange('password')}
              placeholder="Password"
              onBlur={() => setFieldTouched('password')}
              secureTextEntry={true}
            />
            {touched.password && errors.password && (
              <Text style={{fontSize: 12, color: '#FF0D10', bottom: '90%'}}>
                {errors.password}
              </Text>
            )}
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            disabled={!isValid}
            onPress={handleSubmit}>
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
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
    fontWeight: 'bold',
    fontSize: 21,
    color: '#272A2E',
  },
  logoView: {
    position: 'absolute',
    top: '10%',
    left: '12%',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f4f6f8',
    borderRadius: 100,
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
    marginTop: 20,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default SignUp;
