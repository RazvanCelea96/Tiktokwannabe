import React from 'react';
import {AppRegistry} from 'react-native';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {name as appName} from './app.json';
import DashboardReducer from './src/Redux/reducers/reducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import AppReducer from './src/App/AppReducer';
import AppContainer from './src/App/AppContainer';

//redux and react-redux settings

const reducers = combineReducers({
  //add all reducers here
  dashboardState: DashboardReducer,
  appState: AppReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

const rootComponent = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

AppRegistry.registerComponent(appName, () => rootComponent);
