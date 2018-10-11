/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Setting from './src/Setting';
import Home from './src/Home';

const AppNavigator = StackNavigator({
  Setting :{screen: Setting},
Home :{screen: Home}
});


export default class App extends Component {
  render() {
    return (
     <AppNavigator/>
    );
  }
}
