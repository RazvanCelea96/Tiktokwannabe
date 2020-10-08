import React, {PureComponent} from 'react';
import {Text, View, ToastAndroid, ActivityIndicator} from 'react-native';
import Button from './Button';
import Input from './Input';
import Anchor from './Anchor';

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
      <>
        <View style={style.containerStyle}>
          <Text
            style={style.shortTextStyle}
            children="Provide your account credentials to continue"
          />
          <Input
            onChangeText={this.onUsernameChange}
            style={{marginBottom: 10}}
            placeholder="Username"
          />
          <Input
            onChangeText={this.onPasswordChange}
            placeholder="Password"
            isPassword={true}
          />
          <Anchor
            style={{marginBottom: 32, textAlign: 'right'}}
            title="Forgot Password?"
            onPress={(_) => navigation.navigate('ResetPassword')}
          />
          {loading ? (
            <ActivityIndicator size="small" />
          ) : (
            <Button
              onPress={() => this.attemptLogin()}
              full={true}
              title="Login"
            />
          )}
          <Anchor
            style={{marginTop: 8, textAlign: 'center'}}
            title="Create an account"
            onPress={(_) =>
              navigation.navigate({routeName: 'Register', params: {from}})
            }
          />
        </View>
      </>
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

const style = {
  containerStyle: {
    flex: 1,
    backgroundColor: '#050505',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 16,
  },

  brandTextStyle: {fontSize: 28, color: '#ffffff', fontWeight: '700'},

  shortTextStyle: {fontSize: 14, color: '#ffffff90', marginBottom: 32},
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     fontWeight: 'bold',
//     fontSize: 21,
//     color: '#272A2E',
//   },
//   logoView: {
//     position: 'absolute',
//     top: '20%',
//     left: '12%',
//   },
//   inputView: {
//     width: '80%',
//     backgroundColor: '#f4f6f8',
//     borderRadius: 100,
//     height: 50,
//     marginBottom: 20,
//     justifyContent: 'center',
//     padding: 20,
//   },
//   inputText: {
//     height: 50,
//     color: '#8B939A',
//   },
//   forgot: {
//     color: 'black',
//     fontSize: 11,
//   },
//   loginBtn: {
//     width: '40%',
//     backgroundColor: '#C6D0DA',
//     borderRadius: 100,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   loginText: {
//     color: 'white',
//   },
// });
