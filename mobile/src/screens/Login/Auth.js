import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {StackActions} from 'react-navigation';

export default class Login extends PureComponent {
  constructor(pros) {
    super(pros);
    this.goToScreen = this.goToScreen.bind(this);
  }

  render() {
    const {goToScreen} = this;
    return (
      <>
        <View style={styles.containerStyle}>
          <Text children="Mergi FMM" />
          <TouchableOpacity
            style={styles.inputView}
            onPress={(_) => goToScreen('Login')}
            full={true}
            light={true}
            title="Login">
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.inputView}
            onPress={(_) => goToScreen('Register')}
            full={true}
          />
        </View>
      </>
    );
  }

  goToScreen(screen) {
    const {navigation} = this.props;
    const replaceAction = StackActions.replace(
      {
        routeName: screen,
      },
      {from: 0},
    );
    navigation.dispatch(replaceAction);
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 16,
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
});
