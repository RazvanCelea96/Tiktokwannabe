import {connect} from 'react-redux';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import {actionCreator, ActionTypes} from '../../App/AppActions';
import {DashboardActionTypes} from '../../Redux/actions/actions';
import Login from './index';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch, _) => ({
  async doLogin(username, password, {navigation}) {
    //Make network request and other checks for your login implementation here

    try {
      const authResponse = await axios.post(
        'http://ec2-18-191-105-106.us-east-2.compute.amazonaws.com:3009/api/users/signin',
        {
          email: 'tsovakh4@gmail.com',
          password: 'tsovak2002',
        },
      );
      const responseJSON = await authResponse.data.userJwt;
      console.log(responseJSON);
      if (authResponse.ok && authResponse.status == 200) {
        navigation.navigate('Home');
        AsyncStorage.setItem('token', responseJSON.token)
          .then(() => dispatch(actionCreator(DashboardActionTypes.LOAD_DATA)))
          .catch((error) => console.log('aici se fute', error))
          .finally((_) => dispatch(actionCreator(ActionTypes.LOGIN)));
      } else {
        throw authResponse.status;
      }
    } catch (error) {
      console.log(error);
    }
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
