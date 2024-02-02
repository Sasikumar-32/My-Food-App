/*
Description:
----------------
This file defines the 'Signup' component, responsible for user registration in the React Native application.

Signup Component:
---------------------
1. Component Purpose:
   - The 'Signup' component allows users to enter their details for user registration.
   - It includes input fields for the username, mobile number, location, password, and password confirmation.
   - A 'SUBMIT' button is provided for user registration.

2. Component Structure:
   - The component uses 'View', 'Text', 'TextInput', 'Pressable', and 'StyleSheet' from 'react-native'.
   - Input fields for the username, mobile number, location, password, and password confirmation are provided.
   - The 'SUBMIT' button triggers navigation to the 'ProfileScreen' with the entered username.

3. Styles:
   - Styles for this component are defined using 'StyleSheet.create' for consistent and maintainable styling.
   - It includes styles for the view, text, text input, pressable button.

4. State:
   - The component uses the 'useState' hook to manage the state of the username, mobile number, location, password, and password confirmation.

Usage:
-------
- Integrate the 'Signup' component into the user registration flow.
*/
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const styles = StyleSheet.create({
    s_usrdetail_view_style:{
        gap:5,
    },
    s_usrdetail_text_style: {
        fontSize: 18,
        color: '#264653',
    },
    s_textinput_style:{
        width:'100%',
        height:40,
        padding:5,
        backgroundColor:'whitesmoke',
        borderWidth:1,
        borderColor:'#e9c46a',
        borderRadius:5,
    },
    s_pressable_style: {
        borderWidth: 1,
        borderColor: '#e9c46a',
        paddingVertical:10,
        paddingHorizontal:10,
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#264653',
        borderRadius: 5,
    },
    s_pressable_text_style: {
        textAlign: 'center',
        color: '#e9c46a'
    }
})

const Signup = ({navigation}) => {
    const [userName,setUserName] = useState('');
    const [mobilenumber,setMobileNumber] = useState('');
    const [location,setLocation] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');

  return (
    <View style={[{padding:6,gap:7}]}>
        <View style={styles.s_usrdetail_view_style}>
            <Text style={styles.s_usrdetail_text_style}>Enter the username:</Text>
            <TextInput 
                style={styles.s_textinput_style} 
                placeholder='enter username here...'
                value={userName}
                onChangeText={setUserName}
            />
        </View>
        <View style={styles.s_usrdetail_view_style}>
            <Text style={styles.s_usrdetail_text_style}>Enter the mobile number:</Text>
            <TextInput 
                style={styles.s_textinput_style} 
                placeholder='enter mobile number here...'
                value={mobilenumber}
                onChangeText={setMobileNumber}
            />
        </View>
        <View style={styles.s_usrdetail_view_style}>
            <Text style={styles.s_usrdetail_text_style}>Enter the location:</Text>
            <TextInput 
                style={styles.s_textinput_style} 
                placeholder='enter location here...'
                secureTextEntry={true}
                value={location}
                onChangeText={setLocation}
            />
        </View>
        <View style={styles.s_usrdetail_view_style}>
            <Text style={styles.s_usrdetail_text_style}>Enter the password:</Text>
            <TextInput 
                style={styles.s_textinput_style} 
                placeholder='enter password here...'
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
        </View>
        <View style={styles.s_usrdetail_view_style}>
            <Text style={styles.s_usrdetail_text_style}>Confirm the password:</Text>
            <TextInput 
                style={styles.s_textinput_style} 
                placeholder='Re-Enter password here...'
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
            />
        </View> 
        <View style={styles.s_usrdetail_view_style}>
            <Pressable 
            style={styles.s_pressable_style}
            onPress={() => navigation.replace('ProfileScreen',{userName:userName})}
            >
                <Text style={styles.s_pressable_text_style}>SUBMIT</Text>
            </Pressable>
        </View>
    </View>  
  )
}

export default Signup