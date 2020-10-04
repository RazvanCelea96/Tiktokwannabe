import React from 'react';
import {
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  View,
  StyleSheet,
} from 'react-native';

import * as yup from 'yup';
import {Formik} from 'formik';
import Navigation from '../../routes/Navigation';

const Login = ({navigation}) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values) => Alert.alert(JSON.stringify(values))}
      validationSchema={yup.object().shape({
        email: yup.string().email().required(),
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
              Don't have an account?
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: 'red'}}>Sign up</Text>
              </TouchableOpacity>
            </Text>
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
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.loginText}>Login</Text>
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
    top: '20%',
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

export default Login;
