import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDoslenfyasdtmUOCtGKPtr54CFTeU2BvY',
      authDomain: 'manager-e244e.firebaseapp.com',
      databaseURL: 'https://manager-e244e.firebaseio.com',
      projectId: 'manager-e244e',
      storageBucket: '',
      messagingSenderId: '412384783886'
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
