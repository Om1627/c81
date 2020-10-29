import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,TextInput, Alert } from 'react-native';

import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component {
  constructor(){
    super()
    this.state={
      username : '',
      password: ''
    }
  }

  userLogin = (username, password)=>{
    firebase.auth().signInWithEmailAndPassword(username, password)
    .then(()=>{
      return Alert.alert("Successfully Login")
    })
    .catch((error)=> {
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    })
  }

  userSignUp = (username, password) =>{
    firebase.auth().createUserWithEmailAndPassword(username, password)
    .then((response)=>{
      return Alert.alert("User Added Successfully")
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      return Alert.alert(errorMessage)
    });
  }


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.profileContainer}>
         
          <Text style={styles.title}>Barter System</Text>
          <Text style={{color:'#ff8a65'}}> A Book Trading App </Text>
        </View>

        <View style={styles.loginBox}>
        
       
            <TextInput
            style={styles.formTextInput}
            placeholder={'e-mail'}
            keyboardType ='email-address'
            onChangeText={(text)=>{
              this.setState({
                username: text
              })
            }}
            />
        
    
         
            <TextInput
              style={styles.formTextInput}
              secureTextEntry = {true}
              placeholder={'password'}
              onChangeText={(text)=>{
                this.setState({
                  password: text
                })
              }}
            />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress = {()=>{this.userLogin(this.state.username, this.state.password)}}
              >
              <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={()=>{this.userSignUp(this.state.username, this.state.password)}}
              >
              <Text style={{color:'#ff5722', fontSize:18, fontWeight:'bold'}}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
     
    )
  }
}
const styles = StyleSheet.create({
   profileContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  title :{
    fontSize:40,
    fontWeight:'300',
  
    color : '#ff9800'
  },
    container:{
     flex:1,
     backgroundColor:'lightgreen',
     alignItems: 'center',
     justifyContent: 'center'
   },
   buttonContainer:{
     flex:1,
     justifyContent:'center',
     alignItems:'center',
     marginTop:0
   },
  
   loginBox:{
     flex:1,
     width: 300,
     height: 40,
     
     borderColor : '#ff8a65',
     fontSize: 20,
     margin:100,
     paddingLeft:10
   },
   button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 10.32,
    elevation: 16,
    padding: 10,
    marginTop:20
  },
  formTextInput:{
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor:'#ffab91',
    fontSize: 20,
    marginBottom:20,
    marginTop:5
    
  },
})

