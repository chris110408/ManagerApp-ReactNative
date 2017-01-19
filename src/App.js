/**
 * Created by leichen on 2017/1/15.
 */
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import  LoginForm from './components/LoginForm'

class App extends Component {

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCz2gdKnCjGI8SbXCQSB2cFkUJuLp59SwY",
            authDomain: "manager-2306a.firebaseapp.com",
            databaseURL: "https://manager-2306a.firebaseio.com",
            storageBucket: "manager-2306a.appspot.com",
            messagingSenderId: "1064232230591"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{flex:1}}>
                    <LoginForm />
                </View>
            </Provider>

        );
    };
}
export default App;
