/*
Description:
----------------
This file defines the 'UserDetail' component, responsible for managing user login and signup options in the React Native application.

UserDetail Component:
---------------------
1. Component Purpose:
  - The 'UserDetail' component allows users to choose between login and signup options.
  - It renders either the 'Login' or 'Signup' component based on the user's selection.

2. Component Structure:
  - The component uses 'View', 'Text', 'Pressable', and 'StyleSheet' from 'react-native'.
  - Two Pressable components are used for 'LOGIN' and 'SIGNUP' options.
  - The 'Login' or 'Signup' component is rendered based on the user's selection.

3. Styles:
  - Styles for this component are defined using 'StyleSheet.create' for consistent and maintainable styling.
  - It includes styles for the pressable view, pressable buttons, and text.

4. State:
  - The 'userSelect' state is used to determine whether the user has selected 'login' or 'signup'.

Usage:
-------
- Integrate the 'UserDetail' component into the navigation stack to manage user login and signup.
*/
import { View, Text, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Login from './login';
import Signup from './signup';

const styles = StyleSheet.create({
  ps_pressable_view_style: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical:4,
  },
  ps_pressable_style: {
    // borderWidth: 1,
    // borderColor: '#e9c46a',
    paddingVertical:10,
    paddingHorizontal:10,
    width: '50%',
    textAlign: 'center',
    backgroundColor: '#264653'
  },
  ps_pressable_text_style: {
    textAlign: 'center',
    color: '#e9c46a'
  }
})
const UserDetail = ({navigation}) => {
  const [userSelect,setUserSelect] = useState('login');
  return (
    <View>
      <View style={styles.ps_pressable_view_style}>
        <Pressable 
        style={[styles.ps_pressable_style,
        {borderBottomWidth: 3,
        borderBottomColor: userSelect==='login' ? '#e9c46a' : '#264653'}]}
        onPress={() => setUserSelect('login')}
        >
          <Text style={styles.ps_pressable_text_style}>LOGIN</Text>
        </Pressable>
        <Pressable 
        style={[styles.ps_pressable_style,
        {borderBottomWidth:3,
        borderBottomColor: userSelect==='signup' ? '#e9c46a' : '#264653'}]}
        onPress={() => setUserSelect('signup')}
        >
          <Text style={styles.ps_pressable_text_style}>SIGNUP</Text>
        </Pressable>
      </View>
      {userSelect==='login' ? <Login navigation={navigation}/> : <Signup navigation={navigation}/> }
    </View>
  )
}

export default UserDetail