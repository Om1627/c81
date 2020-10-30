import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import ExchangeScreen from './screens/ExchangeScreen'
import signUpLoginScreen from './screens/signUpLoginScreen';

import  {AppTabNavigator}  from './components/AppTabNavigator'
import { render } from 'react-dom';


export default class App extends React.Component {
  render()
{
  return (
    <AppContainer/>
  );
}  
}


const switchNavigator = createSwitchNavigator({
  signUpLoginScreen:{screen: signUpLoginScreen},

  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
