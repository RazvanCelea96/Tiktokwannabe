import React, {PureComponent} from 'react';
import {
  Text,
  View,
  ToastAndroid,
  ActivityIndicator,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import Anchor from './Anchor';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';

export default class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      loading: false,
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  render() {
    const {navigation} = this.props,
      from = navigation.getParam('from') || 1,
      {loading} = this.state;

    return (
      <KeyboardAvoidingView style={styles.container}>
        <KeyboardAvoidingView style={styles.logoView}>
          <Text style={styles.logo} children="Signing In" />
          <View style={{flexDirection: 'row'}}>
            <Text>Don't have an account? </Text>
            <Anchor
              style={{marginTop: 8, textAlign: 'center', color: 'red'}}
              title="SignUp"
              onPress={(_) =>
                navigation.navigate({routeName: 'Register', params: {from}})
              }
            />
          </View>
        </KeyboardAvoidingView>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            onChangeText={this.onUsernameChange}
            placeholder="Username or Email"
            autoCorrect={false}
            autoCompleteType="off"
            keyboardAppearance="dark"
            numberOfLines={1}
            spellCheck={false}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            onChangeText={this.onPasswordChange}
            placeholder="Password"
            autoCorrect={false}
            autoCompleteType="off"
            keyboardAppearance="dark"
            numberOfLines={1}
            spellCheck={false}
            secureTextEntry={true}
          />
        </View>
        <Anchor
          style={styles.forgot}
          title="Forgot Password?"
          onPress={(_) => navigation.navigate('ResetPassword')}
        />

        <View style={styles.loginBtn}>
          {loading ? (
            <ActivityIndicator size="large" />
          ) : (
            <TouchableOpacity
              onPress={() => {
                this.attemptLogin();
                navigation.navigate('Home');
              }}
              title="Login">
              <Text style={styles.loginText}>Sign In</Text>
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    );
  }

  onPasswordChange(password) {
    this.setState({password});
  }

  onUsernameChange(username) {
    this.setState({username});
  }

  attemptLogin() {
    const {username, password} = this.state;
    let errorMessage = null;

    if (username == null || username.length < 4) {
      errorMessage = 'Username is minimum of  4 character.';
    } else if (password == null || password.length < 6) {
      errorMessage = 'Password is minimum of 6 character.';
    }

    if (errorMessage != null) {
      ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
    } else {
      //Do Login
      this.setState({loading: true}, () => {
        this.props.doLogin({username, password}, (error) => {
          alert(error);
          this.setState({loading: false});
        });
      });
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 21,
    color: '#272A2E',
  },
  logoView: {
    top: '-10%',
    left: '-15%',
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f4f6f8',
    borderRadius: 100,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    bottom: '10%',
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    marginTop: 20,
    color: 'black',
    fontSize: 11,
  },
  checkBoxContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  loginBtn: {
    width: '50%',
    backgroundColor: '#C6D0DA',
    borderRadius: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    bottom: '10%',
  },
  loginText: {
    color: 'white',
  },
});
