import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import ExchangeScreen from './screens/ExchangeScreen'
import signUpLoginScreen from './screens/signUpLoginScreen';
import  {AppDrawerNavigator}  from './components/AppDrawerNavigator'
import  {AppTabNavigator}  from './components/AppTabNavigator'



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
Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
