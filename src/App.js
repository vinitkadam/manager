import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
