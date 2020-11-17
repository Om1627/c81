import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../components/MyHeader'
export default class SettingsScreen extends React.Component {
  render() {
    return (
     <MyHeader title='Settings'/>
      
    )
  }
}
var styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems:'center'
  }
})