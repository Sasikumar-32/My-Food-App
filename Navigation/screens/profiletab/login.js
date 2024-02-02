/*
Description:
----------------
This file defines the 'Login' component, responsible for user authentication in the React Native application.

Login Component:
---------------------
1. Component Purpose:
   - The 'Login' component allows users to enter their username and password for authentication.
   - It includes input fields for the username and password, along with a 'SUBMIT' button.

2. Component Structure:
   - The component uses 'View', 'Text', 'TextInput', 'Pressable', and 'StyleSheet' from 'react-native'.
   - Input fields for the username and password are provided.
   - The 'SUBMIT' button triggers navigation to the 'ProfileScreen' with the entered username.
   - A 'Forgot Password?' link is included.

3. Styles:
   - Styles for this component are defined using 'StyleSheet.create' for consistent and maintainable styling.
   - It includes styles for the view, text, text input, pressable button, and pressable link.

4. State:
   - The component uses the 'useState' hook to manage the state of the username and password.

Usage:
-------
- Integrate the 'Login' component into the user authentication flow.
*/
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const styles = StyleSheet.create({
    l_usrdetail_view_style:{
        gap:5,
    },
    l_usrdetail_text_style: {
        fontSize: 18,
        color: '#264653',
    },
    l_textinput_style:{
        width:'100%',
        height:40,
        padding:5,
        backgroundColor:'whitesmoke',
        borderWidth:1,
        borderColor:'#e9c46a',
        borderRadius:5,
    },
    l_pressable_style: {
        borderWidth: 1,
        borderColor: '#e9c46a',
        paddingVertical:10,
        paddingHorizontal:10,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#264653',
        borderRadius: 5,
    },
    l_pressable_text_style: {
        textAlign: 'center',
        color: '#e9c46a'
    },
    l_pressable_link_style: {
        textAlign: 'center',
        color: '#e9c46a',
        textDecorationLine: 'underline',
    }
})
const Login = ({ navigation }) => {
    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');

  return (
    <View style={[{padding:6,gap:7}]}>
        <View style={styles.l_usrdetail_view_style}>
            <Text style={styles.l_usrdetail_text_style}>Enter the username:</Text>
            <TextInput 
                style={styles.l_textinput_style} 
                placeholder='enter username here...'
                value={userName}
                onChangeText={setUserName}
            />
        </View>
        <View style={styles.l_usrdetail_view_style}>
            <Text style={styles.l_usrdetail_text_style}>Enter the password:</Text>
            <TextInput 
                style={styles.l_textinput_style} 
                placeholder='enter password here...'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
        </View>
        <View style={styles.l_usrdetail_view_style}>
            <Pressable 
            style={styles.l_pressable_style}
            onPress={() => navigation.replace('ProfileScreen',{userName:userName})}
            >
                <Text style={styles.l_pressable_text_style}>SUBMIT</Text>
            </Pressable>
        </View>
        <View >
            <Pressable>
                <Text style={styles.l_pressable_link_style}>Forgot Passowrd?</Text>
            </Pressable>
        </View>
    </View>   
  )
}

export default Login