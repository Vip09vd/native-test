import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import mainReducer from './app/Reducers/mainReducer';

const store = createStore(mainReducer, applyMiddleware(thunk));
const AppContainer = () =>
	<Provider store={store}>
		<App/>
	</Provider>;

AppRegistry.registerComponent('AwesomeProject', () => AppContainer);
